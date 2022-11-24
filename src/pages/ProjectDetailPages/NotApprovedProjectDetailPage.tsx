import React, { useEffect, useState } from "react";
import MainTop from "../../components/MainTop";
import NavBar from "../../components/NavBar";

import { useLocation } from "react-router-dom";
import { getUploadUrlInfo, IFileTypes } from "apis/createLabelingApis";
import DragDrop from "components/DragDrop";
import { ProjectDescription } from "components/ProjectDetailPage/ProjectDescription";
import MiniNavBar from "components/ProjectDetailPage/MiniNavBar";
import { useGetProjectInfo } from "hooks/useGetProjectInfo";

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
  const loadProjectInfo = useGetProjectInfo(projectId);

  return (
    <>
      <NavBar />
      <MainTop>
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          승인 대기중 라벨링
        </h2>
        <MiniNavBar projectTitle={loadProjectInfo.data?.response.name} />
      </MainTop>

      <ProjectDescription {...loadProjectInfo} />
      <NotApprovedProjectDetailPageBody projectId={projectId} />
    </>
  );
};

export default NotApprovedProjectDetailPage;
