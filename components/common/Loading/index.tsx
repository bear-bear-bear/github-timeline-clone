import { observer } from 'mobx-react-lite';
import type { SVGAttributes } from 'react';
import * as S from './styles';

export type Props = {
  color?: SVGAttributes<HTMLOrSVGElement>['color'];
  size?: SVGAttributes<HTMLOrSVGElement>['fontSize'];
  withWrapper?: boolean;
};

const Loading = observer<Props>(({ size, color, withWrapper }) => {
  return withWrapper ? (
    <S.Wrapper>
      <S.Loading size={size} color={color} />
    </S.Wrapper>
  ) : (
    <S.Loading size={size} color={color} />
  );
});

export default Loading;
