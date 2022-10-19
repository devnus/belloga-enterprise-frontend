import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import EmptyCard from "./EmptyCard";
import LabelingInfoCard from "./LabelingInfoCard";

const LabelingListTabContents = ({
  isTabOpened,
  projectList,
  tabDescription,
}: any) => {
  const renderContents = () => {
    if (projectList.length === 0) {
      return (
        <div className="w-full col-span-3">
          <EmptyCard
            emptyMessage={tabDescription}
            linkMessage="라벨링 의뢰하기"
            movingLink="/labeling/request"
          />
        </div>
      );
    } else {
      return projectList.map((project: any) => (
        <LabelingInfoCard project={project} key={project.projectId} />
      ));
    }
  };
  return (
    <ul
      className={
        isTabOpened === true
          ? "grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8 max-w-7xl m-auto"
          : "hidden"
      }
    >
      {renderContents()}
    </ul>
  );
};

export default LabelingListTabContents;
