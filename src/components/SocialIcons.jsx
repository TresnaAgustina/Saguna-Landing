import { motion } from "framer-motion";
import clsx from "clsx";
import React from "react";

// import social icons
import { dataIcon } from "../data/local-data";

const SocialIcons = ({ type, direct }) => {
  const isSecond = type == "secondary";
  const isVer = direct == "vertical";
  return (
    <div className={clsx("flex gap-5", isVer ? "flex-col gap-5" : "flex")}>
      {dataIcon.map(({ icon, color, border, link }, index) => (
        <a key={index} href={link}>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1, ease: "easeInOut" }}
            className={clsx(
              "flex justify-center items-center w-auto h-auto p-3 border border-text text-[1rem] rounded-full duration-200 cursor-pointer",
              isSecond
                ? "secondary bg-secondary bg-opacity-20 text-secondary border-none hover:bg-slate-50 hover:bg-opacity-100 hover:text-primary"
                : "text-text hover:cursor-pointer duration-200 hover:bg-primary hover:text-secondary hover:border-primary"
            )}
          >
            <i className={icon}></i>
          </motion.div>
        </a>
      ))}
    </div>
  );
};
export default SocialIcons;
