import React from "react";
import { ReactComponent as LoadingCircle } from "assets/svgs/loadingCircle.svg";

export const Loading = () => {
  return (
    <div role="status">
      <LoadingCircle className="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-100 fill-blue-600" />
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Loading;
