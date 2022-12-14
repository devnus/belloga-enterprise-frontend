import React from "react";
import MainTop from "../../components/MainTop";
import NavBar from "../../components/NavBar";

import { useLocation } from "react-router-dom";

import { ProjectDescription } from "components/ProjectDetailPage/ProjectDescription";
import MiniNavBar from "components/ProjectDetailPage/MiniNavBar";
import MyResponsivePie from "components/ProjectDetailPage/PieChart";
import { useGetProjectInfo } from "hooks/useGetProjectInfo";

const ProcessingPageBody = ({ projectId, progressRate = 0 }: any) => {
  const completedrate = Math.ceil(progressRate * 10) / 10;
  return (
    <>
      <div className="bg-white">
        <div
          className="relative z-40 lg:hidden"
          role="dialog"
          aria-modal="true"
        ></div>

        <MyResponsivePie
          processingrate={100 - completedrate}
          completedrate={completedrate}
        />
      </div>
    </>
  );
};

const ProcessingProjectDetailPage = () => {
  const location = useLocation();
  const projectId = location.pathname.split("/")[3];
  const loadProjectInfo = useGetProjectInfo(projectId);

  return (
    <>
      <NavBar />
      <MainTop>
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          승인 대기중 라벨링
        </h2>
        <MiniNavBar projectTitle={loadProjectInfo.data?.response.name} />
      </MainTop>

      <ProjectDescription {...loadProjectInfo} />
      <ProcessingPageBody
        projectId={projectId}
        progressRate={loadProjectInfo.data?.response.progressRate}
      />
    </>
  );
};

export default ProcessingProjectDetailPage;
