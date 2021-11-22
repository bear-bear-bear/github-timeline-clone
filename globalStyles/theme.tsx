import { Theme, ThemeProvider as BaseThemeProvider } from '@emotion/react';

export const theme: Theme = {
  palette: {
    headerBgColor: '#161B22',
    headerFontColor: '#F0F6FC',
    mainBgColor: '#010409',
    mainFontColor: '#C9D1D9',
    mainFontSubColor: '#8B9492',
  },
};

export const ThemeProvider: React.FC = ({ children }) => {
  return <BaseThemeProvider theme={theme}>{children}</BaseThemeProvider>;
};
