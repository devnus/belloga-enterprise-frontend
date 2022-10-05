import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const LabelingInfoCard = ({ project }: any) => {
  return (
    <Link
      className="text-sm font-medium hover:text-gray-800"
      to={`/labeling/detail/${project.id}`}
    >
      <li key={project.projectId} className="relative">
        <div className="group aspect-video block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
          <img
            src={project.source}
            alt=""
            className="pointer-events-none object-cover group-hover:opacity-75"
          />
          <button type="button" className="absolute inset-0 focus:outline-none">
            <span className="sr-only">View details for {project.name}</span>
          </button>
        </div>
        <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">
          {project.name}
        </p>
        <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">
          총 10개의 응답
        </p>
        <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-500">
          라벨링 시작일 | 2022.09.15
        </p>
      </li>
    </Link>
  );
};

export default LabelingInfoCard;