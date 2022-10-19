import Loading from "components/Loading";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { signIn } from "../apis/auth";
import MainTop from "../components/MainTop";
import { LoginState } from "../states/LoginState";

const SignInPageBody = () => {
  const [userEmail, setUserEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loginError, setLoginError] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(LoginState);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = () => {
    console.log("눌럿뜸");
    const signInValues = {
      password: password,
      userEmail: userEmail,
      setIsLoggedIn: setIsLoggedIn,
      setLoginError: setLoginError,
      navigate: navigate,
      setLoading: setLoading,
    };

    signIn({ ...signInValues });
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = event;
    if (name === "email") {
      setUserEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  return (
    <>
      <body className="z-0">
        <MainTop>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            로그인
          </h2>
          <p className="mt-3 text-xl text-white">
            로그인을 통해 라벨링 신청과 라벨링 조회를 만나보세요
          </p>
        </MainTop>

        <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 sm:rounded-lg sm:px-10">
              <form className="space-y-6" action="#" method="POST">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email address
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={userEmail}
                      onChange={onChange}
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <div className="mt-1">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      value={password}
                      onChange={onChange}
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
              </form>

              <button
                onClick={onSubmit}
                className=" mt-10 mb-5 bg-gradient-to-r from-blue-400 to-sky-300 w-full flex justify-center py-2 px-4 border border-transparent rounded-3xl shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                {loading ? <Loading /> : "Sign in"}
              </button>

              {loginError && (
                <div className="my-5 text-red-500">
                  아이디나 비밀번호가 일치하지 않습니다.
                </div>
              )}

              <div className="flex justify-between pb-5">
                <div>아직 계정이 없으신가요?</div>

                <Link className="text-blue-500 " to="/signUp">
                  회원가입
                </Link>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
};

const SignInPage = ({}) => {
  return (
    <>
      <SignInPageBody />
    </>
  );
};

export default SignInPage;
