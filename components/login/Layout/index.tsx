import type { FC } from 'react';
import * as S from './styles';

const Layout: FC = ({ children }) => {
  return (
    <S.Layout>
      <S.Container>
        <S.Header>
          <S.GitHubIcon />
          <h1>- timeline clone -</h1>
        </S.Header>
        <S.LoginBox>{children}</S.LoginBox>
      </S.Container>
    </S.Layout>
  );
};

export default Layout;
