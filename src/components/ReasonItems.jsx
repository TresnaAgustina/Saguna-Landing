import React from "react";
import clsx from "clsx";
import { motion } from "framer-motion";

import { ReasonItem } from "@/data/local-data";

export default function ReasonItems() {
  return (
    <section id="content">
      <div className={clsx("flex flex-col gap-5")} id="container">
        {ReasonItem.map(({ icon, title, desc }, index) => (
          <div key={index} className={clsx("flex gap-4")} id="content">
            <motion.div
              initial={{ x: 30, opacity: 0 }}
              whileInView={{
                x: 0,
                opacity: 1,
                transition: { duration: 0.6, delay: 0.2 },
              }}
              viewport={{ once: true }}
              className={clsx(
                "text-lg sm:text-xl w-14 h-12 p-2 rounded-full bg-[#f5f5f5] text-primary",
                "flex items-center justify-center"
              )}
              id="icons"
            >
              {icon}
            </motion.div>
            <div id="texts">
              <motion.h3
                initial={{ y: 100, opacity: 0 }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                  transition: { duration: 0.4, delay: 0.225 },
                }}
                viewport={{ once: true }}
                className={clsx("text-text text-xl sm:text-2xl font-bold")}
                id="title"
              >
                {title}
              </motion.h3>
              <motion.p
                initial={{ y: 100, opacity: 0 }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                  transition: { duration: 0.2, delay: 0.25 },
                }}
                viewport={{ once: true }}
                className={clsx("text-p text-lg sm:text-xl font-normal")}
                id="desc"
              >
                {desc}
              </motion.p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
