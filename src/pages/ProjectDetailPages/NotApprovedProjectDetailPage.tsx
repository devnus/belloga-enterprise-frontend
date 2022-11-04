import React, { useEffect, useState } from "react";
import MainTop from "../../components/MainTop";
import NavBar from "../../components/NavBar";

import { useLocation } from "react-router-dom";
import { getUploadUrlInfo, IFileTypes } from "apis/createLabelingApis";
import DragDrop from "components/DragDrop";
import { ProjectDescription } from "components/ProjectDetailPage/ProjectDescription";

const NotApprovedProjectDetailPageBody = ({ projectId }: any) => {
  const [uploadUrl, setUploadUrl] = useState<string>("");
  const [files, setFiles] = useState<IFileTypes[]>([]);
  //최초 로딩 시에 정보 가져오기
  useEffect(() => {
    // getLabelingInfo("OCR");
    getUploadUrlInfo(projectId, setUploadUrl);
  }, []);

  return (
    <>
      <div className="bg-white">
        <div
          className="relative z-40 lg:hidden"
          role="dialog"
          aria-modal="true"
        ></div>

        <div className="w-full">
          <div className="sm:col-span-6 max-w-7xl mx-auto">
            <label
              htmlFor="cover-photo"
              className="block text-base font-medium text-gray-700"
            >
              파일 업로드
            </label>
            <DragDrop files={files} setFiles={setFiles} />
          </div>
        </div>
      </div>
    </>
  );
};

const NotApprovedProjectDetailPage = () => {
  const location = useLocation();
  const projectId = location.pathname.split("/")[4];

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

      <ProjectDescription projectId={projectId} />
      <NotApprovedProjectDetailPageBody projectId={projectId} />
    </>
  );
};

export default NotApprovedProjectDetailPage;
