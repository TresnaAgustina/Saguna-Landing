import Image from "next/image";
import { Inter } from "next/font/google";

import Hero from "../components/layouts/Hero";
import Navbar from "@/components/layouts/Navbar";
import Brand from "@/components/layouts/Brand";
import Reason from "@/components/layouts/Reason";
import Quote from "@/components/layouts/Quote";
import Project from "@/components/layouts/Project";
import Service from "@/components/layouts/Service";
import Cta from "@/components/layouts/Cta";
import Footer from "@/components/layouts/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <section className="w-full h-auto m-auto scroll-smooth">
      <Navbar />
      <Hero />
      <Brand />
      <Reason />
      <Quote />
      <Project />
      <Service />
      <Cta />
      <Footer />
    </section>
  );
}
