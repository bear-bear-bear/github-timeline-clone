import axios, { AxiosError } from 'axios';
import type { AxiosRequestConfig, AxiosResponseHeaders } from 'axios';
import type { AuthInfo } from '@pages/api/auth';

const oauth2Axios = axios.create();

const setAccessToken = async (config: AxiosRequestConfig) => {
  try {
    const { accessToken } = await axios
      .get<AuthInfo>('/api/auth')
      .then(({ data }) => data);

    const headers = config.headers as AxiosResponseHeaders;
    headers.Authorization = `token ${accessToken}`;

    return config;
  } catch (err) {
    console.error((err as AxiosError).response?.data);

    const { CancelToken } = axios;
    return {
      ...config,
      cancelToken: new CancelToken((cancel) =>
        cancel('accessToken 세팅 중 문제가 생겨 axios 요청이 취소되었습니다.'),
      ),
    };
  }
};

oauth2Axios.interceptors.request.use(setAccessToken);

export default oauth2Axios;
