import type { Redirect } from 'next';
import { createContext } from 'react';
import { observer } from 'mobx-react-lite';
import { withIronSessionSsr } from 'iron-session/next';
import { StoreProvider } from '@root/stores';
import { sessionOptions } from '@lib/session';
import { github } from '@lib/oauth';
import {
  AppContainer,
  HeaderLayout,
  MainLayout,
} from '@components/service/Layout';
import DesktopHeader from '@components/service/Header/Desktop';
import MobileHeader from '@components/service/Header/Mobile';
import Dashboard from '@components/service/Main/Dashboard';
import Activity from '@components/service/Main/Activity';
import Aside from '@components/service/Main/Aside';
import Footer from '@components/service/Main/Footer';
import type { User } from '@typings/oauth';

type Props = { user: User; accessToken: string };

export const UserContext = createContext<User>({} as User);
export const TokenContext = createContext<string>('');

const Service = observer<Props>(({ user, accessToken }) => {
  return (
    <StoreProvider>
      <UserContext.Provider value={user}>
        <TokenContext.Provider value={accessToken}>
          <AppContainer>
            <HeaderLayout.Container>
              <HeaderLayout.MobileWrapper>
                <MobileHeader />
              </HeaderLayout.MobileWrapper>
              <HeaderLayout.DesktopWrapper>
                <DesktopHeader />
              </HeaderLayout.DesktopWrapper>
            </HeaderLayout.Container>

            <MainLayout.Container>
              <MainLayout.LeftSection>
                <Dashboard />
              </MainLayout.LeftSection>
              <MainLayout.CenterSection>
                <Activity />
                <Footer />
              </MainLayout.CenterSection>
              <MainLayout.RightSection>
                <Aside />
              </MainLayout.RightSection>
            </MainLayout.Container>
          </AppContainer>
        </TokenContext.Provider>
      </UserContext.Provider>
    </StoreProvider>
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
      props: {
        user,
        accessToken: authInfo.accessToken,
      },
    };
  } catch (err) {
    console.error(err);
    req.session.destroy();

    return { redirect };
  }
}, sessionOptions);

export default Service;
