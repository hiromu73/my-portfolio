"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Protfoliolist } from "./Protfoliolist";

const PortfolioSwiper = () => {
  return (
    <>
      <Swiper cssMode={true} navigation={true} pagination={true} mousewheel={true} keyboard={true} modules={[Navigation, Pagination, Mousewheel, Keyboard]} className="mySwiper">
        <SwiperSlide>
          <div className=" h-full w-full rounded-xl">
            <div className="flex items-center space-x-4 p-4 gap-10 text-center justify-center">
              <Protfoliolist src={"/my_profile.jpg"} title={"AIとディベート対決"} stack={["Typescript・Next.js(React)", "Python(FastAPI)", "Dify"]} />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" h-full w-full rounded-xl">
            <div className="flex items-center space-x-4 p-4 gap-10 text-center justify-center">
              <Protfoliolist src={"/my_profile.jpg"} title={"AIとディベート対決"} stack={["Typescript・Next.js(React)", "Python(FastAPI)", "Dify"]} />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" h-full w-full rounded-xl">
            <div className="flex items-center space-x-4 p-4 gap-10 text-center justify-center">
              <Protfoliolist src={"/my_profile.jpg"} title={"AIとディベート対決"} stack={["Typescript・Next.js(React)", "Python(FastAPI)", "Dify"]} />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" h-full w-full rounded-xl">
            <div className="flex items-center space-x-4 p-4 gap-10 text-center justify-center">
              <Protfoliolist src={"/my_profile.jpg"} title={"AIとディベート対決"} stack={["Typescript・Next.js(React)", "Python(FastAPI)"]} />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default PortfolioSwiper;
