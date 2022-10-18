import axios, { AxiosError, AxiosRequestHeaders } from "axios";

const UNAUTHORIZED_MESSAGE =
  "User is not authorized to access this resource with an explicit deny";

interface HeaderType extends AxiosRequestHeaders {
  ["Content-Type"]: string;
  Authorization: string;
}

const instance = axios.create();

instance.interceptors.request.use(
  (config) => {
    const headers = config.headers as HeaderType;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (res) => {
    if (!(res.status === 200 || res.status === 201 || res.status === 204))
      throw new Error();

    if (res.data.errors) throw new Error(res.data.errors);

    return res.data.data;
  },
  async (error) => {
    console.log("인터셉터 입니다. 에러입니다. 뿡");

    const err = error as AxiosError;

    if (err.response?.status === 401) {
      console.log(err.response.data);
      const data = err.response.data;

      if (data === UNAUTHORIZED_MESSAGE) {
        const refreshToken = localStorage.getItem("belloga-refresh");

        const response = await axios.post(
          `${process.env.REACT_APP_API_URL}/api/account/v1/auth/reissue`,
          {
            refreshToken: refreshToken,
          }
        );

        const accessToken = response.data.response.accessToken;
        const newRefreshToken = response.data.response.refreshToken;

        localStorage.setItem("belloga-refresh", newRefreshToken);

        // document.cookie = `token=${token}; path=/; max-age=토큰수명`;

        err.config.headers = {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        };
        // 중단된 요청 (에러난 요청)을 새로운 토큰으로 재전송
        const originalResponse = await axios.request(err.config);
        return originalResponse.data.data;
      }
    }

    return Promise.reject(error);
  }
);

export default instance;
