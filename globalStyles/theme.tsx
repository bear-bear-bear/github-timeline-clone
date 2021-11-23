import { Theme, ThemeProvider as BaseThemeProvider } from '@emotion/react';

export const theme: Theme = {
  color: {
    // common
    textColor: '#C9D1D9',
    subTextColor: '#8B9492',
    linkColor: '#58A6FF',
    buttonBgColor: '#238636',
    buttonTextColor: '#FFFFFF',

    // page 'login'
    loginBgColor: '#0D1117',
    loginMainBgColor: '#161B22',
    loginBorderColor: '#30363d',

    // page '/service'
    serviceHeaderBgColor: '#161B22',
    serviceHeaderInputColor: '#F0F6FC',
    serviceMainBgColor: '#010409',
    serviceMainBorderColor: '#21262d',
  },
};

export const ThemeProvider: React.FC = ({ children }) => {
  return <BaseThemeProvider theme={theme}>{children}</BaseThemeProvider>;
};
