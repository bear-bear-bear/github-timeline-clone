import qs from 'qs';

/*
 ** env
 */
export const NEXT_PUBLIC_CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID;
export const NEXT_PUBLIC_REDIRECT_URI = process.env.NEXT_PUBLIC_REDIRECT_URI;

/*
 ** OAuth
 */
export const github = {
  RESOURCE_SERVER: 'https://github.com/login/oauth',

  get AUTHORIZATION_URI() {
    return `${this.RESOURCE_SERVER}/authorize?${qs.stringify({
      client_id: NEXT_PUBLIC_CLIENT_ID,
      redirect_uri: NEXT_PUBLIC_REDIRECT_URI,
    })}`;
  },

  get ACCESS_TOKEN_GET_URI() {
    return `${this.RESOURCE_SERVER}/access_token`;
  },

  get ACCESS_TOKEN_CHECK_URI() {
    return `${this.RESOURCE_SERVER}/applications/${NEXT_PUBLIC_CLIENT_ID}/token`;
  },
};
