import React, { useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import Aos from "aos";

const Carrousel = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="w-full relative -mt-[170px] z-40">
      <div className="w-full max-w-5xl mx-auto lg:px-0 px-4 pb-[80px]">
        <Swiper
          effect={"coverflow"}
          initialSlide={1}
          loop={true}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 50,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="swiper-portada "
        >
          <SwiperSlide className="shadow-lg border-[10px] border-white">
            <img
              className="w-full h-full object-cover"
              src="./resources/gallery/3.avif"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="shadow-lg border-[10px] border-white">
            <img
              className="w-full h-full object-cover"
              src="./resources/gallery/4.avif"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="shadow-lg border-[10px] border-white">
            <img
              className="w-full h-full object-cover"
              src="./resources/gallery/5.avif"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="shadow-lg border-[10px] border-white">
            <img
              className="w-full h-full object-cover"
              src="./resources/gallery/1.avif"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="shadow-lg border-[10px] border-white">
            <img
              className="w-full h-full object-cover"
              src="./resources/gallery/2.avif"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="shadow-lg border-[10px] border-white">
            <img
              className="w-full h-full object-cover"
              src="./resources/gallery/6.avif"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="shadow-lg border-[10px] border-white">
            <img
              className="w-full h-full object-cover"
              src="./resources/gallery/7.avif"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Carrousel;
