import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import DragDrop from "../components/DragDrop";
import NavBar from "../components/NavBar";

interface IFileTypes {
  id: number;
  object: File;
}

function CreateLabelingRequestPage() {
  const [files, setFiles] = useState<IFileTypes[]>([]);

  const onSubmit = () => {
    try {
      createLabeling();
    } catch (error) {
      console.log(error);
    }
  };

  async function createLabeling() {
    try {
      const { data } = await axios.post("/api/project/v1/project");

      console.log(data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log("error message: ", error.message);
        return error.message;
      } else {
        console.log("unexpected error: ", error);
        return "An unexpected error occurred";
      }
    }
  }

  return (
    <>
      {/*
            This example requires updating your template:
    
            ```
            <html class="h-full bg-gray-50">
            <body class="h-full">
            ```
          */}
      <NavBar />

      <body className="z-0">
        <div className="relative bg-gray-800 py-32 px-6 sm:py-40 sm:px-12 lg:px-16 ">
          <div className="absolute inset-0 overflow-hidden">
            <img
              src="https://media.istockphoto.com/videos/abstract-particle-background-loop-video-id1173777188?s=640x640"
              alt=""
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gray-900 bg-opacity-50"
          />
          <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              라벨링 신청
            </h2>
            <p className="mt-3 text-xl text-white">라벨링을 신청해보세요</p>
          </div>
        </div>
        <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
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
                  <div className="sm:col-span-4">
                    <label
                      htmlFor="username"
                      className="block text-sm font-medium text-gray-700"
                    >
                      라벨링 제목
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <input
                        type="text"
                        name="username"
                        id="username"
                        autoComplete="username"
                        className="block w-full min-w-0 flex-1 py-2 border rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-6">
                    <label
                      htmlFor="about"
                      className="block text-sm font-medium text-gray-700"
                    >
                      라벨링 설명
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="about"
                        name="about"
                        rows={3}
                        className="block w-full rounded-md border-gray-300 border shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        defaultValue={""}
                      />
                    </div>
                    <p className="mt-2 text-sm text-gray-500">
                      의뢰하고자 하는 라벨링에 대한 설명을 적어주세요
                    </p>
                  </div>

                  <div className="sm:col-span-6">
                    <label
                      htmlFor="cover-photo"
                      className="block text-sm font-medium text-gray-700"
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
                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
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
                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
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
                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
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
              <div className="flex justify-end">
                <button
                  onClick={onSubmit}
                  className=" mt-10 mb-5 bg-gradient-to-r from-blue-400 to-sky-300 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Sign in
                </button>
              </div>
            </div>
          </form>
        </div>
      </body>
    </>
  );
}

export default CreateLabelingRequestPage;
