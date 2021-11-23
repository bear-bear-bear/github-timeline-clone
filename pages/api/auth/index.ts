import type { NextApiRequest, NextApiResponse } from 'next';
import { withIronSessionApiRoute } from 'iron-session/next';
import { github } from '@lib/oauth';
import { sessionOptions } from '@lib/session';
import type { AuthInfo } from '@lib/session';

const authorizeRouter = async (
  req: NextApiRequest,
  res: NextApiResponse<AuthInfo>,
) => {
  const { authInfo } = req.session;

  if (req.method !== 'GET') {
    res.status(405).json({
      error: 'Only GET requests allowed',
      isLoggedIn: authInfo?.isLoggedIn || false,
    });
    return;
  }

  if (authInfo?.accessToken === undefined) {
    res.status(404).json({
      error: 'accessToken이 존재하지 않습니다',
      isLoggedIn: false,
    });
    return;
  }

  const forbiddenWithDestroySession = () => {
    req.session.destroy();
    res.status(403).json({
      error: 'AccessToken이 유효하지 않아 삭제되었습니다.',
      isLoggedIn: false,
    });
  };

  const { accessToken } = authInfo;
  try {
    const isTokenValid = await github.ACCESS_TOKEN_CHECK_REQUEST(accessToken);

    if (!isTokenValid) {
      forbiddenWithDestroySession();
      return;
    }
  } catch (err) {
    console.error(err);
    forbiddenWithDestroySession();
    return;
  }

  res.status(200).json({
    accessToken,
    isLoggedIn: true,
  });
};

export default withIronSessionApiRoute(authorizeRouter, sessionOptions);
