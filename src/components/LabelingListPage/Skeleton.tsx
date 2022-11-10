import React from "react";
import { ReactComponent as SkeletonImage } from "assets/svgs/skeletonImage.svg";

const Skeleton = () => {
  return (
    <div role="status" className="max-w-sm rounded animate-pulse">
      <div className="flex aspect-video justify-center items-center mb-4 8 bg-gray-100 rounded dark:bg-gray-300">
        <SkeletonImage />
      </div>
      <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-400 w-48 mb-4"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400 mb-2.5"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400"></div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Skeleton;
