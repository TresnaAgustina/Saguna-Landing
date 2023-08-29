import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const NavToggle = ({ onClick }) => {
  return (
    <motion.button
      initial={{ scale: 0 }}
      animate={{ scale: 1, duration: 0.2, ease: "easeInOut" }}
      id="toggle"
      onClick={onClick}
    >
      <div
        className={clsx(
          "px-4 py-3 w-auto h-auto flex justify-center items-center hover:text-secondary hover:bg-primary rounded-full duration-200 cursor-pointer"
        )}
        id="content"
      >
        <FontAwesomeIcon icon={faBars} />
      </div>
    </motion.button>
  );
};

export default NavToggle;
