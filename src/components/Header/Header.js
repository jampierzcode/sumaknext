import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiAlignRight, FiX } from "react-icons/fi";

const Header = () => {
  const [open, setOpen] = useState(false);
  const linksMenu = [
    {
      name: "Sobre Sumak",
      icon: "",
      path: "#resumen",
      type: "item",
    },
    {
      name: "Beneficios",
      icon: "",
      path: "#amenidades",
      type: "item",
    },
    {
      name: "Contacto",
      icon: "",
      path: "#contacto",
      type: "item",
    },
    {
      name: "Whatsapp",
      icon: <FaWhatsapp />,
      path: "https://api.whatsapp.com/send/?phone=51943555876&text&type=phone_number&app_absent=0",
      type: "itemButton",
    },
  ];
  return (
    <div
      className="w-full fixed left-0 right-0 top-0 z-50 bg-white"
      style={{ boxShadow: "0 4px 15px rgba(0,0,0,.1)" }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="flex px-3 items-center justify-between">
          <Link href={"/"}>
            <h1 className="text-lg font-bold whitespace-nowrap">
              <img
                className="w-[100px]"
                src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=182,fit=crop,q=95/A0xeE5ONDXCg8oyA/zumak-logo-oficial-dark-turquesa-200x200.fw-YyvPBajnyRt38y5m.png"
                alt=""
              />
            </h1>
          </Link>
          <div
            onClick={() => setOpen(!open)}
            className="text-3xl h-[50px] flex items-center justify-center absolute right-8 top-6 cursor-pointer md:hidden"
          >
            {open ? <FiX /> : <FiAlignRight />}
          </div>
          <ul
            // className="flex items-center justify-center gap-4 w-full"
            className={`shadow-lg lg:shadow-none lg:border-gray-200 border-t-2 lg: border-none md:flex md:justify-center md:items-center md:pb-0 py-6 lg:py-0 absolute md:static bg-white md:z-auto z-[40] left-0 w-full md:w-full md:pl-0 pl-9 transition-all duration-500 ease-in ${
              open ? "top-[100%] " : "top-[-490px]"
            }`}
          >
            {linksMenu.map((link, index) => {
              if (link.type === "itemButton") {
                return (
                  <a
                    target="_blank"
                    href={link.path}
                    onClick={() => setOpen(false)}
                    key={index}
                    className="py-4 px-3 rounded-lg flex items-center gap-2 bg-[#27591a] text-white text-sm"
                  >
                    {link.icon} {link.name}
                  </a>
                );
              }
              return (
                <li key={index}>
                  <Link
                    onClick={() => setOpen(false)}
                    className="text-sm text-gray-600 font-bold px-4 py-3 block"
                    href={link.path}
                  >
                    {" "}
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
          {/* {user ? (
            <button
              onClick={handleSingIn}
              className="p-4 rounded bg-blue-600 text-white text-sm"
            >
              SignIn
            </button>
          ) : (
            <>
              <p className="text-sm">{user?.email}</p>
              <button
                onClick={handleSignOut}
                className="p-4 rounded bg-blue-600 text-white text-sm"
              >
                SignOut
              </button>
            </>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default Header;
