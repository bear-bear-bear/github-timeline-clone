import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    color: {
      // common
      textColor: string;
      subTextColor: string;
      linkColor: string;
      buttonBgColor: string;
      buttonTextColor: string;

      // page 'login'
      loginBgColor: string;
      loginMainBgColor: string;
      loginBorderColor: string;

      // page '/service'
      serviceHeaderBgColor: string;
      serviceHeaderTextColor: string;
      serviceHeaderInputBorderColor: string;
      serviceHeaderInputPlaceholderColor: string;
      serviceHeaderInputFocusedBorderColor: string;
      serviceHeaderInputIconColor: string;
      serviceMainBgColor: string;
      serviceMainBorderColor: string;
    };
  }
}
