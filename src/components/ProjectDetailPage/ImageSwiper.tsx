import React from "react";

import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { BoundingBoxInfo } from "modules/drawBoundingBox";

type swiperProps = {
  imgData: BoundingBoxInfo[];
  focusIndex: number;
  setFocusIndex: React.Dispatch<React.SetStateAction<number>>;
};

function ImageSwiper({ focusIndex, imgData, setFocusIndex }: swiperProps) {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={4}
      navigation
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {imgData.map((imgData: BoundingBoxInfo, index) => {
        const imgName = imgData.imageUrl.split("/").slice(-1)[0];
        const props = {
          fileName: imgName,
          imgUrl: imgData.imageUrl,
        };

        // 현재 사용자가 클릭한 인덱스에 따라서 다르게 컴포넌트 모양을 변경
        if (index === focusIndex) {
          return (
            <SwiperSlide key={index}>
              <FocusSwiperInnerCard {...props} />
            </SwiperSlide>
          );
        } else {
          return (
            <SwiperSlide
              key={index}
              onClick={() => {
                setFocusIndex(() => index);
              }}
            >
              <SwiperInnerCard {...props} />
            </SwiperSlide>
          );
        }
      })}
    </Swiper>
  );
}

type swiperCardProps = {
  fileName: string;
  imgUrl: string;
};

function SwiperInnerCard({ fileName, imgUrl }: swiperCardProps) {
  return (
    <div className="relative group h-40 overflow-hidden bg-black m-auto">
      <img
        className="object-cover w-full h-full backdrop-opacity-100"
        src={imgUrl}
        alt="labeling original"
      />

      <div className="absolute bg-gradient-to-t from-black w-full h-full inset-y-1/2 ">
        <div className="absolute w-full flex place-content-left mt-10 pl-4">
          <p className="text-center text-white">{fileName}</p>
        </div>
      </div>
    </div>
  );
}

function FocusSwiperInnerCard({ fileName, imgUrl }: swiperCardProps) {
  return (
    <div className="relative h-40 overflow-hidden m-auto border-4 border-mainBlue rounded-md">
      <img
        className="object-cover w-full h-full backdrop-opacity-100"
        src={imgUrl}
        alt="labeling original"
      />

      <div className="absolute bg-gradient-to-t from-black w-full h-full inset-y-1/2 ">
        <div className="absolute w-full flex place-content-left mt-10 pl-4">
          <p className="text-center text-white">{fileName}</p>
        </div>
      </div>
    </div>
  );
}

export default ImageSwiper;
