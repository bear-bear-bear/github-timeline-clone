import type { FC } from 'react';
import { useState } from 'react';
import { github } from '@lib/oauth';
import * as S from './styles';

const GithubOauthLink: FC = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const handleLinkClick = () => {
    setLoading(true);
  };

  return (
    <S.GithubOauthLink
      href={github.AUTHORIZATION_URI}
      rel="noreferrer noopener"
      text="Login with github"
      loading={loading}
      onClick={handleLinkClick}
      fullWidth
    />
  );
};

export default GithubOauthLink;
