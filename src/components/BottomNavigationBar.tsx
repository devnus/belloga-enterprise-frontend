import React from "react";
import { ReactComponent as LeftArrow } from "assets/svgs/LeftArrow.svg";
import { ReactComponent as RightArrow } from "assets/svgs/RightArrow.svg";

type BottomNavProps = {
  length: number;
  currentIndex: number;
  onChange: any;
};

const BottomNavigationBar = ({
  length = 1,
  currentIndex = 1,
  onChange,
}: BottomNavProps) => {
  return (
    <nav
      aria-label="Page navigation example"
      className="w-full flex justify-center"
    >
      <ul className="inline-flex items-center -space-x-px">
        <li>
          <div className="block py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">
            <span className="sr-only">Previous</span>
            <LeftArrow />
          </div>
        </li>
        <li>
          <div className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">
            1
          </div>
        </li>
        <li>
          <div className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">
            2
          </div>
        </li>
        <li>
          <div
            aria-current="page"
            className="z-10 py-2 px-3 leading-tight text-blue-600 bg-blue-50 border border-blue-300 hover:bg-blue-100 hover:text-blue-700 "
          >
            3
          </div>
        </li>
        <li>
          <div className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">
            4
          </div>
        </li>
        <li>
          <div className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">
            5
          </div>
        </li>
        <li>
          <div className="block py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">
            <span className="sr-only">Next</span>
            <RightArrow />
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default BottomNavigationBar;
