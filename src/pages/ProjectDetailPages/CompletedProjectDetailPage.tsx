import React, { useEffect, useRef, useState } from "react";
import ReactJson from "react-json-view";
import MainTop from "../../components/MainTop";
import NavBar from "../../components/NavBar";
import api from "../../apis/tokenInterceptor";
import { useLocation } from "react-router-dom";
import { ProjectDescription } from "components/ProjectDetailPage/ProjectDescription";
import { BoundingBoxInfo, drawOnCanvas } from "modules/drawBoundingBox";
import { useQuery } from "react-query";
import { resultJson } from "mocks/completeProject";
import ImageSwiper from "components/ProjectDetailPage/ImageSwiper";
import MiniNavBar from "components/ProjectDetailPage/MiniNavBar";
import TabButton from "components/ProjectDetailPage/TabButton";
import {
  ArrowDownTrayIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/24/solid";

type ProjectInfo = {
  createdDate: string;
  dataType: string;
  description: string;
  isAgreed: boolean;
  name: string;
  progressRate: number;
  projectId: number;
  zipUUID: string;
  zipUrl: string;
};

type StringInfo = {
  text: string;
  reliability: number;
};

const type = "OCR";
const BUTTONSTYLE =
  "inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-mainBlue hover:bg-mainLightBlue";

const LabelingDetailPageBody = ({}) => {
  const [openTab, setOpenTab] = useState(1);
  const [labelingResult, setLabelingResult] = useState<BoundingBoxInfo[]>([]);
  const [labelingResultJSON, setLabelingResultJSON] = useState({});
  const [projectInfo, setProjectInfo] = useState<ProjectInfo | undefined>();
  const [imageUrl, setImageUrl] = useState("");
  const [labeledText, setLabeledText] = useState<StringInfo | undefined>();

  const [focusIndex, setFocusIndex] = useState<number>(0);

  const location = useLocation();
  const projectId = location.pathname.split("/")[4];

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const canvasCtxRef = useRef<CanvasRenderingContext2D | null>(null);

  //api 불러온 후 url 할당, 정보 가공
  useEffect(() => {
    if (labelingResult.length !== 0) {
      const boundingBoxInfo: BoundingBoxInfo = labelingResult[focusIndex];
      const labeledText: StringInfo = {
        text: boundingBoxInfo.textLabel,
        reliability: boundingBoxInfo.reliability,
      };

      setLabeledText(() => labeledText);
      setImageUrl(boundingBoxInfo.imageUrl);

      //canvas에 불러온다
      if (canvasRef.current !== null) {
        canvasRef.current.focus();
      }

      if (canvasRef.current) {
        drawOnCanvas(canvasCtxRef, canvasRef, boundingBoxInfo);
      }
    }
  }, [labelingResult, focusIndex]);

  // const { data, isLoading, error } = useQuery(
  //   ["labelingResult", type, projectId],
  //   () => getLabelingInfo(type, projectId)
  // );

  useEffect(() => {
    setLabelingResult(() => resultJson.response.content);
    setLabelingResultJSON(() => resultJson.response);
  }, []);

  // useEffect(() => {
  //   if (isLoading === false) {
  //     setLabelingResult(() => resultJson.response.content);
  //     setLabelingResultJSON(() => resultJson.response);
  //   }
  // }, [isLoading, data]);

  const onClickCopy = () => {
    if (openTab === 2) {
      navigator.clipboard.writeText(JSON.stringify(labelingResult[focusIndex]));
    }
    if (openTab === 3) {
      navigator.clipboard.writeText(JSON.stringify(labelingResultJSON));
    }
  };

  return (
    <>
      <div className="bg-white">
        <div
          className="relative z-40 lg:hidden"
          role="dialog"
          aria-modal="true"
        ></div>

        {/* <div className="w-full">
          <ProjectDescription projectId={projectId} />
        </div> */}
        <div className="py-10 lg:max-w-7xl mx-auto">
          <ImageSwiper
            imgData={labelingResult}
            focusIndex={focusIndex}
            setFocusIndex={setFocusIndex}
          />
        </div>

        <main className="mx-auto pt-14 pb-24 px-4 sm:pt-16 sm:pb-32 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="lg:grid lg:grid-rows-1 lg:grid-cols-7 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16">
            <div className="lg:row-end-1 lg:col-span-4 h-96">
              <div className="h-full aspect-w-4 aspect-h-3 rounded-lg bg-gray-100 overflow-hidden flex items-center ">
                <div className="object-contain m-auto">
                  <canvas ref={canvasRef} />
                </div>
              </div>
            </div>

            <div className="w-full mx-auto mt-14 sm:mt-16 lg:max-w-none lg:mt-0 lg:row-end-2 lg:row-span-2 lg:col-span-3 h-96">
              <form action="#">
                <div>
                  {/* 탭바 내용 */}
                  <div
                    className="flex items-center"
                    aria-orientation="horizontal"
                    role="tablist"
                  >
                    <TabButton
                      openTab={openTab}
                      setOpenTab={setOpenTab}
                      tabName={"텍스트"}
                      targetNumber={1}
                    />
                    <TabButton
                      openTab={openTab}
                      setOpenTab={setOpenTab}
                      tabName={"JSON"}
                      targetNumber={2}
                    />
                    <TabButton
                      openTab={openTab}
                      setOpenTab={setOpenTab}
                      tabName={"전체 결과"}
                      targetNumber={3}
                    />
                  </div>
                  {/* 탭에 따른 내용 */}
                  <div className="mt-2">
                    <div
                      id="tabs-1-panel-2"
                      className="p-0.5 -m-0.5 rounded-lg "
                      aria-labelledby="tabs-1-tab-2"
                      role="tabpanel"
                    >
                      <div className="border border-gray-200">
                        <div className=" mx-px mt-px px-5 pt-3 pb-12 text-sm leading-5 text-gray-800 h-80">
                          <div
                            className={
                              openTab === 1
                                ? "block h-72 overflow-auto"
                                : "hidden"
                            }
                          >
                            <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
                              {labeledText && (
                                <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                                  <div className="w-0 flex-1 flex items-center">
                                    <span className="ml-2 flex-1 w-0 truncate">
                                      {labeledText.text}
                                    </span>
                                  </div>
                                  <div className="ml-4 flex-shrink-0 font-medium text-mainBlue hover:text-indigo-500">
                                    {(labeledText.reliability * 100).toFixed(1)}
                                    %
                                  </div>
                                </li>
                              )}
                            </ul>
                          </div>
                          <div
                            className={
                              openTab === 2
                                ? "overflow-auto h-72"
                                : "hidden overflow-auto"
                            }
                          >
                            <ReactJson src={labelingResult[focusIndex]} />
                          </div>
                          <div
                            className={
                              openTab === 3
                                ? "overflow-auto h-72"
                                : "hidden overflow-auto"
                            }
                          >
                            <ReactJson src={labelingResultJSON} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-2 flex justify-end space-x-3">
                  <button
                    type="button"
                    onClick={onClickCopy}
                    className={BUTTONSTYLE}
                  >
                    <DocumentDuplicateIcon className="h-6 w-6 mr-2 text-white" />
                    복사
                  </button>

                  <button
                    type="button"
                    onClick={onClickCopy}
                    className={BUTTONSTYLE}
                  >
                    <ArrowDownTrayIcon className="h-6 w-6 mr-2 text-white" />
                    결과 다운로드
                  </button>
                </div>
              </form>
            </div>
          </div>
        </main>

        <footer aria-labelledby="footer-heading" className="bg-gray-50">
          <h2 id="footer-heading" className="sr-only">
            Footer
          </h2>
        </footer>
      </div>
    </>
  );
};

const LabelingDetailPage = () => {
  return (
    <>
      <NavBar />
      <MainTop>
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          완료한 라벨링
        </h2>
        <MiniNavBar />
      </MainTop>

      <LabelingDetailPageBody />
    </>
  );
};

export default LabelingDetailPage;

const getLabelingInfo = async (type: string, projectId: string) => {
  const { data } = await api.get(
    `/api/labeled-result/v1/verification/results/${type}/${projectId}`
  );

  return data;
};
