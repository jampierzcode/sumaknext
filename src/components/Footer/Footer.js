import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="bg-[#0a3c0e] py-8">
        <div className="max-w-5xl mb-6 mx-auto gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="w-full px-6 lg:px-0">
            <img
              className="mb-10 w-[150px]"
              src="./logosumakwhite.png"
              alt=""
            />
            <h3 className="text-sm text-white">
              Conectar con la esencia divina y con la Fuente de toda la
              creación. Disfrutar de la belleza de la naturaleza, cuidarla y
              respetarla. Contribuir con el bienestar de los demás.
            </h3>
            <div className="w-full mt-6">
              <h2 className="text-sm text-white">Un Proyecto de:</h2>
              <h1 className="text-xl text-[#E8AF2D]">Green Selva Perú SAC</h1>
            </div>
          </div>
          <div className="w-full px-6">
            <h2 className="text-lg text-white mb-4">Explora</h2>
            <ul className="menu-footer">
              <li>
                <Link className="text-white" href="/">
                  Inicio
                </Link>
              </li>
              <li>
                <Link className="text-white" href="#resumen">
                  Sobre Sumak
                </Link>
              </li>

              <li>
                <Link className="text-white" href="#contacto">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full px-6 text-white">
            <h2 className="title-info mb-4">Escríbenos al:</h2>
            <h3 className="info-contact">+51 943555876</h3>
            <h3 className="info-contact">sumak@greenselva.com</h3>
            <h2 className="title-info my-4">Dirección:</h2>
            <h3 className="info-contact">
              Jr. Manco Cápac 529 – Dpto. 201 Morales/Tarapoto - San Martín –
              Perú
            </h3>
            <div className="redes-social">
              <Link
                target="_blank"
                href="https://www.facebook.com/SumakNature"
                className="box-social"
              >
                <ion-icon name="logo-facebook"></ion-icon>
              </Link>
              <Link
                target="_blank"
                href="https://api.whatsapp.com/send/?phone=51943555876&text&type=phone_number&app_absent=0"
                className="box-social"
              >
                <ion-icon name="logo-whatsapp"></ion-icon>
              </Link>
              <Link
                target="_blank"
                href="https://www.instagram.com/sumaknature"
                className="box-social"
              >
                <ion-icon name="logo-instagram"></ion-icon>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full p-4 lg:px-0 col-lg-12">
          <p className="mb-0 text-center w-full text-white">
            2023 Sumak Living in Nature| Todos los derechos reservados
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
