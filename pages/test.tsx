import { useRef, useState } from 'react';
import type { NextPage, Redirect } from 'next';
import { withIronSessionSsr } from 'iron-session/next';
import axios from 'axios';
import oauth2Axios from '@lib/axios';
import { sessionOptions } from '@lib/session';
import { github } from '@lib/oauth';
import { useRouter } from 'next/router';

const Test: NextPage = () => {
  const router = useRouter();
  const [res, setRes] = useState({
    data: '',
    error: '',
  });
  const inputRef = useRef<HTMLInputElement>(null);

  const test = async () => {
    if (!inputRef.current) return;
    const api = inputRef.current.value;
    await oauth2Axios
      .get(`https://api.github.com${api}`)
      .then(({ data }) => {
        setRes({
          data: JSON.stringify(data, null, 2),
          error: '',
        });
      })
      .catch((err) => {
        setRes({
          data: '',
          error: JSON.stringify(err, null, 2),
        });
      });
  };

  const logout = async () => {
    await axios.get('/api/auth/logout');
    router.replace('/login');
  };

  return (
    <div>
      <h1>API 테스트 페이지 - api.github.com</h1>
      <input type="text" placeholder="example - /user" ref={inputRef} />
      <button onClick={test}>API 테스트</button>
      <button onClick={logout}>로그아웃</button>
      <style jsx={true}>
        {`
          pre {
            width: fit-content;
            margin: 1rem;
          }
        `}
      </style>
      {res.error && <pre style={{ color: 'red' }}>{res.error}</pre>}
      {res.data && <pre>{res.data}</pre>}
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

export default Test;
