import qs from 'qs';

const RESOURCE_SERVER = 'https://github.com/login/oauth';

export const AUTHORIZATION_URI = `${RESOURCE_SERVER}/authorize?${qs.stringify({
  client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
  redirect_uri: process.env.NEXT_PUBLIC_REDIRECT_URI,
})}`;

export const ACCESS_TOKEN_URI = `${RESOURCE_SERVER}/access_token`;
