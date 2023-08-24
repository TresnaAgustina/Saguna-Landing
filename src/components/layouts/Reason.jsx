import React from "react";
import clsx from "clsx";

import ReasonHeader from "../ReasonHeader";
import ReasonItems from "../ReasonItems";

export default function Reason() {
  return (
    <section
      class={clsx(
        "w-full h-auto flex justify-center items-center my-12 scroll-m-32"
      )}
      id="reason"
    >
      <div
        class={clsx(
          "flex flex-col lg:flex-row w-full xl:w-[70%] gap-6 justify-center lg:justify-between"
        )}
        id="container"
      >
        <div
          class={clsx(
            "w-full h-auto lg:w-[40%] flex justify-center lg:justify-start"
          )}
          id="imgContainer"
        >
          <img src="/assets/img/Service.png" alt="" />
        </div>

        <div
          class={clsx("w-full h-auto lg:w-[60%] px-4 lg:px-0 m-auto")}
          id="reasonContainer"
        >
          <div class="mb-5" id="headingCont">
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
