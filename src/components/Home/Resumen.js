import Aos from "aos";
import React, { useEffect } from "react";
import ReactPlayer from "react-player";

const Resumen = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div
      id="resumen"
      className="w-full relative px-[20px]"
      // style={{
      //   backgroundImage: "url('./resources/backmonkey.png')",
      //   backgroundPosition: "bottom left",
      //   backgroundRepeat: "no-repeat",
      //   backgroundSize: "400px",
      // }}
    >
      <img
        className="hidden lg:flex absolute top-0 lg:top-[50%] left-0 w-[150px] lg:w-[300px] object-cover lg:-translate-y-[50%]"
        src="./resources/monito2.png"
        alt=""
      />
      <div className="z-20 relative h-full">
        <div className="overflow-hidden px-[20px] w-full flex flex-col items-center justify-center pb-[150px]">
          <img
            data-aos="zoom-in"
            src="./titlesection.png"
            alt=""
            className="w-[80px]"
          />
          <h1
            data-aos="fade-left"
            className="text-2xl lg:text-4xl mt-3 text-center max-w-[600px] mx-auto text-[#383d44]"
          >
            {/* Resumen del proyecto */}
            <b> Resumen</b> del proyecto
          </h1>
          <div
            data-aos="fade-right"
            className="h-[2px] w-[100px] bg-[#275928] my-4"
          ></div>
          <p
            data-aos="zoom-in"
            className="text-lg lg:text-xl text-center max-w-[800px] mx-auto text-gray-600"
          >
            SUMAK Nature es un <b>condominio</b> de casas de campo
            ecosostenibles ubicado en la <b>Amazonía peruana</b>. Es un proyecto
            que permite conectar con la esencia divina y la fuente de toda
            creación. Disfrutar de la{" "}
            <b>belleza y armonía de la naturaleza, cuidarla y respetarla</b>,
            contribuyendo al bienestar y abundancia de los demás.
          </p>
          <div className="my-10 w-full">
            <iframe
              className="w-full max-w-[560px] mx-auto h-[315px]"
              data-aos="fade-down-left"
              // width="560"
              // height="315"
              src="https://www.youtube.com/embed/CYR5rZmNXIU?si=Mt-Nthh5WnKKYrtq"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <a
            href="#contacto"
            data-aos="fade-up"
            className="rounded bg-[#27591a] flex items-center gap-3 text-white py-3 px-4 shadow-xl shadow-[#27591a42] "
          >
            <img src="./iconsection.png" alt="" className="w-[40px]" />
            Quiero conocer Sumak
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resumen;
