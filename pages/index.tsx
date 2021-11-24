import type { NextPage, Redirect } from 'next';
import { withIronSessionSsr } from 'iron-session/next';
import { sessionOptions } from '@lib/session';
import { github } from '@lib/oauth';
import Container from '@components/service/Container';
import MainLayout from '@components/service/Main/Layout';
import HeaderWrapper from '@components/service/Header/Wrapper';
import DesktopHeader from '@components/service/Header/Desktop';
import MobileHeader from '@components/service/Header/Mobile';
import Dashboard from '@components/service/Main/Dashboard';
import Activity from '@components/service/Main/Activity';
import Aside from '@components/service/Main/Aside';
import Footer from '@components/service/Main/Footer';

const Service: NextPage = () => {
  return (
    <Container>
      <HeaderWrapper>
        <DesktopHeader />
        <MobileHeader />
      </HeaderWrapper>
      <MainLayout>
        <Dashboard />
        <MainLayout.CenterSection>
          <Activity />
          <Footer />
        </MainLayout.CenterSection>
        <Aside />
      </MainLayout>
    </Container>
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
