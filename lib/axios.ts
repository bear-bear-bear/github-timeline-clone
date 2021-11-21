import axios from 'axios';
import type { AxiosRequestConfig, AxiosResponseHeaders } from 'axios';

const customAxios = axios.create();

const setAccessToken = async (config: AxiosRequestConfig) => {
  try {
    const { accessToken } = await axios
      .get('/api/auth/access-token')
      .then(({ data }) => data);

    const headers = config.headers as AxiosResponseHeaders;
    headers.Authorization = `token ${accessToken}`;

    return config;
  } catch (err) {
    console.error(err);

    const { CancelToken } = axios;
    return {
      ...config,
      cancelToken: new CancelToken((cancel) =>
        cancel('accessToken 세팅 중 문제가 생겼습니다.'),
      ),
    };
  }
};

customAxios.interceptors.request.use(setAccessToken);

export default customAxios;
