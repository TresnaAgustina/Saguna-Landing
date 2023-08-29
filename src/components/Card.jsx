import react from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import Image from "next/image";

const Card = ({ title, category, img_link, link, className }) => {
  return (
    <div className="project__box" id="projectCard">
      {/* single card */}
      <motion.a
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: { duration: 0.5, delay: 0.2 },
        }}
        viewport={{ once: true }}
        href={link}
        className={className}
      >
        <div
          className={clsx(
            "group relative w-full h-full rounded-lg overflow-hidden border cursor-pointer"
          )}
          id="card"
        >
          <div
            className={clsx(
              "absolute hidden group-hover:flex z-20 w-full h-full bg-gradient-to-b from-transparent to-gray-900",
              "flex items-end justify-between p-5"
            )}
            id="overlay"
          >
            {/* text */}
            <div className="w-[90%]" id="text">
              <h2
                className={clsx(
                  "text-secondary font-medium text-2xl",
                  "truncate capitalize"
                )}
                id="title"
              >
                {title}
              </h2>
              <p
                className={clsx("text-primary text-lg font-normal")}
                id="category"
              >
                {category}
              </p>
            </div>
          </div>

          <div className={clsx("w-full h-full")} id="imgContainer">
            <Image
              className={clsx(
                "scale-110 group-hover:scale-125 group-hover:rotate-2 transition-all duration-500"
              )}
              src={img_link}
              alt="Portfolio Images"
              width={600}
              height={500}
              unoptimized={false}
            />
          </div>
        </div>
      </motion.a>
      {/* end single card */}
    </div>
  );
};
export default Card;
