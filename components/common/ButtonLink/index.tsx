import type { AnchorHTMLAttributes, FC } from 'react';
import type { IconBaseProps, IconType } from 'react-icons';
import type { StyledComponent } from '@emotion/styled';
import { Theme } from '@emotion/react';
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
}

const ButtonLink: FC<Props> = ({ text, icon, fullWidth = false, ...rest }) => {
  return (
    <S.ButtonLink fullWidth={fullWidth} {...rest}>
      {icon}
      {text}
    </S.ButtonLink>
  );
};

export default ButtonLink;
