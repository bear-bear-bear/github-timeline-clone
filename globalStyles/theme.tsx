import { Theme, ThemeProvider as BaseThemeProvider } from '@emotion/react';

const theme: Theme = {
  color: {
    'gray-0': '#FFFFFF',
    'gray-1': '#F0F6FC',
    'gray-2': '#C9D1D9',
    'gray-3': '#C2C3BA',
    'gray-4': '#979A9C',
    'gray-5': '#8B9492',
    'gray-6': '#484F58',
    'gray-7': '#30363D',
    'gray-8': '#30363d',
    'gray-9': '#21262d',
    'gray-10': '#161B22',
    'gray-11': '#0D1117',
    'gray-12': '#010409',

    'blue-0': '#58A6FF',
    'blue-1': '#1f6feb',
    'blue-2': '#0c2d6b',

    'green-0': '#238636',
    'green-1': '#3FB950',
  },
};

export const ThemeProvider: React.FC = ({ children }) => {
  return <BaseThemeProvider theme={theme}>{children}</BaseThemeProvider>;
};
