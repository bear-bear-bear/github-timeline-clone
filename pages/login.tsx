import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Layout from '@components/login/Layout';
import GithubOauthLink from '@components/login/GithubOauthLink';
import { ERROR_MESSAGE } from '@pages/api/auth/callback';

const Login: NextPage = () => {
  const router = useRouter();

  /* 쿼리 에러메세지 로깅 */
  useEffect(() => {
    const errorMessage = router.query[ERROR_MESSAGE];
    if (!errorMessage) return;

    const decodedError = decodeURIComponent(errorMessage.toString());
    console.error(decodedError);
    router.push('/', undefined, { shallow: true });
  });

  return (
    <Layout>
      <GithubOauthLink />
    </Layout>
  );
};

export default Login;
