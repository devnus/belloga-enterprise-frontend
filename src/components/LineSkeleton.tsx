import React from "react";

const LineSkeleton = () => {
  return (
    <div role="status" className="w-full rounded animate-pulse">
      <div className="h-5 bg-gray-200 rounded-full dark:bg-gray-400 "></div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default LineSkeleton;
