import { observer } from 'mobx-react-lite';
import type { SVGAttributes } from 'react';
import * as S from './styles';

export interface Props extends SVGAttributes<HTMLOrSVGElement> {
  size?: SVGAttributes<HTMLOrSVGElement>['fontSize'];
  withWrapper?: boolean;
}

const Loading = observer<Props>(({ size, withWrapper, ...rest }) => {
  return withWrapper ? (
    <S.Wrapper>
      <S.Loading size={size} {...rest} />
    </S.Wrapper>
  ) : (
    <S.Loading size={size} {...rest} />
  );
});

export default Loading;
