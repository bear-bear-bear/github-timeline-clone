import qs from 'qs';
import axios from 'axios';

const CLIENT_SECRET = process.env.CLIENT_SECRET;
const NEXT_PUBLIC_CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID;
const NEXT_PUBLIC_REDIRECT_URI = process.env.NEXT_PUBLIC_REDIRECT_URI;

export const github = {
  get AUTHORIZATION_URI() {
    return `https://github.com/login/oauth/authorize?${qs.stringify({
      client_id: NEXT_PUBLIC_CLIENT_ID,
      redirect_uri: NEXT_PUBLIC_REDIRECT_URI,
    })}`;
  },

  ACCESS_TOKEN_GET_REQUEST(code: string) {
    return axios({
      method: 'post',
      url: `https://github.com/login/oauth/access_token`,
      data: {
        client_id: NEXT_PUBLIC_CLIENT_ID,
        client_secret: CLIENT_SECRET,
        redirect_uri: NEXT_PUBLIC_REDIRECT_URI,
        code,
      },
      withCredentials: true,
    }).then(({ data }) => qs.parse(data));
  },

  ACCESS_TOKEN_CHECK_REQUEST(accessToken: string) {
    return axios({
      method: 'HEAD',
      url: 'https://api.github.com/users/codertocat',
      headers: {
        Authorization: `token ${accessToken}`,
      },
    }).then((res) => {
      // 인증이 유효할 때만 존재하는 헤더
      return res.headers['x-accepted-oauth-scopes'] !== undefined;
    });
  },
};
