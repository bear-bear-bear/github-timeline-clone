import type { Redirect } from 'next';
import { createContext } from 'react';
import { observer } from 'mobx-react-lite';
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
import type { User } from '@typings/oauth';

export const UserContext = createContext<User>({} as User);

const Service = observer<{ user: User }>(({ user }) => {
  return (
    <UserContext.Provider value={user}>
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
    </UserContext.Provider>
  );
});

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
    const user = await github.USER_GET_REQUEST(authInfo.accessToken);

    return {
      props: { user },
    };
  } catch (err) {
    console.error(err);
    req.session.destroy();

    return { redirect };
  }
}, sessionOptions);

export default Service;
