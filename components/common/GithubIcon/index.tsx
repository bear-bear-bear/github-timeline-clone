import type { SVGAttributes } from 'react';
import { observer } from 'mobx-react-lite';
import * as S from './styles';

export type Props = {
  color: SVGAttributes<HTMLOrSVGElement>['color'];
  size: SVGAttributes<HTMLOrSVGElement>['fontSize'];
};

const GithubIcon = observer<Props>(({ color, size }) => {
  return <S.GithubIcon color={color} size={size} />;
});

export default GithubIcon;
