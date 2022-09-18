import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import imgLogo from "../assets/images/belloga_character.png";

const SignInPageBody = ({}) => {
  const [userEmail, setUserEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onSubmit = () => {
    try {
      signIn();
    } catch (error) {
      console.log(error);
    }
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

  async function signIn() {
    try {
      const { data } = await axios.post(
        "/api/account/v1/auth/signin/custom/account",
        {
          password: password,
          email: userEmail,
        }
      );
      console.log(data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log("error message: ", error.message);
        return error.message;
      } else {
        console.log("unexpected error: ", error);
        return "An unexpected error occurred";
      }
    }
  }

  return (
    <>
      <header className="absolute z-10 w-full">
        <nav
          aria-label="Top"
          className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="relative h-16 flex items-center">
            <div className="ml-4 flex lg:ml-0">
              <Link
                className="text-sm font-medium text-white hover:text-gray-800"
                to="/"
              >
                {
                  <img
                    className="h-8 w-auto"
                    src={imgLogo}
                    alt="belloga logo"
                  />
                }
              </Link>
            </div>

            <div className="ml-auto flex items-center">
              <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                <Link
                  className="text-sm font-medium text-white hover:text-gray-800"
                  to="/signIn"
                >
                  {" "}
                  로그인
                </Link>
                <Link
                  className="text-sm font-medium text-white hover:text-gray-800 "
                  to="/signUp"
                >
                  {" "}
                  회원가입{" "}
                </Link>

                <Link
                  className="text-sm font-medium text-white hover:text-gray-800 "
                  to="/labeling/list"
                >
                  마이페이지
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <body className="z-0">
        <div className="relative bg-gray-800 py-32 px-6 sm:py-40 sm:px-12 lg:px-16 ">
          <div className="absolute inset-0 overflow-hidden">
            <img
              src="https://media.istockphoto.com/videos/abstract-particle-background-loop-video-id1173777188?s=640x640"
              alt=""
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gray-900 bg-opacity-50"
          />
          <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              로그인
            </h2>
            <p className="mt-3 text-xl text-white">
              로그인을 통해 라벨링 신청과 라벨링 조회를 만나보세요
            </p>
          </div>
        </div>

        <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
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
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="remember-me"
                      className="ml-2 block text-sm text-gray-900"
                    >
                      Remember me
                    </label>
                  </div>

                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Forgot your password?
                    </a>
                  </div>
                </div>
                <div>
                  아직 계정이 없으신가요?
                  <Link className="text-indigo-500" to="/signUp">
                    회원가입
                  </Link>
                </div>
                <div></div>
              </form>

              <button
                onClick={onSubmit}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign in
              </button>
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
