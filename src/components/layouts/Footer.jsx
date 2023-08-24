import React from "react";
import clsx from "clsx";
import Link from "next/link";

import SocialIcons from "@/components/SocialIcons";

export default function Footer() {
  return (
    <div
      className={clsx("relative flex flex-col justify-center z-30")}
      id="globalContainer"
    >
      <div
        className={clsx(
          "h-24 w-full flex flex-col bg-primary items-center justify-center"
        )}
        id="container"
      >
        <div
          className={clsx(
            "flex flex-col gap-2 pb-2 justify-between items-center w-[90%] lg:w-[70%] h-auto",
            "md:pb-0 md:gap-0 md:flex-row"
          )}
          id="content"
        >
          <h1
            className={clsx("text-secondary text-2xl font-semibold")}
            id="companyName"
          >
            <h1>Saguna Sigma Teknologi</h1>
          </h1>
          <div className={clsx("")}>
            <SocialIcons type="secondary" direct="horizontal" />
          </div>
        </div>
      </div>
      <footer
        className={clsx(
          "w-full",
          "m-auto py-2 bg-[#3975DB] text-secondary text-base font-normal text-center"
        )}
      >
        ©️2023 - Saguna Sigma Teknologi
      </footer>
    </div>
  );
}
