import React from "react";
import clsx from "clsx";
import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownLong } from "@fortawesome/free-solid-svg-icons";

export default function Quote() {
  return (
    <section className="w-full xl:w-[70%] h-auto py-24 m-auto">
      <div className="w-4/5 h-full m-auto flex flex-col items-center justify-center gap-3">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: { duration: 0.5, delay: 0.2 },
          }}
          viewport={{ once: true }}
          className={clsx("text-center text-2xl text-primary font-medium")}
          id="smallTitle"
        >
          Harapan Kami
        </motion.div>
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, delay: 0.3 },
          }}
          viewport={{ once: true }}
          className={clsx(
            "text-center text-2xl sm:text-5xl text-text font-semibold"
          )}
          id="largeHeading"
        >
          Menginspirasi Masa Depan - Mengubah Ide Menjadi Realitas
        </motion.div>
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, delay: 0.4 },
          }}
          viewport={{ once: true }}
          //   scroll to portfolio section

          href=""
          className={clsx("mt-8")}
          id="btnScrollDown"
        >
          <div
            className={clsx(
              "text-2xl text-primary border border-primary rounded-full py-4 px-6",
              "hover:bg-primary hover:text-white transition duration-300 ease-in-out"
            )}
            id="button"
          >
            <FontAwesomeIcon icon={faDownLong} />
          </div>
        </motion.a>
      </div>
    </section>
  );
}
