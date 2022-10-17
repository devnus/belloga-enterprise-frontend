import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useRecoilState } from "recoil";
import imgLogo from "../assets/images/belloga_white.png";
import { LoginState } from "../states/LoginState";

/**
@isAuthPage 로그인의 경우 false로 지정하면 nav 바에 보이지 않음;
@isMyPage 마이페이지에서 false로 지정하면 보이지 않음;

로그인 상태로 자동 핸들링되고 있음
 */
const NavBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(LoginState);

  const location = useLocation();

  const isAuthPage: boolean = location.pathname !== ("/signUp" || "/signIn");
  const isMyPage: boolean = location.pathname !== "/labeling/list";

  const logoutHandler = () => {
    localStorage.removeItem("belloga-page"); //accessToken 제거
    localStorage.removeItem("belloga-refresh"); //refreshToken 제거

    setIsLoggedIn(false);
  };

  return (
    <header className="absolute z-10 w-full">
      <nav aria-label="Top" className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative h-16 flex items-center">
          <div className="ml-4 flex lg:ml-0">
            <Link
              className="text-sm font-medium text-white hover:text-gray-800"
              to="/"
            >
              {<img className="h-8 w-auto" src={imgLogo} alt="belloga logo" />}
            </Link>
          </div>

          {isAuthPage && (
            <div className="ml-auto flex items-center">
              <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                {isLoggedIn ? (
                  <>
                    {isMyPage && (
                      <Link
                        className="text-sm font-medium text-white hover:text-gray-300 "
                        to="/labeling/list"
                      >
                        마이페이지
                      </Link>
                    )}
                    <div
                      className="cursor-pointer text-sm font-medium text-white hover:text-gray-800 "
                      onClick={logoutHandler}
                    >
                      로그아웃
                    </div>
                  </>
                ) : (
                  <Link
                    className="text-sm font-medium text-white hover:text-gray-800"
                    to="/signIn"
                  >
                    로그인
                  </Link>
                )}
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
