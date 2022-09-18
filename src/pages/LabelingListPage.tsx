import React, { useState } from "react";
import { Link } from "react-router-dom";
import imgLogo from "../assets/images/belloga_character.png";

const tabs = [
  { name: "라벨링 중", href: "#", count: "4", current: false },
  { name: "라벨링 완료", href: "#", count: "2", current: false },
  { name: "승인 대기", href: "#", count: "1", current: true },
];

const files = [
  {
    title: "IMG_4985.HEIC",
    size: "3.9 MB",
    source:
      "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
  },
  {
    title: "IMG_4985.HEIC",
    size: "3.9 MB",
    source:
      "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
  },
  {
    title: "IMG_4985.HEIC",
    size: "3.9 MB",
    source:
      "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
  },
  {
    title: "IMG_4985.HEIC",
    size: "3.9 MB",
    source:
      "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
  },
  {
    title: "IMG_4985.HEIC",
    size: "3.9 MB",
    source:
      "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
  },

  {
    title: "IMG_4985.HEIC",
    size: "3.9 MB",
    source:
      "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
  },
  // More files...
];

function LabelingListPage() {
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }

  const [openTab, setOpenTab] = useState(0);

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
        <div className="grid">
          <div className="relative bg-gray-800 py-32 px-6 sm:py-40 sm:px-12 lg:px-16 w-full">
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
                홍길동님, 안녕하세요
              </h2>
              <p className="mt-3 text-xl text-white">
                총 6 건의 라벨링이 진행 중입니다.
              </p>
            </div>
          </div>
          <Link
            className="text-sm font-medium hover:text-gray-800"
            to="/labeling/request"
          >
            <div className="bg-white py-8 px-10 rounded-md shadow-lg transform -translate-y-20 sm:-translate-y-24 w-100 mx-auto mx-20">
              <h2 className="font-semibold text-2xl mb-6">
                라벨링 의뢰하러 가기
              </h2>

              <p className="capitalize text-xl mt-1">
                벨로가를 통해 쉽고 빠르게 라벨링 의뢰를 해보세요
              </p>
            </div>
          </Link>
        </div>

        <div>
          <div className="sm:hidden">
            <label htmlFor="tabs" className="sr-only">
              Select a tab
            </label>
            {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
            <select
              id="tabs"
              name="tabs"
              className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
              defaultValue={tabs.find((tab) => tab.current)?.name}
            >
              {tabs.map((tab) => (
                <option key={tab.name}>{tab.name}</option>
              ))}
            </select>
          </div>

          <div className="hidden sm:block ">
            <div className="mb-10 ">
              <nav className="flex space-x-8 justify-center" aria-label="Tabs">
                {tabs.map((tab, index) => (
                  <a
                    key={tab.name}
                    href="#"
                    className={classNames(
                      openTab === index
                        ? "border-indigo-500 text-indigo-600"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200",
                      "whitespace-nowrap flex py-4 px-1 border-b-2 font-medium text-sm"
                    )}
                    aria-current={tab.current ? "page" : undefined}
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(index);
                    }}
                  >
                    {tab.name}
                    {tab.count ? (
                      <span
                        className={classNames(
                          openTab === index
                            ? "bg-indigo-100 text-indigo-600"
                            : "bg-gray-100 text-gray-900",
                          "hidden ml-3 py-0.5 px-2.5 rounded-full text-xs font-medium md:inline-block"
                        )}
                      >
                        {tab.count}
                      </span>
                    ) : null}
                  </a>
                ))}
              </nav>
            </div>
            <ul
              role="list"
              className={
                openTab === 0
                  ? "grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8"
                  : "hidden"
              }
            >
              {files.map((file) => (
                <Link
                  className="text-sm font-medium hover:text-gray-800"
                  to="/labeling/detail"
                >
                  <li key={file.source} className="relative">
                    <div className="group aspect-video block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                      <img
                        src={file.source}
                        alt=""
                        className="pointer-events-none object-cover group-hover:opacity-75"
                      />
                      <button
                        type="button"
                        className="absolute inset-0 focus:outline-none"
                      >
                        <span className="sr-only">
                          View details for {file.title}
                        </span>
                      </button>
                    </div>
                    <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">
                      {file.title}
                    </p>
                    <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">
                      총 10개의 응답
                    </p>
                    <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-500">
                      라벨링 시작일 | 2022.09.15
                    </p>
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </body>
    </>
  );
}

export default LabelingListPage;
