import React from "react";
import Skeleton from "./Skeleton";

const SkeletonGrid = () => {
  return (
    <ul className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8 max-w-7xl m-auto">
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </ul>
  );
};

export default SkeletonGrid;
