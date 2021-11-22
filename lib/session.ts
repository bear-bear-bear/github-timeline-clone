import type { IronSessionOptions } from 'iron-session';

export type AuthInfo = {
  isLoggedIn: boolean;
  accessToken?: string;
  error?: string;
};

export const sessionOptions: IronSessionOptions = {
  password: process.env.COOKIE_PASSWORD as string,
  cookieName: 'accessToken/sid',
};

// This is where we specify the typings of req.session.*
declare module 'iron-session' {
  interface IronSessionData {
    authInfo?: AuthInfo;
  }
}
