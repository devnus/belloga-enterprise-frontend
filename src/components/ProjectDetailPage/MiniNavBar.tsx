import React from "react";
import { ReactComponent as HomeIcon } from "assets/svgs/Home.svg";
import { ReactComponent as SlashIcon } from "assets/svgs/Slash.svg";
/**
 *
 * @returns 프로젝트 상세 페이지 상단에 있는 작은 네비게이션바를 리턴
 */
const MiniNavBar = () => {
  return (
    <nav className="text-white flex" aria-label="Breadcrumb">
      <ol
        role="list"
        className="max-w-screen-xl w-full mx-auto px-4 py-4 flex space-x-4 sm:px-6 lg:px-8"
      >
        <li>
          <div>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <HomeIcon className="flex-shrink-0 h-5 w-5" />
              <span className="sr-only">Home</span>
            </a>
          </div>
        </li>

        <li>
          <div className="flex items-center">
            <SlashIcon className="flex-shrink-0 h-5 w-5 text-gray-300" />
            <a
              href="#"
              className="ml-4 text-sm font-medium text-white hover:text-gray-700"
            >
              Projects
            </a>
          </div>
        </li>

        <li>
          <div className="flex items-center">
            <SlashIcon className="flex-shrink-0 h-5 w-5 text-gray-300" />
            <a
              href="#"
              className="ml-4 text-sm font-medium text-white hover:text-gray-700"
              aria-current="page"
            >
              손글씨 OCR 라벨링
            </a>
          </div>
        </li>
      </ol>
    </nav>
  );
};

export default MiniNavBar;
