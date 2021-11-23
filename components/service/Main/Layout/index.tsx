import * as S from './styles';
import type { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};

const Layout = ({ children }: Props) => {
  return <S.Layout>{children}</S.Layout>;
};

Layout.CenterSection = S.CenterSection;

export default Layout;
