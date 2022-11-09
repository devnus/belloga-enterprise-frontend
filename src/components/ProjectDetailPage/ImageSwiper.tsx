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
};

function ImageSwiper({ focusIndex, imgData }: swiperProps) {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {imgData.map((imgData: BoundingBoxInfo, index) => {
        // 현재 사용자가 클릭한 인덱스에 따라서 다르게 컴포넌트 모양을 변경
        if (index === focusIndex) {
          return (
            <SwiperSlide key={index}>
              <FocusSwiperInnerCard />
            </SwiperSlide>
          );
        } else {
          return (
            <SwiperSlide key={index}>
              <SwiperInnerCard />
            </SwiperSlide>
          );
        }
      })}
    </Swiper>
  );
}

function SwiperInnerCard() {
  return <div className="h-40">일반</div>;
}

function FocusSwiperInnerCard() {
  return <div className="h-40">집중</div>;
}

export default ImageSwiper;
