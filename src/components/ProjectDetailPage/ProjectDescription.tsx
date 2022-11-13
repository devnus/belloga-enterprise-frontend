import React from "react";
import { useQuery } from "react-query";
import api from "apis/tokenInterceptor";
import LineSkeleton from "components/LineSkeleton";

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

type dataType = {
  dateTime: string;
  id: string;
  response: ProjectInfo;
  success: boolean;
};

export const ProjectDescription = ({ projectId = "" }) => {
  const { data, isLoading, error } = useQuery<dataType>(
    ["projectInfo", projectId],
    () => getProjectInfo(projectId)
  );

  async function getProjectInfo(projectId: string) {
    const { data } = await api.get(`/api/project/v1/user/project/${projectId}`);

    return data;
  }

  return (
    <div className="text-sm font-medium hover:text-gray-800 mx-auto flex max-w-7xl bg-lightGray rounded-xl mt-10">
      <div className="py-8 px-10 w-full grid grid-cols-9 gap-4">
        <DetailTitle text={"라벨링 시작일"} />
        <div className="col-span-2">
          {isLoading ? (
            <LineSkeleton />
          ) : (
            <h2 className="font-semibold text-xl ml-5">
              {data?.response.createdDate.split("T")[0]}
            </h2>
          )}
        </div>

        <DetailTitle text={"담당자"} />
        <h2 className="font-semibold text-xl ml-5 col-span-2">홍길동</h2>
        <DetailTitle text={"이메일 주소"} />
        <h2 className="font-semibold text-xl ml-5 col-span-2">
          test@belloga.com
        </h2>

        <DetailTitle text={"라벨링 설명"} />
        <div className="col-span-8">
          {isLoading ? (
            <LineSkeleton />
          ) : (
            <h2 className="font-semibold text-xl ml-5">
              {data?.response.description}
            </h2>
          )}
        </div>
      </div>
    </div>
  );
};

const DetailTitle = ({ text = "" }) => {
  return (
    <p className="basis-1/6 text-xl mb-1 text-gray-500 text-right col-span-1">
      {text}
    </p>
  );
};
