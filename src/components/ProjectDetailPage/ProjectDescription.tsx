import React from "react";
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

type ProjectDescriptionProps = {
  data: dataType;
  isLoading: boolean;
};

export const ProjectDescription = ({
  data,
  isLoading,
}: ProjectDescriptionProps) => {
  return (
    <div className="text-sm font-medium hover:text-gray-800 mx-auto flex max-w-7xl bg-lightGray rounded-xl mt-10">
      <div className="py-8 px-10 w-full grid lg:grid-cols-9 gap-4 ">
        <DetailTitle text={"라벨링 시작일"} />
        <div className="lg:col-span-2">
          {isLoading ? (
            <LineSkeleton />
          ) : (
            <h2 className="font-semibold text-xl ml-5">
              {data?.response.createdDate.split("T")[0]}
            </h2>
          )}
        </div>

        <DetailTitle text={"담당자"} />
        <h2 className="font-semibold text-xl ml-5 lg:col-span-2">홍길동</h2>
        <DetailTitle text={"이메일 주소"} />
        <h2 className="font-semibold text-xl ml-5 lg:col-span-2">
          test@belloga.com
        </h2>
        <DetailTitle text={"라벨링 설명"} />
        <div className="lg:col-span-8">
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
    <p className="basis-1/6 text-xl mb-1 text-gray-500 sm:text-right lg:col-span-1">
      {text}
    </p>
  );
};
