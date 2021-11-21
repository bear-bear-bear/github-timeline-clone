import type { NextApiRequest, NextApiResponse } from 'next';
import { tempSession } from '@pages/api/auth/callback';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'GET') {
    res.status(405).json({
      error: 'Only GET requests allowed',
    });
    return;
  }

  const { userId } = req.cookies;

  if (!userId) {
    res.status(401).json({
      error: '쿠키에 userId가 존재하지 않습니다.',
    });
    return;
  }

  const accessToken = tempSession[userId];
  console.log('accessToken', accessToken);

  if (!accessToken) {
    res.status(401).json({
      error: '유효하지 않은 userId 입니다.',
    });
    return;
  }

  res.status(200).json({
    accessToken,
  });
};

export default handler;
