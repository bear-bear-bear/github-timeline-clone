import * as S from './styles';
import type { SVGAttributes } from 'react';

export type Props = {
  size?: SVGAttributes<HTMLOrSVGElement>['fontSize'];
};

const GithubIcon = ({ size }: Props) => {
  return <S.GithubIcon size={size} />;
};

export default GithubIcon;
