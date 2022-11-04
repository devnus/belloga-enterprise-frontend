import React, { useEffect, useRef, useState } from "react";
import ReactJson from "react-json-view";
import MainTop from "../../components/MainTop";
import NavBar from "../../components/NavBar";
import api from "../../apis/tokenInterceptor";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { ProjectDescription } from "components/ProjectDetailPage/ProjectDescription";

type BoundingBoxInfo = {
  imageUrl: string;
  reliability: number;
  textLabel: string;
  totalLabelerNum: number;
  x: number[];
  y: number[];
};

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

const LabelingDetailPageBody = ({}) => {
  const [openTab, setOpenTab] = useState(1);
  const [labelingResult, setLabelingResult] = useState([]);
  const [labelingResultJSON, setLabelingResultJSON] = useState({});
  const [projectInfo, setProjectInfo] = useState<ProjectInfo | undefined>();
  const [imageUrl, setImageUrl] = useState("");
  const [labeledText, setLabeledText] = useState<string[]>([]);
  const location = useLocation();
  const projectId = location.pathname.split("/")[3];

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const canvasCtxRef = useRef<CanvasRenderingContext2D | null>(null);

  //api 불러온 후 url 할당, 정보 가공
  useEffect(() => {
    if (labelingResult.length !== 0) {
      const boundingBoxInfo: BoundingBoxInfo = labelingResult[0];
      const labeledTextList: any = labelingResult.map(
        (labelingInfo: BoundingBoxInfo) => [
          labelingInfo.textLabel,
          labelingInfo.reliability,
        ]
      );

      setLabeledText(() => labeledTextList);
      setImageUrl(boundingBoxInfo.imageUrl);

      //canvas에 불러온다

      if (canvasRef.current !== null) {
        canvasRef.current.focus();
      }

      if (canvasRef.current) {
        canvasCtxRef.current = canvasRef.current.getContext("2d");
        const ctx = canvasCtxRef.current;
        const image = new Image();
        image.src = boundingBoxInfo.imageUrl;

        image.onload = function () {
          const canvasEle: any = canvasRef.current;

          canvasEle.width = image.width;
          canvasEle.height = image.height;

          const scale = Math.min(
            canvasEle.width / image.width,
            canvasEle.height / image.height
          );

          console.log(image.width, image.height);
          // get the top left position of the image
          const x = canvasEle.width / 2 - (image.width / 2) * scale;
          const y = canvasEle.height / 2 - (image.height / 2) * scale;
          ctx?.drawImage(
            image,
            x,
            y,
            image.width * scale,
            image.height * scale
          );

          const nameList = labelingResult.map((boundingBoxInfo, index) =>
            drawBoundingBox(boundingBoxInfo)
          );

          console.log(labelingResult);
        };
      }
    }
  }, [labelingResult]);

  const drawBoundingBox = (boundingBoxInfo: BoundingBoxInfo) => {
    const xArray = boundingBoxInfo.x;
    const yArray = boundingBoxInfo.y;

    //boundingboxId, 왼쪽 위, 윈쪽아래, 오른쪽위, 오른쪽아래
    const topPosition = Math.min(yArray[0], yArray[1]);
    const bottomPosition = Math.max(yArray[2], yArray[3]);
    const leftPosition = Math.min(xArray[0], xArray[3]);
    const rightPosition = Math.max(xArray[2], xArray[1]);

    const r2Info = {
      x: leftPosition,
      y: topPosition,
      w: rightPosition - leftPosition,
      h: bottomPosition - topPosition,
    };
    drawRect(r2Info);
  };

  const showLabeledText = (labelingText: string[]) => {};

  const getLabelingInfo = async (type: string) => {
    try {
      await api
        .get(
          `http://a138b0b67de234557afc8eaf29aa97b6-1258302528.ap-northeast-2.elb.amazonaws.com/api/labeled-result/v1/verification/results/OCR`,
          {
            headers: {
              "enterprise-id": "dusik",
            },
          }
        )
        .then((res) => {
          console.log(res.data.response);
          setLabelingResult(() => res.data.response.content);
          setLabelingResultJSON(() => res.data.response);
        });
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  // draw rectangle
  const drawRect = (info: any, style: any = {}) => {
    const { x, y, w, h } = info;
    console.log(info);
    const { borderColor = "red", borderWidth = 2 } = style;

    if (canvasRef.current) {
      canvasCtxRef.current = canvasRef.current.getContext("2d");
      const ctx: any = canvasCtxRef.current;

      ctx.beginPath();
      ctx.strokeStyle = borderColor;
      ctx.lineWidth = borderWidth;
      ctx.rect(x, y, w, h);
      ctx.stroke();
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

        <div className="w-full">
          <ProjectDescription projectId={projectId} />
        </div>

        <main className="mx-auto pt-14 pb-24 px-4 sm:pt-16 sm:pb-32 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="lg:grid lg:grid-rows-1 lg:grid-cols-7 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16">
            <div className="lg:row-end-1 lg:col-span-4">
              <div className="aspect-w-4 aspect-h-3 rounded-lg bg-gray-100 overflow-hidden flex items-center ">
                <div className="object-contain m-auto ">
                  <canvas ref={canvasRef} />
                </div>
              </div>
            </div>

            <div className="w-full mx-auto mt-14 sm:mt-16 lg:max-w-none lg:mt-0 lg:row-end-2 lg:row-span-2 lg:col-span-3 h-96">
              <div className="flex flex-col-reverse  ">
                <form action="#">
                  <div>
                    <div
                      className="flex items-center"
                      aria-orientation="horizontal"
                      role="tablist"
                    >
                      <button
                        id="tabs-1-tab-1"
                        className={`
                        ${
                          openTab === 1
                            ? "text-mainBlue font-bold"
                            : "text-gray-500 hover:text-gray-900 bg-white hover:bg-gray-100"
                        }  px-3 py-1.5 border border-transparent text-sm font-medium rounded-md`}
                        aria-controls="tabs-1-panel-1"
                        role="tab"
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          setOpenTab(1);
                        }}
                      >
                        텍스트
                      </button>

                      <button
                        id="tabs-1-tab-2"
                        className={`
                        ${
                          openTab === 2
                            ? "text-mainBlue font-bold"
                            : "text-gray-500 hover:text-gray-900 bg-white hover:bg-gray-100"
                        }  px-3 py-1.5 border border-transparent text-sm font-medium rounded-md`}
                        aria-controls="tabs-1-panel-2"
                        role="tab"
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          setOpenTab(2);
                        }}
                      >
                        Json
                      </button>
                    </div>
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
                              id="link1"
                            >
                              <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
                                {labeledText &&
                                  labeledText.map((labeledText: any, index) => (
                                    <li
                                      key={index}
                                      className="pl-3 pr-4 py-3 flex items-center justify-between text-sm"
                                    >
                                      <div className="w-0 flex-1 flex items-center">
                                        <span className="ml-2 flex-1 w-0 truncate">
                                          {labeledText[0]}
                                        </span>
                                      </div>
                                      <div className="ml-4 flex-shrink-0 font-medium text-mainBlue hover:text-indigo-500">
                                        {(labeledText[1] * 100).toFixed(1)}%
                                      </div>
                                    </li>
                                  ))}
                              </ul>
                            </div>

                            <div
                              className={
                                openTab === 2
                                  ? "overflow-auto h-72"
                                  : "hidden overflow-auto"
                              }
                              id="link2"
                            >
                              <ReactJson src={labelingResultJSON} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-2 flex justify-end">
                    <button
                      type="button"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-mainBlue hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Copy
                    </button>
                  </div>
                </form>
              </div>
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

const LabelingDetailPage = ({}) => {
  return (
    <>
      <NavBar />
      <MainTop>
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          진행 중인 라벨링
        </h2>
        <nav className="text-white flex" aria-label="Breadcrumb">
          <ol
            role="list"
            className="max-w-screen-xl w-full mx-auto px-4 py-4 flex space-x-4 sm:px-6 lg:px-8"
          >
            <li>
              <div>
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  <svg
                    className="flex-shrink-0 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="white"
                    aria-hidden="true"
                  >
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                  <span className="sr-only">Home</span>
                </a>
              </div>
            </li>

            <li>
              <div className="flex items-center">
                <svg
                  className="flex-shrink-0 h-5 w-5 text-gray-300"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                </svg>
                <a
                  href="#"
                  className="ml-4 text-sm font-medium text-white hover:text-gray-700"
                >
                  Projects
                </a>
              </div>
            </li>

            <li>
              <div className="flex items-center">
                <svg
                  className="flex-shrink-0 h-5 w-5 text-gray-300"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                </svg>
                <a
                  href="#"
                  className="ml-4 text-sm font-medium text-white hover:text-gray-700"
                  aria-current="page"
                >
                  손글씨 OCR 라벨링
                </a>
              </div>
            </li>
          </ol>
        </nav>
      </MainTop>

      <LabelingDetailPageBody />
    </>
  );
};

export default LabelingDetailPage;
