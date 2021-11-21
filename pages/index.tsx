import type { GetServerSideProps, NextPage } from 'next';
import cookie from 'cookie';
import { LOGIN_PAGE } from '@lib/constant';
import customAxios from '@lib/axios';
import { useState } from 'react';

const Service: NextPage<{ userId: string }> = ({ userId }) => {
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
      <p>유저 아이디: {userId}</p>
      <button onClick={test}>API 테스트</button>
      <pre>{user}</pre>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { userId } = cookie.parse(req.headers.cookie || '');

  if (!userId) {
    return {
      redirect: {
        destination: LOGIN_PAGE,
        permanent: false,
      },
    };
  }

  return {
    props: {
      userId,
    },
  };
};

export default Service;
