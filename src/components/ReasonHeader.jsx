import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

export default function ReasonHeader() {
  return (
    <motion.div id="content">
      <div className={clsx("relative flex flex-col gap-3")} id="container">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: { duration: 0.8, delay: 0.3 },
          }}
          viewport={{ once: true }}
          className={clsx(
            "absolute right-0 z-0 w-4/5 xl:full h-44 bg-slate-100"
          )}
          id="bg"
        ></motion.div>
        <motion.h3
          initial={{ y: 100, opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: { duration: 0.5, delay: 0.3 },
          }}
          viewport={{ once: true }}
          className={clsx("z-20 text-lg md:text-xl font-medium text-primary")}
          id="smallHeading"
        >
          Kenapa Memilih Kami
        </motion.h3>
        <motion.h1
          initial={{ y: 100, opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: { duration: 0.5, delay: 0.3 },
          }}
          viewport={{ once: true }}
          className={clsx("z-20 text-4xl md:text-5xl font-bold text-text")}
          id="largeHeading"
        >
          Pilihan Terbaik untuk Pengembangan Website
        </motion.h1>
        <motion.p
          initial={{ y: 100, opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: { duration: 0.5, delay: 0.35 },
          }}
          viewport={{ once: true }}
          className={clsx("z-20 text-lg")}
          id="bodyText"
        >
          Kami adalah pembuat ide, pencari tujuan, para profesional yang haus
          tantangan, pencipta proyek internet unik. Kami hadir untuk Anda.
        </motion.p>
      </div>
    </motion.div>
  );
}
