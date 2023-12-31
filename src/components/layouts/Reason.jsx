import React from "react";
import clsx from "clsx";

import ReasonHeader from "../ReasonHeader";
import ReasonItems from "../ReasonItems";
import Image from "next/image";

export default function Reason() {
  return (
    <section
      className={clsx(
        "w-full h-auto flex justify-center items-center my-12 scroll-m-32"
      )}
      id="reason"
    >
      <div
        className={clsx(
          "flex flex-col lg:flex-row w-full xl:w-[70%] gap-6 justify-center lg:justify-between"
        )}
        id="container"
      >
        <div
          className={clsx(
            "w-full h-auto lg:w-[40%] flex justify-center lg:justify-start"
          )}
          id="imgContainer"
        >
          <Image
            src="/assets/img/Service.png"
            alt="Reason Image"
            unoptimized
            width={500}
            height={500}
          />
        </div>

        <div
          className={clsx("w-full h-auto lg:w-[60%] px-4 lg:px-0 m-auto")}
          id="reasonContainer"
        >
          <div className="mb-5" id="headingCont">
            <ReasonHeader />
          </div>

          <div id="reasonItems">
            <ReasonItems />
          </div>
        </div>
      </div>
    </section>
  );
}
