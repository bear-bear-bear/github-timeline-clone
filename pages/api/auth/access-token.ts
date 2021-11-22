import type { NextApiRequest, NextApiResponse } from 'next';
import { tempSession } from '@pages/api/auth/callback';
import axios, { AxiosError } from 'axios';
import { github } from '@lib/constant';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'GET') {
    res.status(405).json({
      error: 'Only GET requests allowed',
    });
    return;
  }

  // 쿠키에 userId가 있는지 여부 체크
  const { userId } = req.cookies;

  if (!userId) {
    res.status(401).json({
      error: '쿠키에 userId가 존재하지 않습니다.',
    });
    return;
  }

  // 세션에 accessToken 있는지 여부 체크
  const accessToken = tempSession[userId];
  console.log('accessToken', accessToken);

  if (!accessToken) {
    res.status(401).json({
      error: '유효하지 않은 userId 입니다.',
    });
    return;
  }

  // accessToken 유효성 체크
  try {
    const user = await axios({
      method: 'POST',
      url: github.ACCESS_TOKEN_CHECK_URI,
      headers: {
        Accept: 'application/vnd.github.v3+json',
      },
      data: {
        access_token: accessToken,
      },
    }).then(({ data }) => data);
    console.log(`세션 내 액세스 토큰 유효성 검증 완료 - userId: ${user.id}`);

    res.status(200).json({
      accessToken,
    });
  } catch (err) {
    const error = err as AxiosError;
    const status = error.response?.status || 404;

    res.status(status).json({
      error: '세션에 저장된 액세스 토큰이 유효하지 않습니다.',
    });
  }
};

export default handler;
