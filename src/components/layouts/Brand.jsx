import React from "react";
import clsx from "clsx";
import { brandLogo } from "@/data/local-data";
import Image from "next/image";

export default function Brand() {
  return (
    <section
      className="shadow-navbar w-full h-auto py-6 px-4 md:px-6 relative z-40 backdrop-blur-md bg-[#fafafa]"
      id="content"
    >
      <div
        className={clsx(
          "w-auto flex items-center justify-start gap-4 lg:justify-center md:gap-12 lg:gap-20 overflow-scroll"
        )}
        id="container"
      >
        {/* <BrandLogo /> */}
        {brandLogo.map((item, index) => {
          return (
            <div key={index} className="w-auto h-full">
              <Image
                src={item.img}
                alt={item.alt}
                width={0}
                height={0}
                sizes="100vw"
                unoptimized
                className="w-auto h-full"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
