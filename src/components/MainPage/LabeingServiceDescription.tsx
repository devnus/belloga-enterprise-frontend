import React from "react";

import ocrImg from "assets/images/ocr_img.png";

const contents = [
  {
    name: "OCR",
    engName: "Data Request",
    description:
      "OCR은 광학 문자 인식의 줄임말로, 사진 속 텍스트를 기계가 읽을 수 있게 변환하는 과정입니다.",
    imageSrc: ocrImg,
  },
];

function LabelingServiceDescription() {
  return (
    <>
      {contents.map((content, index) => (
        <div
          key={index}
          className="relative mx-auto max-w-7xl py-4 px-4 sm:px-6 lg:px-8 bg-white my-12 rounded-xl"
        >
          <div className="mt-8 lg:grid lg:grid-cols-3 lg:gap-8">
            <div className="relative lg:col-start-2 lg:row-start-1 col-span-2">
              <div className="relative mx-auto max-w-prose text-base lg:max-w-none">
                <figure>
                  <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                    <img
                      src={ocrImg}
                      alt=""
                      className="object-cover object-center border border-slate-400"
                    />
                  </div>
                </figure>
              </div>
            </div>
            <div className="mt-8 lg:mt-0 flex">
              <div className="pb-10 content-center my-auto">
                <div className="mx-auto max-w-prose text-base lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-8">
                  <h3 className="mt-2 mb-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                    {content.name}
                  </h3>
                </div>
                <div className="mx-auto max-w-prose text-base lg:max-w-none mt-5">
                  <p className="text-lg text-gray-500">{content.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default LabelingServiceDescription;
