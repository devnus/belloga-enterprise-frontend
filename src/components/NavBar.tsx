import React from "react";

const NavBar = () => {
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
              <Link
                className="text-sm font-medium text-white hover:text-gray-800"
                to="/signIn"
              >
                로그인
              </Link>
              <Link
                className="text-sm font-medium text-white hover:text-gray-800 "
                to="/signUp"
              >
                회원가입
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
  );
};

export default NavBar;
