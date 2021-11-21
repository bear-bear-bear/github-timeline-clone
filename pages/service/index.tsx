import type { GetServerSideProps, NextPage } from 'next';
import cookie from 'cookie';

const Service: NextPage<{ accessToken: string }> = ({ accessToken }) => {
  return <div>액세스 토큰: {accessToken}</div>;
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { accessToken } = cookie.parse(req.headers.cookie || '');

  return {
    props: {
      accessToken,
    },
  };
};

export default Service;
