import styled from '@emotion/styled';
import media from '@globalStyles/media';

/*
  App base container
*/

export const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

/*
  App header
*/

export const HeaderContainer = styled.section`
  background-color: ${({ theme }) => theme.color.serviceHeaderBgColor};
`;

export const DesktopHeaderWrapper = styled.section`
  display: none;

  ${media.md} {
    display: block;
  }
`;

export const MobileHeaderWrapper = styled.section`
  ${media.md} {
    display: none;
  }
`;

/*
  App main
*/

export const MainContainer = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.serviceMainBgColor};
  padding: 16px;

  ${media.md} {
    padding: 0;
    flex-direction: row;
  }
`;

export const MainLeftSection = styled.section`
  ${media.md} {
    flex: 1 1 auto;
    max-width: 350px;
    background-color: ${({ theme }) => theme.color.loginBgColor};
    border-right: 1px solid ${({ theme }) => theme.color.serviceMainBorderColor};
  }
`;

export const MainLeftSectionStickyWrapper = styled.section`
  ${media.md} {
    position: sticky;
    top: 0;
  }
`;

export const MainCenterSection = styled.section`
  ${media.md} {
    // Temp css for styling -- start
    width: 400px;
    // Temp css for styling -- end

    flex: 1 1 auto;
  }
`;

export const MainRightSection = styled.section`
  display: none;

  ${media.lg} {
    flex: 1 1 auto;
    display: block;
    max-width: 350px;
  }
`;
