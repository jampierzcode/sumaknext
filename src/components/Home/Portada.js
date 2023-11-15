import React from "react";
const Portada = () => {
  return (
    <div>
      <div className="h-[80vh] w-full relative">
        <div className="z-10 relative h-full">
          <img
            className="w-full h-full object-cover object-center"
            src="./resources/portada.png"
            alt=""
          />
        </div>

        <div className="absolute px-[20px] h-full top-0 left-0 right-0 bottom-0 z-30 flex flex-col justify-center py-[150px]">
          <h1
            data-aos="zoom-in"
            className="text-4xl font-medium text-center max-w-[600px] mx-auto mb-4 text-white"
          >
            VIVE <b>EN ARMONÍA</b> CON LA <b>NATURALEZA</b>
          </h1>
          <p
            data-aos="fade-up"
            className="text-xl text-center max-w-[400px] mx-auto text-white"
          >
            Sumak, donde encontrarás paz, belleza y abundancia
          </p>
        </div>
        <div className="bg-[#27591a] opacity-80 absolute top-0 left-0 right-0 bottom-0 z-20"></div>
      </div>
    </div>
  );
};

export default Portada;
