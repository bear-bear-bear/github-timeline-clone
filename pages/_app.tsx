import type { AppProps } from 'next/app';
import { ThemeProvider } from '@globalStyles/theme';
import GlobalStyles from '@globalStyles/index';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
