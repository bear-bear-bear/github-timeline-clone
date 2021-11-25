import type { AnchorHTMLAttributes, FC } from 'react';
import type { IconBaseProps, IconType } from 'react-icons';
import { observer } from 'mobx-react-lite';
import type { StyledComponent } from '@emotion/styled';
import { Theme, useTheme } from '@emotion/react';
import Loading from '@components/common/Loading';
import * as S from './styles';

type EmptyObject = Record<string, never>;
type EmotionStyledIconType = StyledComponent<
  IconBaseProps & { theme?: Theme | undefined },
  EmptyObject,
  EmptyObject
>;

export interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  text: string;
  icon?: IconType | EmotionStyledIconType;
  fullWidth?: boolean;
  loading?: boolean;
}

const ButtonLink = observer<Props>(
  ({ text, icon, loading = false, fullWidth = false, ...rest }) => {
    const theme = useTheme();

    return (
      <S.ButtonLink fullWidth={fullWidth} {...rest}>
        {icon}
        {text}
        {loading && <Loading color={theme.color.textColor} />}
      </S.ButtonLink>
    );
  },
);

export default ButtonLink;
