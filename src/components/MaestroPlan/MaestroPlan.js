import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
const MaestroPLan = () => {
  return (
    <div className="w-full py-[100px] relative">
      <img
        className="absolute bottom-0 right-0 w-[150px] lg:w-[300px] object-cover"
        src="./resources/monoardilla.png"
        alt=""
      />
      <div className="w-full max-w-5xl mx-auto px-4 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="w-full">
            {/* <img
              className="w-full h-full object-cover"
              src="./resources/publicidad2.png"
              alt=""
            /> */}
            <Swiper
              //   initialSlide={1}
              loop={true}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView="auto"
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 0,
                },
                640: {
                  slidesPerView: 1,
                  spaceBetween: 0,
                },
                768: {
                  slidesPerView: 1,
                  spaceBetween: 0,
                },
                1024: {
                  slidesPerView: 1,
                  spaceBetween: 0,
                },
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination, Autoplay]}
              className="swiper-master"
            >
              <SwiperSlide className="shadow-lg ">
                <img
                  className="w-full h-[500px] object-cover"
                  src="./resources/masterplan.png"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide className="shadow-lg ">
                <img
                  className="w-full h-[500px] object-cover"
                  src="./resources/masterplan1.png"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide className="shadow-lg ">
                <img
                  className="w-full h-[500px] object-cover"
                  src="./resources/masterplan3.jpeg"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide className="shadow-lg ">
                <img
                  className="w-full h-[500px] object-cover"
                  src="./resources/masterplan2.jpeg"
                  alt=""
                />
              </SwiperSlide>
            </Swiper>
            <div className="w-full flex items-start justify-start my-8">
              <a
                href="#contacto"
                className="rounded-sm py-3 px-4 text-[16px] text-white font-bold bg-[#27591a]"
              >
                Quiero más información
              </a>
            </div>
          </div>
          <div className="w-full">
            <div className="py-[15px] bg-gray-600 overflow-hidden w-full flex flex-col items-center">
              <h1
                data-aos="fade-left"
                className="text-2xl lg:text-3xl mt-3 text-center max-w-[600px] mx-auto text-[#fff]"
              >
                <b>Plan Maestro</b>
              </h1>
              {/* <p
            data-aos="zoom-in"
            className="text-xl text-center max-w-[800px] mx-auto text-gray-600"
          >
            HC3Q+F43, Lamas 22150
          </p> */}
              <div
                data-aos="fade-right"
                className="h-[2px] w-[100px] bg-[#4CAF50] my-4"
              ></div>
            </div>
            <ul className="w-full flex flex-col gap-4 p-[20px]">
              <li className="w-full flex gap-3 items-center">
                <div className="w-[40px] h-[40px] text-sm rounded-full flex items-center justify-center p-3 bg-gray-600 text-white">
                  1
                </div>
                <p className="text-gray-600">INGRESO A SUMAK Nature</p>
              </li>
              <li className="w-full flex gap-3 items-center">
                <div className="w-[40px] h-[40px] text-sm rounded-full flex items-center justify-center p-3 bg-gray-600 text-white">
                  2
                </div>
                <p className="text-gray-600">MIRADOR PRINCIPAL</p>
              </li>
              <li className="w-full flex gap-3 items-center">
                <div className="w-[40px] h-[40px] text-sm rounded-full flex items-center justify-center p-3 bg-gray-600 text-white">
                  3
                </div>
                <p className="text-gray-600">CLUB HOUSE Y PISCINA</p>
              </li>
              <li className="w-full flex gap-3 items-center">
                <div className="w-[40px] h-[40px] text-sm rounded-full flex items-center justify-center p-3 bg-gray-600 text-white">
                  4
                </div>
                <p className="text-gray-600">INICIO CAMINO DE TRECKING</p>
              </li>
              <li className="w-full flex gap-3 items-center">
                <div className="w-[40px] h-[40px] text-sm rounded-full flex items-center justify-center p-3 bg-gray-600 text-white">
                  5
                </div>
                <p className="text-gray-600">PARQUE CENTRAL</p>
              </li>
              <li className="w-full flex gap-3 items-center">
                <div className="w-[40px] h-[40px] text-sm rounded-full flex items-center justify-center p-3 bg-gray-600 text-white">
                  6
                </div>
                <p className="text-gray-600">ZONA DE MEDITACIÓN</p>
              </li>
              <li className="w-full flex gap-3 items-center">
                <div className="w-[40px] h-[40px] text-sm rounded-full flex items-center justify-center p-3 bg-gray-600 text-white">
                  7
                </div>
                <p className="text-gray-600">MIRADOR OESTE</p>
              </li>
              <li className="w-full flex gap-3 items-center">
                <div className="w-[40px] h-[40px] text-sm rounded-full flex items-center justify-center p-3 bg-gray-600 text-white">
                  8
                </div>
                <p className="text-gray-600">ZONA DE PESCA</p>
              </li>
              <li className="w-full flex gap-3 items-center">
                <div className="w-[40px] h-[40px] text-sm rounded-full flex items-center justify-center p-3 bg-gray-600 text-white">
                  9
                </div>
                <p className="text-gray-600">ZONA DE PROTECCIÓN FORESTAL</p>
              </li>
              <li className="w-full flex gap-3 items-center">
                <div className="w-[40px] h-[40px] text-sm rounded-full flex items-center justify-center p-3 bg-gray-600 text-white">
                  10
                </div>
                <p className="text-gray-600">CANCHA DEPORTIVA</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaestroPLan;
