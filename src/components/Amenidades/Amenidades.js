import React from "react";

const Amenidades = () => {
  return (
    <div id="amenidades">
      <div className="w-full relative bg-gray-100">
        <img
          className="absolute top-0 right-0 w-[300px] object-cover -translate-y-[50%]"
          src="./resources/guacamayo.png"
          alt=""
        />
        {/* <img
          className="absolute bottom-0 left-0 w-[150px] lg:w-[300px] object-cover"
          src="./resources/backmonkey.png"
          alt=""
        /> */}
        <div className="z-20 relative h-full">
          <div className="overflow-hidden px-[20px] w-full flex flex-col items-center justify-center py-[100px]">
            <img
              data-aos="fade-up"
              src="./titlesection.png"
              alt=""
              className="w-[80px]"
            />
            <h1
              data-aos="fade-left"
              className="text-2xl lg:text-4xl mt-3 text-center max-w-[600px] mx-auto text-[#383d44]"
            >
              {/* Resumen del proyecto */}
              ¿Por qué SUMAK es la<b> mejor decisión</b>?
            </h1>
            <div
              data-aos="fade-right"
              className="h-[2px] w-[100px] bg-[#275928] my-4"
            ></div>
            <p
              data-aos="zoom-in"
              className="text-lg lg:text-xl text-center max-w-[800px] mx-auto text-gray-600"
            >
              <b>35 hectáreas frente al Rio Mayo</b>, llenas de flora y fauna
              excepcional que crean un <b>ecosistema increible de admirar</b> y
              ser parte.
            </p>
            <div className="my-8 max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-5">
              <div
                className="flex flex-col items-center gap-2"
                data-aos="zoom-in"
              >
                <img
                  loading="lazy"
                  className="w-[75px]"
                  src="./resources/icons/amenidades/hora.png"
                  alt=""
                />
                <p
                  className="text-gray-500 text-center text-lg"
                  data-aos="zoom-in"
                >
                  <b className="bold-color-qh"> A 30 min de </b> Tarapoto
                </p>
              </div>
              <div
                className="flex flex-col items-center gap-2"
                data-aos="zoom-in"
              >
                <img
                  loading="lazy"
                  className="w-[75px]"
                  src="./resources/icons/amenidades/terreno.png"
                  alt=""
                />
                <p
                  className="text-gray-500 text-center text-lg"
                  data-aos="zoom-in"
                >
                  Terrenos aprox.{" "}
                  <b className="bold-color-qh">500m2 a 1,000m2</b>
                </p>
              </div>
              <div
                className="flex flex-col items-center gap-2"
                data-aos="zoom-in"
              >
                <img
                  loading="lazy"
                  className="w-[75px]"
                  src="./resources/icons/amenidades/predios.png"
                  alt=""
                />
                <p
                  className="text-gray-500 text-center text-lg"
                  data-aos="zoom-in"
                >
                  35 hectáreas{" "}
                  <b className="bold-color-qh">Predios registrados en RRPP</b>
                </p>
              </div>
              <div
                className="flex flex-col items-center gap-2"
                data-aos="zoom-in"
              >
                <img
                  loading="lazy"
                  className="w-[75px]"
                  src="./resources/icons/amenidades/ecosostenible.png"
                  alt=""
                />
                <p
                  className="text-gray-500 text-center text-lg"
                  data-aos="zoom-in"
                >
                  Desarrollo <b className="bold-color-qh">ecosostenible</b>
                </p>
              </div>
              <div
                className="flex flex-col items-center gap-2"
                data-aos="zoom-in"
              >
                <img
                  loading="lazy"
                  className="w-[75px]"
                  src="./resources/icons/amenidades/antena.png"
                  alt=""
                />
                <p
                  className="text-gray-500 text-center text-lg"
                  data-aos="zoom-in"
                >
                  Buena <b className="bold-color-qh">señal</b>
                </p>
              </div>
              <div
                className="flex flex-col items-center gap-2"
                data-aos="zoom-in"
              >
                <img
                  loading="lazy"
                  className="w-[75px]"
                  src="./resources/icons/amenidades/luz.png"
                  alt=""
                />
                <p
                  className="text-gray-500 text-center text-lg"
                  data-aos="zoom-in"
                >
                  Acceso de servicios de{" "}
                  <b className="bold-color-qh">agua y luz</b>
                </p>
              </div>
              <div
                className="flex flex-col items-center gap-2"
                data-aos="zoom-in"
              >
                <img
                  loading="lazy"
                  className="w-[75px]"
                  src="./resources/icons/amenidades/cerco.png"
                  alt=""
                />
                <p
                  className="text-gray-500 text-center text-lg"
                  data-aos="zoom-in"
                >
                  Cerco vivo con{" "}
                  <b className="bold-color-qh">pórtico de ingreso</b>
                </p>
              </div>
              <div
                className="flex flex-col items-center gap-2"
                data-aos="zoom-in"
              >
                <img
                  loading="lazy"
                  className="w-[75px]"
                  src="./resources/icons/amenidades/007-patinete.png"
                  alt=""
                />
                <p
                  className="text-gray-500 text-center text-lg"
                  data-aos="zoom-in"
                >
                  Espacios <b className="bold-color-qh">recreativos</b>
                </p>
              </div>
            </div>
            <a
              target="_blank"
              href="https://greenselvaperu.com/brochure.pdf"
              className="rounded bg-[#27591a] flex items-center gap-3 text-white py-3 px-4 shadow-xl shadow-[#27591a42] "
            >
              Ver ficha técnica
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Amenidades;
