import type { AnchorHTMLAttributes } from 'react';
import type { IconType } from 'react-icons';
import { observer } from 'mobx-react-lite';
import Loading from '@components/common/Loading';
import { useTheme } from '@emotion/react';
import { EmotionStyledIconType } from '@typings/custom';
import * as S from './styles';

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
        {loading && <Loading color={theme.color['gray-2']} />}
      </S.ButtonLink>
    );
  },
);

export default ButtonLink;
