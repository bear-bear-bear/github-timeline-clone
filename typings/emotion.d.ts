import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    color: {
      // common
      textColor: string;
      subTextColor: string;
      linkColor: string;

      // page 'login'
      loginBgColor: string;
      loginMainBgColor: string;
      loginBorderColor: string;
      loginButtonColor: string;

      // page '/service'
      serviceHeaderBgColor: string;
      serviceHeaderInputColor: string;
      serviceMainBgColor: string;
      serviceMainBorderColor: string;
    };
  }
}
