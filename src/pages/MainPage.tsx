import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import { useRecoilState } from "recoil";
import { LoginState } from "../states/LoginState";
import LabelingProcess from "../components/MainPage/LabelingProcess";
import data from "../assets/icons/data_icon.png";
import search from "../assets/icons/search_icon.png";
import ocrImg from "../assets/images/ocr_img.png";
import logo from "../assets/images/belloga_white.png";

function MainPage() {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(LoginState);
  return (
    <>
      <NavBar />
      <body className="z-0">
        <div className="relative py-32 px-6 sm:py-40 sm:px-12 lg:px-16 ">
          <div className="absolute inset-0 overflow-hidden bg-gradient-to-r from-gradBottom via-gradTop to-gradTop">
            {/* <img src={logo} alt="" className=" object-cover object-center" /> */}
          </div>
          <div aria-hidden="true" className="absolute inset-0" />
          <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
            <div className="w-1/2 my-5 ">
              <img src={logo} alt="" className="object-cover object-center" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              벨로가, 알람으로 하는 라벨링
            </h2>
            <p className="mt-3 text-xl text-white">
              벨로가는 크라우드소싱 방식으로 작동하는 데이터 라벨링 툴입니다.
            </p>
            <Link
              className="mt-8 block w-full rounded-md border border-transparent bg-white text-mainBlue py-3 px-8 text-base text-xl rounded-3xl font-medium text-gray-900 hover:bg-gray-100 sm:w-auto"
              to={isLoggedIn ? "/labeling/request" : "/signIn"}
            >
              라벨링 하러가기
            </Link>
          </div>
        </div>

        <div className="relative w-full">
          <div className="text-sm font-medium hover:text-gray-800 mx-auto flex max-w-7xl ">
            <div className="bg-white justify-between items-center flex flex-row py-8 px-10 rounded-lg shadow-lg transform -translate-y-20 sm:-translate-y-24 w-full mr-5 ">
              <div className="relative flex pl-5 flex-col ">
                <h2 className="font-semibold text-2xl mt-5">
                  기존 데이터 라벨러 고용
                </h2>
                <h2 className="text-2xl ">번거로우셨나요?</h2>

                <p className="capitalize text-base mb-1 mt-3 text-gray-500">
                  라벨러 고용없이 데이터를 받아보세요!
                </p>
              </div>
              <img
                src={data}
                alt=""
                className="object-cover object-center h-24 w-auto"
              />
            </div>

            <div className="bg-white justify-between flex items-center flex-row py-8 px-10 rounded-lg shadow-lg transform -translate-y-20 sm:-translate-y-24 w-full mr-5 ">
              <div className="relative flex pl-5 flex-col ">
                <h2 className="font-semibold text-2xl mt-5">
                  지속적인 데이터 수급이
                </h2>
                <h2 className="text-2xl ">필요하신가요?</h2>

                <p className="capitalize text-base mb-1 mt-3 text-gray-500">
                  벨로가에서 꾸준히 데이터를 수집해보세요!
                </p>
              </div>
              <img
                src={search}
                alt=""
                className="object-cover object-center h-24 w-auto"
              />
            </div>
          </div>
        </div>

        <div className="relative bg-lightGray">
          <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center py-10">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl ">
              제공하는 서비스
            </h2>
            <p className="mt-3 text-xl ">
              Text annotation과 OCR 기술을 이용할 수 있습니다.
            </p>
          </div>
          <div className="mx-auto max-w-2xl py-8 px-4 sm:py-10 sm:px-6 lg:max-w-7xl">
            <div className="relative overflow-hidden rounded-lg lg:h-96">
              <div className="absolute inset-0">
                <img
                  src={ocrImg}
                  alt=""
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div
                aria-hidden="true"
                className="relative h-96 w-full lg:hidden"
              />
              <div
                aria-hidden="true"
                className="relative h-32 w-full lg:hidden"
              />
              <div className="absolute inset-x-0 bottom-0 rounded-bl-lg py-10 rounded-br-lg bg-black bg-opacity-75 p-6 backdrop-blur backdrop-filter sm:flex sm:items-center sm:justify-between lg:inset-y-0 lg:inset-x-auto lg:w-96 lg:flex-col lg:items-start lg:rounded-tl-lg lg:rounded-br-none">
                <div>
                  <h2 className="text-xl font-bold text-white">OCR</h2>
                  <p className="mt-1 text-sm text-gray-300">
                    문장 성분을 분석합니다
                  </p>
                </div>
              </div>
            </div>
          </div>{" "}
        </div>
        <div className="relative bg-sky-400">
          <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center py-10">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              라벨링 과정
            </h2>
            <p className="mt-3 text-xl text-white">
              벨로가의 기술로 쉽고 빠르게 라벨링 해 드립니다
            </p>
          </div>

          <LabelingProcess />
        </div>
      </body>
      <footer className="bg-white">
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
          <div className="mt-8 md:order-1 md:mt-0">
            <p className="text-base text-gray-400">Belloga</p>
            <p className="text-center text-base text-gray-400">
              &copy; 2022 devnus, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default MainPage;
