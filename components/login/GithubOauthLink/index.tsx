import type { FC } from 'react';
import { github } from '@lib/oauth';
import * as S from './styles';

const GithubOauthLink: FC = () => {
  return (
    <S.GithubOauthLink
      href={github.AUTHORIZATION_URI}
      rel="noreferrer noopener"
      text="Login with github"
      fullWidth
    />
  );
};

export default GithubOauthLink;
