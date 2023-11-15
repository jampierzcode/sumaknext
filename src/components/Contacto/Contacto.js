import { message } from "antd";
import axios from "axios";
import React, { useState } from "react";

const Contacto = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  // const [message, setMessage] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [responseSend, setResponseSend] = useState("");
  const sendmensaje = () => {
    // const url = "https://dev.greenselvaperu.com/apisumakemail/sendemail.php";
    const url =
      "https://greenselvaperu.com/proyectos/sumak-nature/apisumakemail/sendemail.php";
    console.log(name, email, message, telefono);
    axios
      .post(url, {
        user_name: name,
        user_email: email,
        user_telefono: telefono,
        message: mensaje,
      })
      .then(function (response) {
        setResponseSend(response.data);
        message.success("El mensaje ha sido enviado correctamente");
        setTimeout(() => {
          setResponseSend("");
          setName("");
          setEmail("");
          setMensaje("");
          setTelefono("");
        }, 4000);
        console.log(response);
      })
      .catch(function (error) {
        message.error("Hubo un problema intentarlo mas tarde");
        setResponseSend(error.data);
        setTimeout(() => {
          setResponseSend("");
          setName("");
          setEmail("");
          setMensaje("");
          setTelefono("");
        }, 4000);
        console.log(error);
      });
  };
  return (
    <div id="contacto" className="w-full relative py-[40px] px-[20px]">
      <img
        className="absolute bottom-0 left-0 w-[150px] lg:w-[300px] object-cover"
        src="./resources/hoatzin.png"
        alt=""
      />
      <div className="max-w-5xl mx-auto">
        <div className="overflow-hidden w-full flex flex-col items-center justify-center py-[20px]">
          <img
            data-aos="zoom-in"
            src="./titlesection.png"
            alt=""
            className="w-[80px]"
          />
          <h1
            data-aos="fade-left"
            className="text-4xl mt-3 font-medium text-center max-w-[600px] mx-auto text-[#383d44]"
          >
            Ponte en contacto
            <b>
              {" "}
              <br /> con nosotros
            </b>
          </h1>
          <div
            data-aos="fade-right"
            className="h-[2px] w-[100px] bg-[#275928] my-4"
          ></div>

          <div id="form-contact" className="w-full lg:max-w-[800px] mx-auto ">
            <div className="flex items-center flex-col gap-4">
              <div className="w-full gap-4 grid grid-cols-2 ">
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  id="user_name"
                  name="name"
                  placeholder="Nombres y Apellidos"
                  type="text"
                  className="p-4 rounded-lg border border-gray-500"
                />
                <input
                  value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
                  id="message"
                  name="message"
                  placeholder="Mensaje"
                  type="text"
                  className="p-4 rounded-lg border border-gray-500"
                />
              </div>
              <div className="w-full grid gap-4 grid-cols-2 ">
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="user_email"
                  name="email"
                  placeholder="Correo"
                  type="email"
                  className="p-4 rounded-lg border border-gray-500"
                />
                <input
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                  id="user_telefono"
                  name="telefono"
                  placeholder="Teléfono"
                  type="text"
                  className="p-4 rounded-lg border border-gray-500"
                />
              </div>
            </div>
            <div className="w-full flex items-center justify-center my-8">
              <button
                onClick={sendmensaje}
                className="rounded-xl py-3 px-4 text-[16px] text-white font-bold bg-[#27591a]"
              >
                Quiero más información
              </button>
            </div>
            {setResponseSend !== "" ? (
              <div className="w-full p-4">{responseSend}</div>
            ) : (
              ""
            )}
            <div className="response-email"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
