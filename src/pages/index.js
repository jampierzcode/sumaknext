import Amenidades from "@/components/Amenidades/Amenidades";
import Contacto from "@/components/Contacto/Contacto";
import Carrousel from "@/components/Home/Carrousel";
import FacebookChat from "@/components/Home/FacebookChat";
import Portada from "@/components/Home/Portada";
import Resumen from "@/components/Home/Resumen";
import MaestroPLan from "@/components/MaestroPlan/MaestroPlan";
import Mapa from "@/components/Mapa/Mapa";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${inter.className}`}>
      <Portada />
      <Carrousel />
      <Resumen />
      <Amenidades />
      <MaestroPLan />
      <Mapa />
      <FacebookChat />
      <Contacto />
    </main>
  );
}
