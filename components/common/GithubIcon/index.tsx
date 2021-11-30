import type { SVGAttributes } from 'react';
import { observer } from 'mobx-react-lite';
import * as S from './styles';

export interface Props extends SVGAttributes<HTMLOrSVGElement> {
  size?: SVGAttributes<HTMLOrSVGElement>['fontSize'];
}

const GithubIcon = observer<Props>(({ size, ...rest }) => {
  return <S.GithubIcon size={size} {...rest} />;
});

export default GithubIcon;
