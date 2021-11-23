import { useState } from 'react';
import type { NextPage, Redirect } from 'next';
import { withIronSessionSsr } from 'iron-session/next';
import axios from 'axios';
import oauth2Axios from '@lib/axios';
import { sessionOptions } from '@lib/session';
import { github } from '@lib/oauth';
import { useRouter } from 'next/router';

const Service: NextPage = () => {
  const router = useRouter();
  const [user, setUser] = useState<string>();

  const test = async () => {
    await oauth2Axios
      .get('https://api.github.com/user')
      .then(({ data }) => {
        setUser(JSON.stringify(data, null, 2));
      })
      .catch((err) => console.error(err));
  };

  const logout = async () => {
    await axios.get('/api/auth/logout');
    router.replace('/login');
  };

  return (
    <div>
      <h1>서비스 페이지</h1>
      <button onClick={test}>API 테스트</button>
      <button onClick={logout}>로그아웃</button>
      <pre>{user}</pre>
    </div>
  );
};

export const getServerSideProps = withIronSessionSsr(async function ({ req }) {
  const { authInfo } = req.session;
  const redirect: Redirect = {
    destination: '/login',
    permanent: false,
  };

  if (authInfo?.accessToken === undefined) {
    return { redirect };
  }

  try {
    const isTokenValid = await github.ACCESS_TOKEN_CHECK_REQUEST(
      authInfo.accessToken,
    );
    if (!isTokenValid) {
      req.session.destroy();
      return { redirect };
    }
  } catch (err) {
    console.error(err);
    req.session.destroy();
    return { redirect };
  }

  return {
    props: {},
  };
}, sessionOptions);

export default Service;
