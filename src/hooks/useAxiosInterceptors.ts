import customAxios from "apis/tokenInterceptor";
import axios, { AxiosError, AxiosRequestHeaders } from "axios";
import { useEffect } from "react";
import { SetterOrUpdater } from "recoil";
import { tokenInfo } from "states/LoginState";

interface HeaderType extends AxiosRequestHeaders {
  ["Content-Type"]: string;
  Authorization: string;
}

export const useAxiosInterceptor = (
  tokenState: tokenInfo,
  setTokenState: SetterOrUpdater<tokenInfo>
) => {
  // requestHandler는 위와 같은 로직이기에 생략.
  const accessToken = tokenState.accessToken;
  const reqInterceptor = customAxios.interceptors.request.use(
    (config) => {
      const headers = config.headers as HeaderType;

      if (accessToken !== "") {
        headers["Content-Type"] = "application/json";
        headers.Authorization = `${accessToken}`;
      }

      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  const resInterceptor = customAxios.interceptors.response.use(
    (res) => {
      if (!(res.status === 200 || res.status === 201 || res.status === 204))
        throw new Error();

      if (res.data.errors) throw new Error(res.data.errors);

      return res;
    },
    async (error) => {
      const err = error as AxiosError;

      if (err.response?.status === 403 || err.response?.status === 401) {
        console.log("에러가 발생했습니다.", err.response);
        const refreshToken = tokenState.refreshToken;

        if (refreshToken !== "") {
          const response = await axios.post(
            `${process.env.REACT_APP_API_URL}/api/account/v1/auth/reissue`,
            {
              refreshToken: refreshToken,
            }
          );

          const newAccessToken = response.data.response.accessToken;
          const newRefreshToken = response.data.response.refreshToken;

          setTokenState(() => {
            return {
              ...tokenState,
              accessToken: newAccessToken,
              refreshToken: newRefreshToken,
            };
          });

          // 중단된 요청 (에러난 요청)을 새로운 토큰으로 재전송
          const originalRequest = err.config;

          originalRequest.headers = {
            "Content-Type": "application/json",
            Authorization: `${newAccessToken}`,
          };
          const originalResponse = await axios.request(originalRequest);

          return originalResponse.data.data;
        }
      }
      customAxios.interceptors.response.eject(resInterceptor);
      return Promise.reject(error);
    }
  );

  useEffect(() => {
    return () => {
      customAxios.interceptors.request.eject(reqInterceptor);
      customAxios.interceptors.response.eject(resInterceptor);
    };
  }, [resInterceptor, reqInterceptor]);
};
