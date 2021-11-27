import { observer } from 'mobx-react-lite';
import type { DetailsHTMLAttributes, CSSProperties } from 'react';
import type { IconType } from 'react-icons';
import { EmotionStyledIconType } from '@typings/custom';
import * as S from './styles';

export interface Props extends DetailsHTMLAttributes<HTMLElement> {
  SvgIcon: EmotionStyledIconType | IconType;
  menuFixedWidth?: CSSProperties['width'];
}

const DropDown = observer<Props>(
  ({ SvgIcon, menuFixedWidth, children, ...rest }) => (
    <S.Details {...rest} className="dropdown">
      <summary>
        <SvgIcon />
        <S.DropdownIcon />
      </summary>
      <S.DropdownMenu menuFixedWidth={menuFixedWidth}>
        {children}
      </S.DropdownMenu>
    </S.Details>
  ),
);

export default DropDown;
export const recommendedItemStyle = S.recommendedItemItemStyle;
