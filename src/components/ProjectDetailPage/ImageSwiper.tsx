import React from "react";

import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

function ImageSwiper({ focusIndex }: any) {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <SwiperInnerCard />
      </SwiperSlide>
      <SwiperSlide>
        <SwiperInnerCard />
      </SwiperSlide>
      <SwiperSlide>
        <SwiperInnerCard />
      </SwiperSlide>
      <SwiperSlide>
        <SwiperInnerCard />
      </SwiperSlide>
    </Swiper>
  );
}

function SwiperInnerCard() {
  return <div className="h-40">ddd</div>;
}

export default ImageSwiper;
