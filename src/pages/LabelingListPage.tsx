import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BottomNavigationBar from "../components/BottomNavigationBar";
import EmptyCard from "../components/EmptyCard";
import LabelingInfoCard from "../components/LabelingInfoCard";
import NavBar from "../components/NavBar";
import patternBanner from "../assets/images/banner_mypage_pattern.png";
import MainTop from "../components/MainTop";
import { useRecoilState } from "recoil";
import { UserInfoState } from "../states/UserInfoState";

type LabelingProjectInfo = {
  dataType: string;
  isAgreed: boolean;
  name: string;
  projectId: number;
  zipUUID: string;
  zipUrl: string;
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const tabs = [
  { name: "라벨링 중", href: "#", count: "", current: false },
  { name: "라벨링 완료", href: "#", count: "", current: false },
  { name: "승인 대기", href: "#", count: "", current: true },
];

function LabelingListPage() {
  const [projectList, setProjectList] = useState<LabelingProjectInfo[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(1);
  const [openTab, setOpenTab] = useState(0);
  const [tabNames, setTabNames] = useState(tabs);
  const [userInfo, setUserInfo] = useRecoilState(UserInfoState);

  useEffect(() => {
    getLabelingData();
    getUserInfo();
  }, []);

  async function getLabelingData() {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/project/v1/project/my`,
        {
          headers: {
            Authorization: `${localStorage.getItem("belloga-page")}`,
          },
        }
      );
      const myLabelingProjects = data.response.content;

      //Tab Bar에 라벨링 개수를 나타내줌
      const pendingProjCount = myLabelingProjects.filter(
        (proj: any) => proj.isAgreed === false
      ).length;
      const completedProjCount = myLabelingProjects.filter(
        (proj: any) => proj.isAgreed === true
      ).length;
      setTabNames(() => (tabs[0].count = pendingProjCount));
      setTabNames(() => (tabs[1].count = completedProjCount));

      //api로 받아온 데이터를 저장
      setProjectList(() => data.response.content);
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

  async function getUserInfo() {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/user/v1/enterprise`,
        {
          headers: {
            Authorization: `${localStorage.getItem("belloga-page")}`,
          },
        }
      );
      setUserInfo(() => data.response);
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

  return (
    <>
      <body className="z-0">
        <div className="grid">
          <MainTop>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {userInfo.name}님, 안녕하세요
            </h2>
            {parseInt(tabs[0].count) === 0 ? (
              <p className="mt-3 text-xl text-white">
                현재 진행 중인 라벨링이 없습니다.
              </p>
            ) : (
              <p className="mt-3 text-xl text-white">
                총 {tabs[0].count} 건의 라벨링이 진행 중입니다.
              </p>
            )}
          </MainTop>

          <div className="relative w-full">
            <Link
              className="text-sm font-medium hover:text-gray-800 mx-auto flex max-w-7xl "
              to="/labeling/request"
            >
              <div className="py-8 px-10 rounded-md shadow-lg transform -translate-y-20 sm:-translate-y-24 w-full mx-auto mx-20">
                <div className="absolute inset-0 overflow-hidden rounded-md">
                  <img
                    src={patternBanner}
                    alt=""
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                <div className="relative mx-auto flex pl-5 flex-col ">
                  <h2 className="font-semibold text-2xl mb-3 mt-5">
                    라벨링 의뢰하러 가기
                  </h2>

                  <p className="capitalize text-xl mb-1 text-gray-500">
                    벨로가를 통해 쉽고 빠른 라벨링 의뢰를 해보세요
                  </p>
                </div>
              </div>
            </Link>
          </div>
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
                  <div
                    key={tab.name}
                    className={classNames(
                      openTab === index
                        ? "border-mainBlue text-mainBlue font-bold text-xl"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200 text-xl",
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
                          "hidden ml-3 py-0.5 px-2.5 rounded-full text-xs font-medium md:inline-block text-lg"
                        )}
                      >
                        {tab.count}
                      </span>
                    ) : null}
                  </div>
                ))}
              </nav>
            </div>
            <ul
              className={
                openTab === 0
                  ? "grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8 max-w-7xl m-auto"
                  : "hidden"
              }
            >
              {projectList.length === 0 && (
                <div className="w-full col-span-3">
                  <EmptyCard
                    emptyMessage="진행 중인 라벨링이 없습니다"
                    linkMessage="라벨링 의뢰하기"
                    movingLink="/labeling/request"
                  />
                </div>
              )}

              {projectList.map((project) => (
                <LabelingInfoCard project={project} key={project.projectId} />
              ))}
            </ul>

            <ul
              className={
                openTab === 1
                  ? "grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8 max-w-7xl m-auto"
                  : "hidden"
              }
            >
              <div className="w-full col-span-3">
                <EmptyCard
                  emptyMessage="완료된 라벨링이 없습니다"
                  linkMessage="라벨링 의뢰하기"
                  movingLink="/labeling/request"
                />
              </div>
            </ul>

            <ul
              className={
                openTab === 2
                  ? "grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8 max-w-7xl m-auto"
                  : "hidden"
              }
            >
              <div className="w-full col-span-3">
                <EmptyCard
                  emptyMessage="승인 대기중인 라벨링이 없습니다"
                  linkMessage="라벨링 의뢰하기"
                  movingLink="/labeling/request"
                />
              </div>
            </ul>
          </div>
        </div>

        {/* <BottomNavigationBar
          length={10}
          currentIndex={currentIndex}
          onChange={setCurrentIndex}
        /> */}
      </body>
    </>
  );
}

export default LabelingListPage;
