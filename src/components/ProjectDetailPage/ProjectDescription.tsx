import React, { useEffect, useState } from "react";
import api from "apis/tokenInterceptor";
import axios from "axios";

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

export const ProjectDescription = ({ projectId = "" }) => {
  const [projectInfo, setProjectInfo] = useState<ProjectInfo | undefined>();

  //최초 로딩 시에 정보 가져오기
  useEffect(() => {
    // getLabelingInfo("OCR");
    getProjectInfo(projectId);
  }, [projectId]);

  async function getProjectInfo(projectId: string) {
    try {
      const { data } = await api.get(
        `/api/project/v1/user/project/${projectId}`
      );

      setProjectInfo(() => data.response);
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
    <div className="text-sm font-medium hover:text-gray-800 mx-auto flex max-w-7xl bg-lightGray rounded-xl mt-10">
      <div className="py-8 px-2 w-full  mx-20">
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
            <p className="capitalize text-xl mb-1 text-gray-500">담당자</p>
            <h2 className="font-semibold text-xl ml-5">홍길동</h2>
          </div>
          <div className="flex flex-row ">
            <p className="capitalize text-xl mb-1 text-gray-500">이메일 주소</p>
            <h2 className="font-semibold text-xl ml-5">test@belloga.com</h2>
          </div>
        </div>
        <div className=" flex flex-row items-start my-5">
          <p className="basis-1/6 text-xl mb-1 text-gray-500 ">라벨링 설명</p>
          <h2 className="font-semibold text-xl ml-5">
            {projectInfo?.description}
          </h2>
        </div>
      </div>
    </div>
  );
};
