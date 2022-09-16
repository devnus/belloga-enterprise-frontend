import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import imgLogo from "../assets/images/belloga_character.png";

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
      <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img className="mx-auto h-12 w-auto" src={imgLogo} alt="logo" />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            회원가입
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            <a
              href="#"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              벨로가에 가입하세요
            </a>
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
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
              <div>
                이미 계정이 있으신가요?
                <Link className="text-indigo-500" to="/signIn">
                  로그인
                </Link>
              </div>
              <div></div>
            </form>
            <button
              onClick={onSubmit}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
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