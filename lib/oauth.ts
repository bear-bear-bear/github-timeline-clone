import qs from 'qs';
import axios from 'axios';
import type { ParsedGetAccessTokenResponseQuery, User } from '@typings/oauth';

const CLIENT_SECRET = process.env.CLIENT_SECRET;
const NEXT_PUBLIC_CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID;
const NEXT_PUBLIC_REDIRECT_URI = process.env.NEXT_PUBLIC_REDIRECT_URI;

export const github = {
  HOST: 'https://github.com',
  API_HOST: 'https://api.github.com',

  get AUTHORIZATION_URI() {
    const scope = ['read:user', 'public_repo', 'notifications'];

    return `${this.HOST}/login/oauth/authorize?${qs.stringify({
      client_id: NEXT_PUBLIC_CLIENT_ID,
      redirect_uri: NEXT_PUBLIC_REDIRECT_URI,
      scope: scope.join(' '),
    })}`;
  },

  ACCESS_TOKEN_GET_REQUEST(code: string) {
    return axios({
      method: 'post',
      url: `${this.HOST}/login/oauth/access_token`,
      data: {
        client_id: NEXT_PUBLIC_CLIENT_ID,
        client_secret: CLIENT_SECRET,
        redirect_uri: NEXT_PUBLIC_REDIRECT_URI,
        code,
      },
      withCredentials: true,
    }).then(({ data }) => {
      return qs.parse(data) as ParsedGetAccessTokenResponseQuery;
    });
  },

  ACCESS_TOKEN_CHECK_REQUEST(accessToken: string) {
    return axios({
      method: 'HEAD',
      url: `${this.API_HOST}/users/codertocat`,
      headers: {
        Authorization: `token ${accessToken}`,
      },
    }).then((res) => {
      // 인증이 유효할 때만 존재하는 헤더
      return res.headers['x-accepted-oauth-scopes'] !== undefined;
    });
  },

  USER_GET_REQUEST(accessToken: string) {
    return axios({
      method: 'GET',
      url: `${this.API_HOST}/user`,
      headers: {
        Authorization: `token ${accessToken}`,
      },
    }).then((res) => res.data as User);
  },
};
