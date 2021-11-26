import { observer } from 'mobx-react-lite';
import type { ComponentType, CSSProperties } from 'react';
import type { IconType } from 'react-icons';
import { EmotionStyledIconType } from '@typings/custom';
import * as S from './styles';

export type Props = {
  SvgIcon: EmotionStyledIconType | IconType;
  menuFixedWidth?: CSSProperties['width'];
};

const DropDown = observer<Props>(({ SvgIcon, menuFixedWidth, children }) => (
  <S.Details>
    <summary>
      <SvgIcon />
      <S.DropdownIcon />
    </summary>
    <S.DropdownMenu menuFixedWidth={menuFixedWidth}>{children}</S.DropdownMenu>
  </S.Details>
));

export default DropDown;
