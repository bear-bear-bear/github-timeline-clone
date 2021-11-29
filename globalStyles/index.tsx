import { Global, css } from '@emotion/react';

import Resets from './_Resets';
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

    font-size: 14.5px;

    ${media.sm} {
      font-size: 15px;
    }
    ${media.md} {
      font-size: 15px;
    }
    ${media.lg} {
      font-size: 15.5px;
    }
  }

  body {
    line-height: 1.5;
    font-family: -apple-system, 'BlinkMacSystemFont', 'Segoe UI', 'Helvetica',
      'Arial', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';
  }
`;

const GlobalStyles = () => (
  <>
    <Global styles={Resets} />
    <Global styles={globalCSS} />
  </>
);

export default GlobalStyles;
