import styled from '@emotion/styled';
import media, { mediaBreakpoints } from '@globalStyles/media';

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
  background-color: ${({ theme }) => theme.color['gray-10']};
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
  background-color: ${({ theme }) => theme.color['gray-12']};
  padding: 16px;
  overflow: auto;

  ${media.md} {
    padding: 0;
    flex-direction: row;
  }
`;

export const MainLeftSection = styled.section`
  ${media.md} {
    max-width: 350px;
    flex: 1 1 auto;
    justify-self: flex-start;
    position: sticky;
    top: 0;
    overflow-y: auto;
    padding: 32px;
    background-color: ${({ theme }) => theme.color['gray-11']};
    border-right: 1px solid ${({ theme }) => theme.color['gray-10']};
  }
`;

export const MainCenterSection = styled.section`
  ${media.md} {
    flex: 1 1 auto;
    margin-top: 16px;
    padding: 0 32px;
  }
`;

export const MainRightSection = styled.section`
  display: none;
  transition: margin-right 0.2s ease-in-out;

  ${media.lg} {
    flex: 1 1 auto;
    display: block;
    max-width: 350px;
  }

  @media only screen and (min-width: 1400px) {
    margin-right: 5vw;
  }

  @media only screen and (min-width: 1600px) {
    margin-right: 10vw;
  }
`;
