import type { NextApiRequest, NextApiResponse } from 'next';
import { withIronSessionApiRoute } from 'iron-session/next';
import type { AxiosError } from 'axios';
import { github } from '@lib/oauth';
import { sessionOptions } from '@lib/session';

const githubOauth2CallbackRoute = async (
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
    const { access_token, error } = await github.ACCESS_TOKEN_GET_REQUEST(code);

    if (error) {
      redirectWithErrorQuery(401, error.toString());
      return;
    }

    req.session.authInfo = {
      accessToken: access_token as string,
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

export default withIronSessionApiRoute(
  githubOauth2CallbackRoute,
  sessionOptions,
);
