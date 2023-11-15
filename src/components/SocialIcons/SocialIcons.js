import React from "react";
import {
  BiLogoWhatsapp,
  BiLogoInstagram,
  BiLogoTiktok,
  BiLogoFacebookCircle,
} from "react-icons/bi";
const SocialIcons = () => {
  return (
    <div className="fixed top-0 bottom-0 z-40 right-0 w-[80px] lg:w-[90px] px-[10px] flex flex-col justify-end pb-[120px] gap-4">
      <div className="w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] rounded-full bg-[#113508] text-white scale-1 hover:scale-110 transition-transform duration-300">
        <a
          className="w-full h-full flex items-center justify-center "
          href="https://api.whatsapp.com/send/?phone=51943555876&text&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BiLogoWhatsapp />
        </a>
      </div>
      <div className="w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] rounded-full bg-[#113508] text-white scale-1 hover:scale-110 transition-transform duration-300">
        <a
          className="w-full h-full flex items-center justify-center "
          href="https://www.instagram.com/sumaknature"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BiLogoInstagram />
        </a>
      </div>
      <div className="w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] rounded-full bg-[#113508] text-white scale-1 hover:scale-110 transition-transform duration-300">
        <a
          className="w-full h-full flex items-center justify-center "
          href="https://www.tiktok.com/@sumaklivingnature"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BiLogoTiktok />
        </a>
      </div>
      <div className="w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] rounded-full bg-[#113508] text-white scale-1 hover:scale-110 transition-transform duration-300">
        <a
          className="w-full h-full flex items-center justify-center "
          href="https://www.facebook.com/SumakNature"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BiLogoFacebookCircle />
        </a>
      </div>
    </div>
  );
};

export default SocialIcons;
