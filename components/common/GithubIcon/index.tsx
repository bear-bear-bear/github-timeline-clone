import * as S from './styles';
import type { SVGAttributes } from 'react';

export type Props = {
  color: SVGAttributes<HTMLOrSVGElement>['color'];
  size: SVGAttributes<HTMLOrSVGElement>['fontSize'];
};

const GithubIcon = ({ color, size }: Props) => {
  return <S.GithubIcon color={color} size={size} />;
};

export default GithubIcon;
