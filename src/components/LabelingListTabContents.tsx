import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import EmptyCard from "./EmptyCard";
import LabelingInfoCard from "./LabelingInfoCard";
import Skeleton from "./Skeleton";

const LabelingListTabContents = ({
  isTabOpened,
  projectList,
  tabDescription,
}: any) => {
  return (
    <ul
      className={
        isTabOpened === true
          ? "grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8 max-w-7xl m-auto"
          : "hidden"
      }
    >
      {projectList.length === 0 && (
        <div className="w-full col-span-3">
          <EmptyCard
            emptyMessage={tabDescription}
            linkMessage="라벨링 의뢰하기"
            movingLink="/labeling/request"
          />
        </div>
      )}

      <Skeleton />

      {projectList.map((project: any) => (
        <LabelingInfoCard project={project} key={project.projectId} />
      ))}
    </ul>
  );
};

export default LabelingListTabContents;
