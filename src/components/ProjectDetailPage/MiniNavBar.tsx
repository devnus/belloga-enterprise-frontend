import React from "react";

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
              <svg
                className="flex-shrink-0 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="white"
                aria-hidden="true"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              <span className="sr-only">Home</span>
            </a>
          </div>
        </li>

        <li>
          <div className="flex items-center">
            <svg
              className="flex-shrink-0 h-5 w-5 text-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
            </svg>
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
            <svg
              className="flex-shrink-0 h-5 w-5 text-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
            </svg>
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
