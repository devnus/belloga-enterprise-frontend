import React, { useEffect, useRef, useState } from "react";
import ReactJson from "react-json-view";
import MainTop from "../components/MainTop";
import NavBar from "../components/NavBar";
import api from "../apis/tokenInterceptor";
import axios from "axios";
import { useLocation } from "react-router-dom";

type BoundingBoxInfo = {
  imageUrl: string;
  reliability: number;
  textLabel: string;
  totalLabelerNum: number;
  x: number[];
  y: number[];
};

type ProjectInfo = {
  createdDate: string;
  dataType: string;
  description: string;
  isAgreed: boolean;
  name: string;
  progressRate: number;
  projectId: number;
  zipUUID: string;
  zipUrl: string;
};

const NotApprovedProjectDetailPageBody = ({}) => {
  const [projectInfo, setProjectInfo] = useState<ProjectInfo | undefined>();
  const location = useLocation();
  const [uploadUrl, setUploadUrl] = useState<string>("");

  //최초 로딩 시에 정보 가져오기
  useEffect(() => {
    // getLabelingInfo("OCR");
    const projectId = location.pathname.split("/")[4];
    getProjectInfo(projectId);
  }, []);

  async function getProjectInfo(projectId: string) {
    try {
      const { data } = await api.get(
        `/api/project/v1/user/project/${projectId}`
      );

      setProjectInfo(() => data.response);
      getUploadUrlInfo(projectId);
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

  async function getUploadUrlInfo(projectId: string) {
    try {
      const { data } = await api.get(
        `/api/project/v1/project/${projectId}/url`
      );
      setUploadUrl(() => data.response.url);
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
      <div className="bg-white">
        <div
          className="relative z-40 lg:hidden"
          role="dialog"
          aria-modal="true"
        ></div>

        <div className="w-full">
          <div className="text-sm font-medium hover:text-gray-800 mx-auto flex max-w-7xl bg-lightGray rounded-xl mt-10">
            <div className="py-8 px-2 w-full mx-auto mx-20">
              <div className="relative justify-between flex flex-row ">
                <div className=" flex flex-row ">
                  <p className="capitalize text-xl mb-1 text-gray-500">
                    라벨링 시작일
                  </p>
                  <h2 className="font-semibold text-xl ml-5">
                    {projectInfo?.createdDate.split("T")[0]}
                  </h2>
                </div>
                <div className="flex flex-row ">
                  <p className="capitalize text-xl mb-1 text-gray-500">
                    담당자
                  </p>
                  <h2 className="font-semibold text-xl ml-5">홍길동</h2>
                </div>
                <div className="flex flex-row ">
                  <p className="capitalize text-xl mb-1 text-gray-500">
                    이메일 주소
                  </p>
                  <h2 className="font-semibold text-xl ml-5">
                    test@belloga.com
                  </h2>
                </div>
              </div>
              <div className=" flex flex-row items-start my-5">
                <p className="basis-1/6 text-xl mb-1 text-gray-500 ">
                  라벨링 설명
                </p>
                <h2 className="font-semibold text-xl ml-5">
                  {projectInfo?.description}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const NotApprovedProjectDetailPage = ({}) => {
  return (
    <>
      <NavBar />
      <MainTop>
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          승인 대기중 라벨링
        </h2>
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
      </MainTop>

      <NotApprovedProjectDetailPageBody />
    </>
  );
};

export default NotApprovedProjectDetailPage;
