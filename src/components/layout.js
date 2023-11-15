import Header from "./Header/Header";
import { useEffect, useState } from "react";
import SocialIcons from "./SocialIcons/SocialIcons";
import Footer from "./Footer/Footer";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <SocialIcons />
      <main>{children}</main>
      <Footer />
    </>
  );
}
