import { observer } from 'mobx-react-lite';
import type { SVGAttributes } from 'react';
import * as S from './styles';

export type Props = {
  color?: SVGAttributes<HTMLOrSVGElement>['color'];
  size?: SVGAttributes<HTMLOrSVGElement>['fontSize'];
};

const Loading = observer<Props>(({ size, color }) => {
  return <S.Loading size={size} color={color} />;
});

export default Loading;
