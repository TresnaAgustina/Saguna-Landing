import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar";
import BgImage from "@/svg/BgImage";
import Image from "next/image";
import React from "react";

export default function about() {
  const value = [
    "Integrity",
    "Innovation",
    "Reliability",
    "Partnership",
    "Teamwork",
  ];

  const team = [
    {
      img: "/assets/img/team01.webp",
      name: "I Putu Agus Eka Darma Udayana, S.Kom., M.T.",
      position: "Lecturer & Programer",
    },
    {
      img: "/assets/img/team02.webp",
      name: "I Putu Dwi Guna Ambara Putra, S.Kom.",
      position: "Web Developer",
    },
    {
      img: "/assets/img/team03.webp",
      name: "I Dewa Made Andhika Dwi Suryanata, S.Kom.",
      position: "Mobile Developer",
    },
    {
      img: "/assets/img/team04.webp",
      name: "I Gusti Sagung Maya, S.Kom",
      position: "Ui/Ux Designer",
    },
    {
      img: "/assets/img/team05.webp",
      name: "I Gede Tresna Agustina Putra",
      position: "Junior Developer",
    },
  ];
  return (
    <>
      <Navbar />
      <section className="container mx-auto py-32 px-4 sm:px-0 relative ">
        <div className="w-full h-full absolute z-0 top-0 left-0 overflow-auto">
          <BgImage />
        </div>
        {/* Header */}
        <div className="w-full h-auto relative z-40">
          <h1 className="text-4xl sm:text-5xl text-primary font-bold">
            Saguna Sigma <br /> Teknologi
          </h1>
          <div className="w-full lg:w-4/5 xl:w-2/3 h-auto text-md sm:text-lg flex flex-col gap-2 mt-4 text-justify sm:text-left">
            <p className="text-p font-regular">
              Perusahaan kami didirikan dengan visi yang jelas mendorong
              transformasi digital dan menghadirkan inovasi yang membawa dampak
              positif
            </p>
            <p className="text-p font-regular">
              Sebagai perusahaan teknologi yang berorientasi pada kualitas, kami
              mengutamakan keunggulan dalam setiap produk dan layanan yang kami
              tawarkan. Kami berkomitmen untuk memberikan solusi yang handal,
              efisien, dan terkini, serta memberikan pengalaman pelanggan yang
              luar biasa
            </p>
          </div>
        </div>

        {/* values */}
        <div className="w-full h-auto mt-14 relative z-40">
          <h1 className="text-2xl sm:text-3xl text-primary font-bold underline">
            Values
          </h1>
          <div className="w-full h-auto grid grid-cols-2 sm:grid-cols-4 md:grid-col-5 gap-4 mt-6">
            {value.map((item, index) => (
              <div
                className="w-auto h-auto py-4 flex items-center justify-center border border-primary text-primary  rounded-md hover:bg-primary hover:text-secondary transition-all duration-150"
                key={index}
              >
                <p className="text-lg font-medium tracking-wider">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* team */}
        <div className="w-full h-auto mt-14 flex flex-col items-center justify-center relative z-40">
          <h1 className="text-2xl sm:text-3xl text-primary font-bold underline">
            Tim Kami
          </h1>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            {team.map((item, index) => (
              <div
                className="w-72 h-auto p-4 border rounded-md hover:border-primary"
                key={index}
              >
                <Image
                  src={item.img}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-auto object-contain"
                />
                <div className="w-full text-center mt-4">
                  <h2 className="text-text font-medium text-xl">{item.name}</h2>
                  <p className="text-p font-light text-md">{item.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
