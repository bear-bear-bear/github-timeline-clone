import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { AUTHORIZATION_URI } from '@lib/constant';
import { useEffect } from 'react';

const Home: NextPage = () => {
  const router = useRouter();

  /* 쿼리 에러메세지 alert */
  useEffect(() => {
    const { error } = router.query;
    if (error) {
      console.error(decodeURIComponent(error.toString()));
      router.push('/', undefined, { shallow: true });
    }
  });

  return <a href={AUTHORIZATION_URI}>깃허브로 로그인하기</a>;
};

export default Home;
