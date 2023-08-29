import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

// import social icons
import { dataIcon } from "../data/local-data";
import {
  faInstagram,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialIcons = ({ type, direct }) => {
  const icon = [
    {
      icon: faInstagram,
      link: "https://www.instagram.com/",
    },
    {
      icon: faLinkedin,
      link: "https://www.linkedin.com/",
    },
    {
      icon: faWhatsapp,
      link: "https://api.whatsapp.com/send?phone=081907492346",
    },
    {
      icon: faEnvelope,
      link: "mailto:agus.ekadarma@gmail.com",
    },
    {
      icon: faPaperPlane,
      link: "https://t.me/",
    },
  ];

  const isSecond = type == "secondary";
  const isVer = direct == "vertical";
  return (
    <div className={clsx("flex gap-5", isVer ? "flex-col gap-5" : "flex")}>
      {icon.map(({ prefix, icon, link }, index) => (
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
            <FontAwesomeIcon icon={icon} />
            {/* <i className={icon}></i> */}
          </motion.div>
        </a>
      ))}
    </div>
  );
};
export default SocialIcons;
