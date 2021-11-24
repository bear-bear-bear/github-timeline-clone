import type { NextApiRequest, NextApiResponse } from 'next';
import { withIronSessionApiRoute } from 'iron-session/next';
import type { AxiosError } from 'axios';
import qs from 'qs';
import { github } from '@lib/oauth';
import { sessionOptions } from '@lib/session';

export const ERROR_MESSAGE = 'errorMessage';
type ErrorInfo = {
  [ERROR_MESSAGE]: string;
  status: number | string;
};

const oauth2CallbackRouter = async (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  const redirectWithErrorQuery = (errorInfo: ErrorInfo) => {
    res.redirect(`/login?${qs.stringify(errorInfo)}`);
  };

  if (req.method !== 'GET') {
    redirectWithErrorQuery({
      status: 405,
      errorMessage: 'Only GET requests allowed',
    });
    return;
  }

  try {
    const code = req.query.code as string;
    const response = await github.ACCESS_TOKEN_GET_REQUEST(code);

    if ('error' in response) {
      redirectWithErrorQuery({
        status: 401,
        errorMessage: qs.stringify(response),
      });
      return;
    }

    req.session.authInfo = {
      accessToken: response.access_token,
      isLoggedIn: true,
    };
    await req.session.save();

    res.redirect('/');
  } catch (err) {
    const error = err as AxiosError;
    console.error(error);

    redirectWithErrorQuery({
      status: error.response?.status || 500,
      errorMessage: 'access token 요청 중 에러가 발생했습니다',
    });
  }
};

export default withIronSessionApiRoute(oauth2CallbackRouter, sessionOptions);
