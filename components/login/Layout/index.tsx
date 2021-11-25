import type { FC } from 'react';
import * as S from './styles';
import GithubIcon from '@components/common/GithubIcon';
import { useTheme } from '@emotion/react';

const Layout: FC = ({ children }) => {
  const theme = useTheme();

  return (
    <S.Layout>
      <S.Container>
        <S.Header>
          <GithubIcon size="3.5rem" color={theme.color.textColor} />
          <h1>- timeline clone -</h1>
        </S.Header>
        <S.LoginBox>{children}</S.LoginBox>
      </S.Container>
    </S.Layout>
  );
};

export default Layout;
