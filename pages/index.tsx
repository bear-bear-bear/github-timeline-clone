import type { NextPage, Redirect } from 'next';
import { withIronSessionSsr } from 'iron-session/next';
import customAxios from '@lib/axios';
import { useState } from 'react';
import { sessionOptions } from '@lib/session';
import { github } from '@lib/oauth';

const Service: NextPage = () => {
  const [user, setUser] = useState<string>();

  const test = async () => {
    await customAxios
      .get('https://api.github.com/user')
      .then(({ data }) => {
        setUser(JSON.stringify(data, null, 2));
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <h1>서비스 페이지</h1>
      <button onClick={test}>API 테스트</button>
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
