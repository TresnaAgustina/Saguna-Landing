import React from "react";
import clsx from "clsx";
import { brandLogo } from "@/data/local-data";
import Image from "next/image";

export default function Brand() {
  return (
    <section
      className="shadow-navbar w-full h-auto relative z-40 backdrop-blur-md"
      id="content"
    >
      <div
        className={clsx("w-full xl:w-[70%] flex items-center m-auto ")}
        id="container"
      >
        <div
          className={clsx(
            "w-full h-auto py-6 flex items-center justify-between gap-8"
          )}
          id="container"
        >
          {/* <BrandLogo /> */}
          {brandLogo.map((item, index) => {
            return (
              <div key={index} className="w-full h-auto">
                <Image
                  src={item.img}
                  alt={item.alt}
                  width={500}
                  height={500}
                  unoptimized
                  className="w-auto h-auto"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
