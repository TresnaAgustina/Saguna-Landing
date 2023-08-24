import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import clsx from "clsx";

export default function Button({ type, text, link }) {
  const router = useRouter();
  const isPrimary = type === "primary";

  return (
    <motion.button
      initial={{ scale: 0 }}
      animate={{ scale: 1, duration: 0.2, ease: "easeInOut" }}
      onClick={() => router.push(link)}
      type="button"
      className={clsx(
        "py-4 px-6",
        "rounded-md font-bold text-md",
        isPrimary
          ? "bg-primary text-secondary duration-200 hover:shadow-button"
          : "bg-secondary text-primary border-primary border-[1px] duration-200 hover:bg-primary hover:text-secondary"
      )}
    >
      {text}
    </motion.button>
  );
}
