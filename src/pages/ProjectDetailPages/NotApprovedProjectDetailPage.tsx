import React, { useEffect, useState } from "react";
import MainTop from "../../components/MainTop";
import NavBar from "../../components/NavBar";

import { useLocation, useNavigate } from "react-router-dom";
import { getUploadUrlInfo, IFileTypes } from "apis/createLabelingApis";
import DragDrop from "components/DragDrop";
import { ProjectDescription } from "components/ProjectDetailPage/ProjectDescription";
import MiniNavBar from "components/ProjectDetailPage/MiniNavBar";
import { useGetProjectInfo } from "hooks/useGetProjectInfo";
import axios from "axios";

const NotApprovedProjectDetailPageBody = ({ projectId }: any) => {
  const [uploadUrl, setUploadUrl] = useState<string>("");
  const [files, setFiles] = useState<IFileTypes[]>([]);
  const navigate = useNavigate();
  //최초 로딩 시에 정보 가져오기
  useEffect(() => {
    // getLabelingInfo("OCR");
    getUploadUrlInfo(projectId, setUploadUrl);
  }, []);

  const onSubmit = async () => {
    try {
      await axios.put(`${uploadUrl}`, files[0].object);
      navigate("/labeling/list");
    } catch (error) {
      console.log(error);
    }
  };

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
            <div className="my-10">
              <label
                htmlFor="cover-photo"
                className="block text-base font-medium text-gray-700"
              >
                파일 수정
                <div className="text-gray-400">
                  파일을 잘못 업로드했을 경우 파일을 다시 업로드할 수 있습니다.
                </div>
              </label>

              <DragDrop files={files} setFiles={setFiles} />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        {files[0] ? (
          <button
            onClick={onSubmit}
            type="button"
            className="w-60 mb-5 bg-gradient-to-r from-blue-400 to-sky-300 flex justify-center py-2 px-8 rounded-2xl shadow-sm text-xl font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            파일 업로드
          </button>
        ) : (
          <button
            type="button"
            className="w-60 mb-5 bg-gray-400 flex justify-center py-2 px-4 rounded-2xl shadow-sm text-xl font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 rounded cursor-not-allowed focus:outline-none disabled:opacity-75"
            disabled
          >
            파일을 업로드해주세요
          </button>
        )}
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
      <div className="mx-auto flex max-w-7xl my-5">
        <div className="text-lg">업로드한 파일 확인</div>
        <a
          href={loadProjectInfo.data?.response.zipUrl}
          className=" hover:text-blue-500 mx-3 text-lg"
        >
          {loadProjectInfo.data?.response.zipUUID}
        </a>
      </div>

      <NotApprovedProjectDetailPageBody projectId={projectId} />
    </>
  );
};

export default NotApprovedProjectDetailPage;
