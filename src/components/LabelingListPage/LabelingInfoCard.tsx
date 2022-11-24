import React from "react";
import { Link } from "react-router-dom";
import EmptyCard from "./EmptyCard";

const LabelingInfoCard = ({ project }: any) => {
  const { isAgreed, progressRate } = project;

  //generate url
  const targetUrl = (isAgreed: boolean, progressRate: number) => {
    if (isAgreed === false) {
      return `/labeling/waiting/detail/${project.projectId}`;
    }
    if (isAgreed === true && progressRate === 100) {
      return `/labeling/completed/detail/${project.projectId}`;
    }
    if (isAgreed === true && progressRate !== 100) {
      return `/labeling/detail/${project.projectId}`;
    }

    return "";
  };

  const detailUrl: string = targetUrl(isAgreed, progressRate);

  return (
    <Link className="text-sm font-medium hover:text-gray-800" to={detailUrl}>
      <li key={project.projectId} className="relative">
        <div className="group aspect-video block w-full flex justify-center overflow-hidden rounded-lg bg-lightGray focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
          {project.source ? (
            <>
              <img
                src={project.source}
                alt=""
                className="pointer-events-none object-cover group-hover:opacity-75"
              />
              <button
                type="button"
                className="absolute inset-0 focus:outline-none"
              >
                <span className="sr-only">View details for {project.name}</span>
              </button>
            </>
          ) : (
            <div className="flex justify-center py-auto ">
              <EmptyCard emptyMessage="OCR 라벨링" />
            </div>
          )}
        </div>
        <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">
          {project.name}
        </p>
        {/* <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">
          총 10개의 응답
        </p> */}
        <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-500">
          라벨링 시작일 | {project.createdDate.split("T")[0]}
        </p>
      </li>
    </Link>
  );
};

export default LabelingInfoCard;
