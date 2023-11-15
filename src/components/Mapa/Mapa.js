import React from "react";

const Mapa = () => {
  return (
    <div className="w-full py-[100px] bg-gray-100">
      <div className="w-full max-w-5xl mx-auto px-4 lg:px-0">
        <div className="overflow-hidden w-full flex flex-col items-center">
          <img
            data-aos="zoom-in"
            src="./titlesection.png"
            alt=""
            className="w-[80px]"
          />
          <h1
            data-aos="fade-left"
            className="text-4xl mt-3 text-center max-w-[600px] mx-auto text-[#383d44]"
          >
            <b>Ubícanos</b> en
          </h1>
          <p
            data-aos="zoom-in"
            className="text-xl text-center max-w-[800px] mx-auto text-gray-600"
          >
            HC3Q+F43, Lamas 22150
          </p>
          <div
            data-aos="fade-right"
            className="h-[2px] w-[100px] bg-[#275928] my-4"
          ></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="w-full">
            <img
              className="w-full h-full object-cover"
              src="./resources/lotizacion.png"
              alt=""
            />
          </div>
          <div className="bg-[#27591a] flex flex-col gap-4 p-4">
            <img
              className="w-full object-cover"
              src="./resources/gallery/ubicacion.png"
              alt=""
            />
            <p className="text-white">Ver ubicación en</p>
            <a
              href="https://maps.app.goo.gl/ep83GYnpy9355U5u5"
              className="inline-flex w-[max-content] items-center justify-center px-3 py-2 rounded-sm bg-black text-white"
            >
              Google Maps
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mapa;
