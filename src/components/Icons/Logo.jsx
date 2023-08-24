import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

const Logo = ({}) => {
  return (
    <motion.div
      id="content"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, duration: 0.2, ease: "easeInOut" }}
    >
      <h2 className={clsx("text-3xl text-primary font-bold")}>Logo</h2>
    </motion.div>
  );
};
export default Logo;
