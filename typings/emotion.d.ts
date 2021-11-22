import '@emotion/react';

declare module '@emotion/react' {
  export type Theme = {
    palette: {
      headerBgColor: string;
      headerFontColor: string;
      mainBgColor: string;
      mainFontColor: string;
      mainFontSubColor: string;
    };
  };
}
