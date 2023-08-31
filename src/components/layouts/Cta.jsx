import React from "react";
import clsx from "clsx";

import Button from "@/components/Button";

export default function Cta() {
  return (
    <div id="container">
      <div
        className={clsx("w-full xl:w-[70%] m-auto h-auto mb-24")}
        id="content"
      >
        <div
          className={clsx("flex flex-col justify-center items-center")}
          id="text"
        >
          <h1
            className={clsx(
              "text-2xl md:text-4xl text-primary font-bold text-left sm:text-center w-[90%]"
            )}
            id="heading"
          >
            Ingin Membangun Bisnis Anda?
          </h1>
          <p
            className={clsx(
              "text-lg md:text-xl text-p font-regular text-left sm:text-center mt-2 w-[90%]"
            )}
            id="body"
          >
            Kami bekerja sama dengan Brand, startup, hingga UKM. Berkolaborasi
            untuk pertumbuhan yang lebih berdampak. Bergabunglah dengan kami
            hari ini dan biarkan kami membantu mengembangkan bisnis Anda
          </p>

          <div className={clsx("mt-14")} id="btn">
            <Button
              link="https://api.whatsapp.com/send?phone=081907492346"
              type="primary"
              text="Hubungi Kami"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
