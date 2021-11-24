import type { NextApiRequest, NextApiResponse } from 'next';
import { withIronSessionApiRoute } from 'iron-session/next';
import type { AxiosError } from 'axios';
import qs from 'qs';
import { github } from '@lib/oauth';
import { sessionOptions } from '@lib/session';

const oauth2CallbackRouter = async (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  const redirectWithErrorQuery = (status: number, errorMessage: string) => {
    const errorQuery = `callbackError=${encodeURIComponent(
      `${status}_${errorMessage}`,
    )}`;
    res.redirect(`/login?${errorQuery}`);
  };

  if (req.method !== 'GET') {
    redirectWithErrorQuery(405, 'Only GET requests allowed');
    return;
  }

  try {
    const code = req.query.code as string;
    const response = await github.ACCESS_TOKEN_GET_REQUEST(code);

    if ('error' in response) {
      redirectWithErrorQuery(401, qs.stringify(response).toString());
      return;
    }

    req.session.authInfo = {
      accessToken: response.access_token,
      isLoggedIn: true,
    };
    await req.session.save();

    await res.redirect('/');
  } catch (err) {
    const error = err as AxiosError;
    console.error(error);

    redirectWithErrorQuery(
      error.response?.status || 500,
      'access token 요청 중 에러가 발생했습니다.',
    );
  }
};

export default withIronSessionApiRoute(oauth2CallbackRouter, sessionOptions);
