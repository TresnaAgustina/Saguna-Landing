import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import SocialIcons from "../SocialIcons";
import Button from "../Button";
import NavToggle from "../Icons/NavToggle";
import Logo from "../Icons/Logo";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import { dataNavItems } from "@/data/local-data";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSolidBackground, setIsSolidBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSolidBackground(true);
      } else {
        setIsSolidBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      id="navbar"
      className={clsx(
        "fixed z-50 top-0 left-0 w-full h-24  flex justify-center backdrop-blur-md duration-75",
        isSolidBackground
          ? "bg-secondary shadow-navbar transition-all duration-150"
          : ""
      )}
    >
      <div
        className={clsx(
          "flex w-[90%] lg:w-[70%] h-auto justify-between items-center"
        )}
      >
        {/* logo */}
        <div className={clsx("logo")}>
          <Link href="/">
            <Logo />
          </Link>
        </div>

        <div
          className={clsx(
            "top-[-1000px] right-0 md:flex md:top-0",
            "bg-secondary block md:bg-transparent absolute w-full h-screen",
            "flex justify-center items-center",
            "md:relative md:w-auto md:h-auto",
            "transition-all duration-300 ease-in-out",
            isNavOpen ? "top-2" : "" // Menggunakan state isNavOpen untuk mengatur tampilan overlay
          )}
          id="navItems"
        >
          {/* background */}
          <div
            id="bg"
            className={clsx("md:hidden absolute top-0 overflow-auto")}
          >
            <svg
              width="1691"
              height="705"
              viewBox="0 0 1691 705"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask id="path-1-inside-1_205_182" fill="white">
                <path d="M1418.83 -0.537598C1418.83 61.1472 1404.25 122.228 1375.92 179.217C1347.6 236.207 1306.08 287.988 1253.74 331.606C1201.39 375.224 1139.26 409.823 1070.87 433.429C1002.48 457.035 929.185 469.185 855.163 469.185C781.141 469.185 707.844 457.035 639.457 433.429C571.07 409.823 508.932 375.224 456.59 331.606C404.249 287.988 362.73 236.207 334.403 179.217C306.076 122.228 291.496 61.1472 291.496 -0.537639L855.163 -0.537598L1418.83 -0.537598Z" />
              </mask>
              <path
                d="M1418.83 -0.537598C1418.83 61.1472 1404.25 122.228 1375.92 179.217C1347.6 236.207 1306.08 287.988 1253.74 331.606C1201.39 375.224 1139.26 409.823 1070.87 433.429C1002.48 457.035 929.185 469.185 855.163 469.185C781.141 469.185 707.844 457.035 639.457 433.429C571.07 409.823 508.932 375.224 456.59 331.606C404.249 287.988 362.73 236.207 334.403 179.217C306.076 122.228 291.496 61.1472 291.496 -0.537639L855.163 -0.537598L1418.83 -0.537598Z"
                stroke="#F5F5F5"
                strokeWidth="4"
                mask="url(#path-1-inside-1_205_182)"
              />
              <mask id="path-2-inside-2_205_182" fill="white">
                <path d="M1539.62 -0.536682C1539.62 74.3663 1521.91 148.536 1487.51 217.737C1453.12 286.938 1402.7 349.816 1339.14 402.781C1275.59 455.745 1200.13 497.759 1117.09 526.423C1034.05 555.087 945.046 569.84 855.163 569.84C765.279 569.84 676.276 555.087 593.234 526.423C510.193 497.759 434.739 455.745 371.182 402.781C307.625 349.816 257.208 286.938 222.811 217.737C188.414 148.536 170.71 74.3662 170.71 -0.536732L855.163 -0.536682H1539.62Z" />
              </mask>
              <path
                d="M1539.62 -0.536682C1539.62 74.3663 1521.91 148.536 1487.51 217.737C1453.12 286.938 1402.7 349.816 1339.14 402.781C1275.59 455.745 1200.13 497.759 1117.09 526.423C1034.05 555.087 945.046 569.84 855.163 569.84C765.279 569.84 676.276 555.087 593.234 526.423C510.193 497.759 434.739 455.745 371.182 402.781C307.625 349.816 257.208 286.938 222.811 217.737C188.414 148.536 170.71 74.3662 170.71 -0.536732L855.163 -0.536682H1539.62Z"
                stroke="#F5F5F5"
                strokeWidth="4"
                mask="url(#path-2-inside-2_205_182)"
              />
              <mask id="path-3-inside-3_205_182" fill="white">
                <path d="M1691 -0.000305176C1691 92.5269 1669.13 184.148 1626.64 269.632C1584.15 355.116 1521.87 432.789 1443.36 498.215C1364.85 563.642 1271.64 615.541 1169.06 650.95C1066.48 686.358 956.533 704.583 845.5 704.583C734.467 704.583 624.522 686.358 521.941 650.95C419.36 615.541 326.153 563.642 247.641 498.215C169.129 432.789 106.85 355.116 64.3598 269.632C21.8695 184.148 -9.70678e-06 92.5268 0 -0.000366772L845.5 -0.000305176H1691Z" />
              </mask>
              <path
                d="M1691 -0.000305176C1691 92.5269 1669.13 184.148 1626.64 269.632C1584.15 355.116 1521.87 432.789 1443.36 498.215C1364.85 563.642 1271.64 615.541 1169.06 650.95C1066.48 686.358 956.533 704.583 845.5 704.583C734.467 704.583 624.522 686.358 521.941 650.95C419.36 615.541 326.153 563.642 247.641 498.215C169.129 432.789 106.85 355.116 64.3598 269.632C21.8695 184.148 -9.70678e-06 92.5268 0 -0.000366772L845.5 -0.000305176H1691Z"
                stroke="#F5F5F5"
                strokeWidth="4"
                mask="url(#path-3-inside-3_205_182)"
              />
              <path
                d="M1298.04 0.268127C1298.04 48.7348 1286.59 96.7268 1264.33 141.504C1242.07 186.281 1209.45 226.967 1168.33 261.238C1127.2 295.509 1078.38 322.695 1024.65 341.242C970.913 359.789 913.323 369.336 855.163 369.336C797.003 369.336 739.412 359.789 685.679 341.242C631.947 322.695 583.124 295.509 541.999 261.238C500.873 226.967 468.251 186.281 445.994 141.504C423.737 96.7268 412.282 48.7347 412.282 0.268095L855.163 0.268127H1298.04Z"
                fill="#F9F9F9"
              />
              <path
                d="M1086.27 -0.000106812C1086.27 31.7235 1080.02 63.1365 1067.88 92.4453C1055.74 121.754 1037.94 148.385 1015.51 170.817C993.079 193.249 966.449 211.043 937.14 223.183C907.831 235.323 876.418 241.571 844.694 241.571C812.971 241.571 781.558 235.323 752.249 223.183C722.94 211.043 696.31 193.249 673.878 170.817C651.446 148.385 633.652 121.754 621.512 92.4453C609.371 63.1365 603.123 31.7235 603.123 -0.00012793L844.694 -0.000106812H1086.27Z"
                fill="#F5F5F5"
              />
            </svg>
          </div>
          <div
            className={clsx(
              "relative flex flex-col items-center gap-28 w-4/5 h-auto"
            )}
            id="content"
          >
            {/* logo */}
            <div className={clsx("logo md:hidden")}>
              <Link href="/" className={clsx("")}>
                <Logo />
              </Link>
            </div>
            {/* nav link */}
            <div className="">
              <ul
                className={clsx(
                  "flex flex-col justify-center items-center md:flex-row gap-10 lg:gap-10"
                )}
              >
                {dataNavItems.map((item, index) => (
                  <motion.li
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    key={index}
                    className={clsx(
                      "font-medium  text-lg hover:text-primary hover:underline hover:underline-offset-4 hover:duration-150"
                    )}
                  >
                    <Link href={item.link}>{item.name}</Link>
                  </motion.li>
                ))}
              </ul>

              <div
                className={clsx("absolute top-[7rem] right-0", "md:hidden")}
                id="icons"
              >
                <SocialIcons type="primary" direct="vertical" />
              </div>
            </div>

            {/* button close */}
            <div
              className={clsx(
                "md:hidden w-auto h-auto py-2 px-4 bg-[#EAF4FF] text-primary rounded-full text-2xl cursor-pointer",
                "hover:text-secondary hover:bg-primary hover:duration-200"
              )}
              id="close"
              onClick={() => setIsNavOpen(false)}
            >
              <FontAwesomeIcon icon={faXmark} />
            </div>
          </div>
        </div>

        {/* button cotact */}
        <div className={clsx("")}>
          <div className={clsx("btn", "hidden md:block")}>
            <Button link="/contact" type="primary" text="Hubungi Kami" />
          </div>
          <div
            className={clsx(
              "text-2xl cursor-pointer",
              "md:hidden",
              "hover:text-primary hover:duration-200"
            )}
            id="open"
          >
            <NavToggle onClick={() => setIsNavOpen(!isNavOpen)} />
          </div>
        </div>
      </div>
    </nav>
  );
}
