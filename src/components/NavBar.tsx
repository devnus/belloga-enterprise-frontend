import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import imgLogo from "../assets/images/belloga_character.png";
import { LoginState } from "../states/LoginState";

const NavBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(LoginState);

  useEffect(() => {
    if (localStorage.getItem("belloga-page")) setIsLoggedIn(true);
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("belloga-page");
    setIsLoggedIn(false);
    window.location.href = "/";
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

          <div className="ml-auto flex items-center">
            <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
              {isLoggedIn ? (
                <>
                  {" "}
                  <Link
                    className="text-sm font-medium text-white hover:text-gray-300 "
                    to="/labeling/list"
                  >
                    마이페이지
                  </Link>
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
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
