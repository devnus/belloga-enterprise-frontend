import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import patternBanner from "../assets/images/banner_mypage_pattern.png";
import MainTop from "../components/MainTop";
import { useRecoilState } from "recoil";
import { UserInfoState } from "../states/UserInfoState";
import LabelingListTabContents from "../components/LabelingListPage/LabelingListTabContents";
import api from "../apis/tokenInterceptor";
import Skeleton from "components/LabelingListPage/Skeleton";
import SkeletonGrid from "components/LabelingListPage/SkeletonGrid";

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
  {
    name: "라벨링 중",
    href: "#",
    count: "",
    current: false,
    description: "진행 중인 라벨링",
  },
  {
    name: "라벨링 완료",
    href: "#",
    count: "",
    current: false,
    description: "완료된 라벨링",
  },
  {
    name: "승인 대기",
    href: "#",
    count: "",
    current: true,
    description: "승인 대기중인 라벨링",
  },
];

function LabelingListPage() {
  const [projectList, setProjectList] = useState<LabelingProjectInfo[]>([]);
  // const [currentIndex, setCurrentIndex] = useState<number>(1); 페이지네이션 추가용

  const [openTab, setOpenTab] = useState(0);
  const [tabNames, setTabNames] = useState(tabs);
  const [userInfo, setUserInfo] = useRecoilState(UserInfoState);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getLabelingData();
    getUserInfo();
  }, []);

  async function getLabelingData() {
    try {
      const { data } = await api.get(`/api/project/v1/project/my`);
      const myLabelingProjects = data.response.content;

      //Tab Bar에 라벨링 개수를 나타내줌
      const pendingProjCount = myLabelingProjects.filter(
        (proj: any) => proj.isAgreed === false
      );
      const completedProjCount = myLabelingProjects.filter(
        (proj: any) => proj.isAgreed === true
      );
      setTabNames(() => (tabs[2].count = pendingProjCount.length));
      setTabNames(() => (tabs[0].count = completedProjCount.length));

      //api로 받아온 데이터를 저장
      //라벨링 중, 라벨링 완료, 라벨링 대기
      setProjectList(() => [completedProjCount, [], pendingProjCount]);

      //goal : project를 json array로 담아 어레이 세개로 저장한다.
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
      const { data } = await api.get(`/api/user/v1/enterprise`);

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
                      "whitespace-nowrap flex py-4 px-1 border-b-2 font-medium text-sm align-middle"
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
                          "ml-3 py-0.5 px-2.5 rounded-full font-medium text-lg "
                        )}
                      >
                        {tab.count}
                      </span>
                    ) : null}
                  </div>
                ))}
              </nav>
            </div>

            {projectList.length === 0 ? (
              <SkeletonGrid />
            ) : (
              <>
                {projectList.map((project, index) => {
                  const props = {
                    isTabOpened: openTab === index,
                    projectList: project,
                    tabDescription: `${tabs[index].description}이 없습니다`,
                  };
                  return <LabelingListTabContents {...props} />;
                })}
              </>
            )}
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
