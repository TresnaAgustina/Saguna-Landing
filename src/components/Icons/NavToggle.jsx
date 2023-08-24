import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

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
        <i className={clsx("fa-solid fa-bars")} />
      </div>
    </motion.button>
  );
};

export default NavToggle;
