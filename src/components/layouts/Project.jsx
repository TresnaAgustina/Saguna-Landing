import React from "react";
import clsx from "clsx";
import { motion } from "framer-motion";

import Card from "@/components/Card";
import Button from "@/components/Button";

import { projectItems } from "@/data/local-data";

export default function Project() {
  // display six latest projects
  const latestProjects = projectItems.slice(0, 6);
  // display six projects after the latest projects
  return (
    <section className="container xl:w-[70%] h-auto m-auto scroll-m-24">
      <div className="flex flex-col gap-4 sm:gap-12">
        <div className={clsx("w-full h-auto")} id="heading">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.5, delay: 0.2 },
            }}
            viewport={{ once: true }}
            className={clsx("")}
            id="container"
          >
            <div
              id="smallTitle"
              className={clsx(
                "text-center text-xl sm:text-2xl text-primary font-medium"
              )}
            >
              Portfolio
            </div>
            <div
              id="largeHeading"
              className={clsx(
                "text-center text-3xl sm:text-5xl text-text font-semibold"
              )}
            >
              Our Last Project
            </div>
          </motion.div>
        </div>

        <div
          class={clsx("grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4")}
          id="projectContainer"
        >
          {/* <!-- <Card client:load /> --> */}
          {latestProjects.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              category={item.category}
              img_link={item.cardImg}
              link={item.route}
            />
          ))}
        </div>

        <div
          class={clsx("w-full h-auto flex justify-center")}
          id="btnContainer"
        >
          <Button link="/portfolio" type="secondary" text="Lihat Semua" />
        </div>
      </div>
    </section>
  );
}
