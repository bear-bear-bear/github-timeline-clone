import { NextApiRequest, NextApiResponse } from 'next';
import { AuthInfo, sessionOptions } from '@lib/session';
import { withIronSessionApiRoute } from 'iron-session/next';

const handler = (req: NextApiRequest, res: NextApiResponse<AuthInfo>) => {
  const { authInfo } = req.session;

  if (req.method !== 'GET') {
    res.status(405).json({
      error: 'Only GET requests allowed',
      isLoggedIn: authInfo?.isLoggedIn || false,
    });
    return;
  }

  req.session.destroy();
  res.status(200).json({
    isLoggedIn: false,
  });
};

export default withIronSessionApiRoute(handler, sessionOptions);
