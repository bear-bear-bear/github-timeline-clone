import type { IronSessionOptions } from 'iron-session';

export type AuthInfo = {
  isLoggedIn: boolean;
  accessToken?: string;
  error?: string;
};

export const sessionOptions: IronSessionOptions = {
  password: process.env.COOKIE_PASSWORD as string,
  cookieName: 'accessToken/sid',
  cookieOptions: {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: 7 * 24 * 60 * 60,
  },
};

// This is where we specify the typings of req.session.*
declare module 'iron-session' {
  interface IronSessionData {
    authInfo?: AuthInfo;
  }
}
