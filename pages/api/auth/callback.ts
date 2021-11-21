import type { NextApiRequest, NextApiResponse } from 'next';
import type { AxiosError } from 'axios';
import axios from 'axios';
import { serialize } from 'cookie';
import { ACCESS_TOKEN_URI, LOGIN_PAGE, SERVICE_PAGE } from '@lib/constant';
import qs from 'qs';

type AccessToken = string;
export const tempSession: { [userId: string]: AccessToken } = {};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const redirectWithErrorQuery = (status: number, errorMessage: string) => {
    const errorQuery = `callbackError=${encodeURIComponent(
      `${status}_${errorMessage}`,
    )}`;
    res.redirect(`${LOGIN_PAGE}?${errorQuery}`);
  };

  if (req.method !== 'GET') {
    redirectWithErrorQuery(405, 'Only GET requests allowed');
    return;
  }

  try {
    const { access_token, error } = await axios({
      method: 'post',
      url: ACCESS_TOKEN_URI,
      data: {
        client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
        redirect_uri: process.env.NEXT_PUBLIC_REDIRECT_URI,
        code: req.query.code,
      },
    }).then(({ data }) => qs.parse(data));

    if (error) {
      redirectWithErrorQuery(401, error.toString());
      return;
    }

    const user = await axios({
      method: 'GET',
      url: 'https://api.github.com/user',
      headers: {
        Authorization: `token ${access_token}`,
      },
    }).then(({ data }) => data);

    const userId = user.id.toString();
    tempSession[userId] = `${access_token}`;
    console.log('userId 세팅 완료', tempSession);

    res.setHeader(
      'Set-Cookie',
      serialize('userId', userId, {
        httpOnly: true,
        path: '/',
      }),
    );

    res.redirect(SERVICE_PAGE);
  } catch (err) {
    const error = err as AxiosError;

    console.log(error.response?.data);

    redirectWithErrorQuery(
      error.response?.status || 500,
      'access token 요청 중 에러가 발생했습니다.',
    );
  }
};

export default handler;
