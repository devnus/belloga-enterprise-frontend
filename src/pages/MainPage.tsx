import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import { useRecoilState } from "recoil";
import { LoginState } from "../states/LoginState";
import mainTopImg from "../assets/images/main_top_img.png";

const incentives = [
  {
    name: "Free Shipping",
    description:
      "It's not actually free we just price it into the products. Someone's paying for it, and it's not us.",
    imageSrc:
      "https://tailwindui.com/img/ecommerce/icons/icon-delivery-light.svg",
  },
  {
    name: "24/7 Customer Support",
    description:
      "Our AI chat widget is powered by a naive series of if/else statements. Guaranteed to irritate.",
    imageSrc: "https://tailwindui.com/img/ecommerce/icons/icon-chat-light.svg",
  },
  {
    name: "Fast Shopping Cart",
    description:
      "Look how fast that cart is going. What does this mean for the actual experience? I don't know.",
    imageSrc:
      "https://tailwindui.com/img/ecommerce/icons/icon-fast-checkout-light.svg",
  },
  {
    name: "Gift Cards",
    description:
      "Buy them for your friends, especially if they don't like our store. Free money for us, it's great.",
    imageSrc:
      "https://tailwindui.com/img/ecommerce/icons/icon-gift-card-light.svg",
  },
];

function MainPage() {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(LoginState);
  return (
    <>
      <NavBar />
      <body className="z-0">
        <div className="relative py-32 px-6 sm:py-40 sm:px-12 lg:px-16 ">
          <div className="absolute inset-0 overflow-hidden">
            <img
              src={mainTopImg}
              alt=""
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div aria-hidden="true" className="absolute inset-0" />
          <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
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

        <div className="relative bg-gray-100">
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
                  src="https://tailwindui.com/img/ecommerce-images/category-page-01-featured-collection.jpg"
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
                  <h2 className="text-xl font-bold text-white">
                    Text Annotation
                  </h2>
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

          <div className="grid grid-cols-1 gap-6 m-auto sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 pb-10 max-w-7xl">
            {incentives.map((incentive) => (
              <div
                key={incentive.name}
                className="text-center sm:flex sm:text-left lg:block lg:text-center bg-white rounded-md shadow flex flex-1 flex-col p-8"
              >
                <div className="sm:flex-shrink-0">
                  <div className="flow-root">
                    <img
                      className="mx-auto h-24 w-28"
                      src={incentive.imageSrc}
                      alt=""
                    />
                  </div>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3 lg:mt-3 lg:ml-0">
                  <h3 className="text-sm font-medium text-gray-900">
                    {incentive.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    {incentive.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
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
