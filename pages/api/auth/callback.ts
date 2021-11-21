import type { NextApiRequest, NextApiResponse } from 'next';
import type { AxiosError } from 'axios';
import axios from 'axios';
import { serialize } from 'cookie';
import { ACCESS_TOKEN_URI } from '@lib/constant';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const redirectWithErrorQuery = (status: number, errorMessage: string) => {
    const errorQuery = `?error=${encodeURIComponent(
      `callback page error_${status}_${errorMessage}`,
    )}`;
    res.redirect(`/${errorQuery}`);
  };

  if (req.method !== 'GET') {
    redirectWithErrorQuery(405, 'Only GET requests allowed');
    return;
  }

  try {
    const { data } = await axios({
      method: 'post',
      url: ACCESS_TOKEN_URI,
      data: {
        client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
        redirect_uri: process.env.NEXT_PUBLIC_REDIRECT_URI,
        code: req.query.code,
      },
    });

    if (data.substring(0, 5) === 'error') {
      redirectWithErrorQuery(401, data);
      return;
    }

    res.setHeader(
      'Set-Cookie',
      serialize('accessToken', data, {
        httpOnly: true,
        path: '/',
      }),
    );
    res.redirect('/service');
  } catch (err) {
    const error = err as AxiosError;
    redirectWithErrorQuery(
      error.response?.status || 500,
      'access token 요청 중 에러가 발생했습니다.',
    );
  }
};

export default handler;
