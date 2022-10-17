import React from "react";
import process1 from "assets/icons/process_01.png";
import process2 from "assets/icons/process_02.png";
import process3 from "assets/icons/process_03.png";
import process4 from "assets/icons/process_04.png";

const processes = [
  {
    name: "데이터 의뢰",
    engName: "Data Request",
    description:
      "필요하신 데이터를 라벨링을 통해 손쉽게 데이터 의뢰를 해보세요",
    imageSrc: process1,
  },
  {
    name: "관리자 승인",
    engName: "Data Approval",
    description: "요청하신 데이터를 관리자가 확인하고 승인합니다.",
    imageSrc: process2,
  },
  {
    name: "라벨링 진행",
    engName: "Labeling Progress",
    description: "요청하신 데이터를 벨로가 알람을 통해 라벨링을 진행합니다.",
    imageSrc: process3,
  },
  {
    name: "결과물 전달",
    engName: "Deliver the Deliverabies",
    description:
      "라벨링이 완료 된 데이터를 고객님께 정리 및 수집하여 전달드립니다.",
    imageSrc: process4,
  },
];

const LabelingProcess = ({}) => {
  return (
    <div className="grid grid-cols-1 gap-16 m-auto sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 pb-10 max-w-7xl">
      {processes.map((process, index) => (
        <div
          key={process.name}
          className="aspect-square text-center mx-10 sm:flex sm:text-left lg:text-center flex flex-1 flex-col p-8 bg-white rounded-md shadow"
        >
          <div className="my-auto">
            <div className="flex aspect-square w-10 text-lg rounded-full text-white bg-black mx-auto mb-5 items-center justify-center">
              {index + 1}
            </div>
            <h3 className="text-base font-medium text-xl">{process.name}</h3>
            <div className="text-sm font-medium text-gray-400 text-lg">
              {process.engName}
            </div>
            <div className="sm:flex-shrink-0 ">
              <div className="flow-root">
                <img
                  className="mx-auto h-24 w-28 m-10 object-contain object-center"
                  src={process.imageSrc}
                  alt=""
                />
              </div>
            </div>
            <p className="mt-2 text-sm text-gray-500 text-lg w-3/5 mx-auto break-normal">
              {process.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LabelingProcess;
