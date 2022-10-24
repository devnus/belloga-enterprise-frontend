import React, { useRef, useState } from "react";
import DragDrop from "../components/DragDrop";
import MainTop from "../components/MainTop";
import { createLabeling, IFileTypes } from "apis/createLabelingApis";

function CreateLabelingRequestPage() {
  const radioRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];
  const [projectTitle, setProjectTitle] = useState<string>("");
  const [projectDescription, setProjectDescription] = useState<string>("");
  const [files, setFiles] = useState<IFileTypes[]>([]);

  const onSubmit = () => {
    //아래에 있는 선택지 중에 선택한 값을 가져와 dataType 객체에 집어넣음
    const dataType = radioRefs
      .map(({ current }) => current)
      .find((current) => current?.checked)?.value;

    try {
      createLabeling(dataType, projectTitle, projectDescription, files);
    } catch (error) {
      console.log(error);
    }
  };

  const onChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const {
      target: { name, value },
    } = event;
    if (name === "projectTitle") {
      setProjectTitle(value);
    } else if (name === "projectDescription") {
      setProjectDescription(value);
    }
  };

  return (
    <>
      <body className="z-0">
        <MainTop>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            라벨링 신청
          </h2>
          <p className="mt-3 text-xl text-white">라벨링을 신청해보세요</p>
        </MainTop>

        <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <form className="space-y-8 divide-y divide-gray-200">
            <div className="space-y-8 divide-y divide-gray-200">
              <div>
                <div>
                  <h3 className="text-lg font-medium leading-6 text-gray-900">
                    라벨링 신청
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    의뢰하고자 하는 라벨링 정보를 작성해 주세요.
                  </p>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                  <div className="sm:col-span-6">
                    <label
                      htmlFor="projectTitle"
                      className="block text-base font-medium text-gray-700"
                    >
                      라벨링 제목
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <input
                        type="text"
                        name="projectTitle"
                        id="projectTitle"
                        autoComplete="username"
                        placeholder="예시) 자율주행 자동차 인식 모델을 위한 표지판 OCR"
                        value={projectTitle}
                        onChange={onChange}
                        className="block w-full min-w-0 flex-1 py-2 px-2 border rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-6">
                    <label
                      htmlFor="projectDescription"
                      className="block text-base font-medium text-gray-700"
                    >
                      라벨링 설명
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="projectDescription"
                        name="projectDescription"
                        rows={3}
                        placeholder="예시) 제시한 사진 속 표지판의 글자를 라벨링 요청합니다."
                        className="p-2 block w-full rounded-md border-gray-300 border shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        value={projectDescription}
                        onChange={onChange}
                      />
                    </div>
                    <p className="mt-2 text-sm text-gray-500">
                      의뢰하고자 하는 라벨링에 대한 설명을 적어주세요
                    </p>
                  </div>

                  <div className="sm:col-span-6">
                    <label
                      htmlFor="cover-photo"
                      className="block text-base font-medium text-gray-700"
                    >
                      파일 업로드
                    </label>
                    <DragDrop files={files} setFiles={setFiles} />
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <div>
                  <h3 className="text-lg font-medium leading-6 text-gray-900">
                    라벨링 종류
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    의뢰하고자 하는 라벨링의 종류를 선택해주세요
                  </p>
                </div>
                <div className="mt-6">
                  <fieldset className="mt-6">
                    <div className="mt-4 space-y-4">
                      <div className="flex items-center">
                        <input
                          id="push-everything"
                          name="push-notifications"
                          type="radio"
                          value="Text Annotation"
                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          ref={radioRefs[0]}
                          defaultChecked
                        />
                        <label
                          htmlFor="push-everything"
                          className="ml-3 block text-sm font-medium text-gray-700"
                        >
                          Text Annotation
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="push-email"
                          name="push-notifications"
                          type="radio"
                          value="OCR"
                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          ref={radioRefs[1]}
                        />
                        <label
                          htmlFor="push-email"
                          className="ml-3 block text-sm font-medium text-gray-700"
                        >
                          OCR
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="push-nothing"
                          name="push-notifications"
                          type="radio"
                          value="Voice Classify"
                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          ref={radioRefs[2]}
                        />
                        <label
                          htmlFor="push-nothing"
                          className="ml-3 block text-sm font-medium text-gray-700"
                        >
                          Voice Classify
                        </label>
                      </div>
                    </div>
                  </fieldset>
                </div>
              </div>
            </div>

            <div className="pt-5">
              <div className="flex justify-center">
                {projectTitle && projectDescription && files[0] ? (
                  <button
                    onClick={onSubmit}
                    type="button"
                    className="w-80 mt-10 mb-5 bg-gradient-to-r from-blue-400 to-sky-300 flex justify-center py-4 px-8 border border-transparent rounded-2xl shadow-sm text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    라벨링 신청
                  </button>
                ) : (
                  <button
                    type="button"
                    className="w-80 mt-10 mb-5 bg-gray-400 flex justify-center py-4 px-4 border border-transparent rounded-2xl shadow-sm text-lg font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 rounded cursor-not-allowed focus:outline-none disabled:opacity-75"
                    disabled
                  >
                    빈칸을 모두 입력해주세요
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>
      </body>
    </>
  );
}

export default CreateLabelingRequestPage;
