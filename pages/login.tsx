import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Layout from '@components/login/Layout';
import GithubOauthLink from '@components/login/GithubOauthLink';

const Login: NextPage = () => {
  const router = useRouter();

  /* 쿼리 에러메세지 로깅 */
  useEffect(() => {
    const { callbackError } = router.query;
    if (callbackError) {
      const decodedError = decodeURIComponent(callbackError.toString());
      console.error(decodedError);
      router.push('/', undefined, { shallow: true });
    }
  });

  return (
    <Layout>
      <GithubOauthLink />
    </Layout>
  );
};

export default Login;
