import { motion } from "framer-motion";
import clsx from "clsx";
import BgImage from "../../svg/BgImage";
import LeftTechIcons from "../LeftTechIcons";
import RightTechIcons from "../RightTechIcons";
import SocialIcons from "../SocialIcons";
import Button from "../Button";

// import component
// import Button from "../Button";

const Hero = () => {
  return (
    <section
      className={clsx("w-full h-screen flex justify-center overflow-hidden")}
      id="hero"
    >
      <div className="w-full h-full absolute z-0 top-0 left-0 overflow-auto">
        <BgImage width={"w-full"} height={"h-full"} />
      </div>
      <div
        className={clsx(
          "w-full xl:w-[70%] h-screen flex items-center justify-between z-20"
        )}
        id="container"
      >
        <div className={clsx("hidden xl:flex")} id="techSkill">
          <LeftTechIcons />
        </div>

        <div
          className="w-full flex flex-col items-center gap-8"
          id="heroContent"
        >
          <motion.div
            className="flex flex-col justify-center items-center gap-16"
            id="heroContent"
          >
            <div
              className="text-center flex flex-col items-center gap-2"
              id="textContent"
            >
              <motion.h3
                initial={{ scale: 0 }}
                animate={{ scale: 1, duration: 1, ease: "easeInOut" }}
                className={clsx("font-medium text-lg md:text-2xl text-primary")}
                id="smallTitle"
              >
                Bangun Bersama Kami
              </motion.h3>
              <motion.h1
                initial={{ scale: 0 }}
                animate={{ scale: 1, duration: 1, ease: "easeInOut" }}
                className={clsx(
                  "font-bold text-text text-2xl md:text-5xl mb-1 md:mb-4"
                )}
                id="headingText"
              >
                Website Yang Menginspirasi, Menghadirkan Pengalaman Menakjubkan.
              </motion.h1>
              <motion.p
                initial={{ scale: 0 }}
                animate={{ scale: 1, duration: 1, ease: "easeInOut" }}
                className={clsx("font-normal text-md md:text-2xl text-p w-4/5")}
                id="bodyText"
              >
                Kami perusahaan yang berdedikasi untuk mewujudkan visi dan
                inovasi Anda. Fokus pada kualitas, kreativitas, dan kepuasan
                pelanggan
              </motion.p>
            </div>
            <div className="w-42" id="buttton">
              <Button type="primary" text="Hubungi Kami" link="/contact" />
            </div>
          </motion.div>

          <SocialIcons type="primary" direct="horizon" />
        </div>

        <div className={clsx("hidden xl:flex")} id="techSkill">
          <RightTechIcons />
        </div>
      </div>
    </section>
  );
};
export default Hero;
