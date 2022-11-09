import React from "react";
import MainTop from "../../components/MainTop";
import NavBar from "../../components/NavBar";

import { useLocation } from "react-router-dom";

import { ProjectDescription } from "components/ProjectDetailPage/ProjectDescription";
import MiniNavBar from "components/ProjectDetailPage/MiniNavBar";

const ProcessingPageBody = ({ projectId }: any) => {
  return (
    <>
      <div className="bg-white">
        <div
          className="relative z-40 lg:hidden"
          role="dialog"
          aria-modal="true"
        ></div>
      </div>
    </>
  );
};

const ProcessingProjectDetailPage = () => {
  const location = useLocation();
  const projectId = location.pathname.split("/")[3];

  return (
    <>
      <NavBar />
      <MainTop>
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          승인 대기중 라벨링
        </h2>
        <MiniNavBar />
      </MainTop>

      <ProjectDescription projectId={projectId} />
      <ProcessingPageBody projectId={projectId} />
    </>
  );
};

export default ProcessingProjectDetailPage;
