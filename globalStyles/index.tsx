import { Global, css } from '@emotion/react';

import Resets from './_Resets';
import FontFace from './_FontFace';
import media from './media';

export const globalCSS = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html,
  body,
  body > div:first-of-type,
  div#__next,
  div#__next > div {
    min-height: 100vh;
  }

  html {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;

    ${media.xs} {
      font-size: 14.5px;
    }
    ${media.sm} {
      font-size: 15px;
    }
    ${media.md} {
      font-size: 15px;
    }
    ${media.lg} {
      font-size: 15.5px;
    }
    ${media.xl} {
      font-size: 16px;
    }
    ${media.xxl} {
      font-size: 16px;
    }
  }

  body {
    font-family: 'Noto Sans KR', 'Roboto', 'HelveticaNeue', 'Helvetica Neue',
      sans-serif;
  }
`;

const GlobalStyles = () => (
  <>
    <Global styles={Resets} />
    <Global styles={FontFace} />
    <Global styles={globalCSS} />
  </>
);

export default GlobalStyles;
