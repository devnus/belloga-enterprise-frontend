import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import imgLogo from "../assets/images/belloga_character.png";
import MainTop from "../components/MainTop";
import NavBar from "../components/NavBar";

type CreateUserResponse = {
  name: string;
  job: string;
  id: string;
  createdAt: string;
};

const SignUpPageBody = ({}) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [checkPassword, setCheckPassword] = useState<string>("");
  const [userName, setUserName] = useState<string>("");
  const [userTel, setUserTel] = useState<string>("");
  const [enterpriseName, setEnterpriseName] = useState<string>("");
  const [isSamePW, setIsSamePW] = useState<boolean>(false);

  const onSubmit = () => {
    try {
      createUser();
    } catch (error) {
      console.log(error);
    }
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = event;
    if (name === "email") {
      setEmail(value);
    } else if (name === "tel-number") {
      setUserTel(value);
    } else if (name === "enterprise-name") {
      setEnterpriseName(value);
    } else if (name === "name") {
      setUserName(value);
    }
  };

  async function createUser() {
    try {
      const { data } = await axios.post<CreateUserResponse>(
        "/api/account/v1/auth/signup/custom/account/enterprise",
        {
          password: password,
          phoneNumber: userTel,
          organization: enterpriseName,
          name: userName,
          email: email,
        }
      );
      window.location.href = "/signIn";
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

  const checkPasswordTrue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;

    if (name === "password") {
      setPassword(value);
    } else {
      setCheckPassword(value);
    }

    const compareValue = name === "password" ? checkPassword : password;

    if (compareValue === value) {
      setIsSamePW(() => true);
    } else {
      setIsSamePW(() => false);
    }
  };

  return (
    <>
      <NavBar isAuthPage={false} />
      <body className="z-0">
        <MainTop>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            회원가입
          </h2>
          <p className="mt-3 text-xl text-white">
            회원가입을 통해 기존 데이터 라벨링 고용 없이,
          </p>
          <p className="mt-3 text-xl text-white">
            지속적인 데이터 수급을 할 수 있는 벨로가를 만나보세요
          </p>
        </MainTop>

        <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 sm:rounded-lg sm:px-10">
              <form className="space-y-6" action="#">
                <div>
                  <label
                    htmlFor="enterprise-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    기업명을 입력하세요
                  </label>
                  <div className="mt-1">
                    <input
                      id="enterprise-name"
                      name="enterprise-name"
                      type="name"
                      autoComplete="name"
                      placeholder="BellogaCompany"
                      required
                      value={enterpriseName}
                      onChange={onChange}
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    담당자 이름을 입력하세요
                  </label>
                  <div className="mt-1">
                    <input
                      id="name"
                      name="name"
                      type="name"
                      autoComplete="name"
                      placeholder="홍길동"
                      value={userName}
                      onChange={onChange}
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    이메일 주소를 입력하세요
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="example@belloga.com"
                      value={email}
                      onChange={onChange}
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="tel-number"
                    className="block text-sm font-medium text-gray-700"
                  >
                    전화번호를 입력하세요
                  </label>
                  <div className="mt-1">
                    <input
                      id="tel-number"
                      name="tel-number"
                      type="tel"
                      autoComplete="tel"
                      placeholder="01012345678"
                      value={userTel}
                      onChange={onChange}
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    비밀번호를 입력하세요
                  </label>
                  <div className="mt-1">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      value={password}
                      onChange={checkPasswordTrue}
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                  {password.length <= 7 && (
                    <div className="text-red-500">
                      비밀번호는 8자 이상이어야 합니다
                    </div>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="check-password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    비밀번호를 다시 입력하세요
                  </label>
                  <div className="mt-1">
                    <input
                      id="check-password"
                      name="check-password"
                      type="password"
                      autoComplete="current-password"
                      value={checkPassword}
                      onChange={checkPasswordTrue}
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                  {!isSamePW && checkPassword.length !== 0 && (
                    <div className="text-red-500">
                      비밀번호가 일치하지 않습니다.
                    </div>
                  )}
                </div>
              </form>

              {isSamePW &&
              password.length > 7 &&
              email &&
              userName &&
              userTel &&
              enterpriseName ? (
                <button
                  onClick={onSubmit}
                  type="submit"
                  className=" mt-10 mb-5 bg-gradient-to-r from-blue-400 to-sky-300 w-full flex justify-center py-2 px-4 border border-transparent rounded-3xl shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Sign Up
                </button>
              ) : (
                <button
                  type="button"
                  className="mt-10 mb-5 bg-gray-400 w-full flex justify-center py-2 px-4 border border-transparent rounded-3xl shadow-sm text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 rounded cursor-not-allowed focus:outline-none disabled:opacity-75"
                  disabled
                >
                  Sign Up
                </button>
              )}

              <div className="flex justify-between pb-5">
                <div>이미 계정이 있으신가요?</div>

                <Link className="text-blue-500 " to="/signIn">
                  로그인
                </Link>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
};

const SignUpPage = ({}) => {
  return (
    <>
      <SignUpPageBody />
    </>
  );
};

export default SignUpPage;
