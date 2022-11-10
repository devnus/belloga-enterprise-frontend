import React from "react";
import { ReactComponent as LoadingCircle } from "assets/svgs/loadingCircle.svg";

export const Loading = () => {
  return (
    <div role="status">
      <LoadingCircle />
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Loading;
