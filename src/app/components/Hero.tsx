import { useTheme } from "../../context/ThemeContext";
import { CV } from "../../assets";
import { Button } from "../../core/components/button";
import { socialMediaLinks } from "../data";
import { style } from "../styles";

import { motion } from "framer-motion";
import { HeroCanvas } from "./canvas";

export const slideIn = () => {
  let direction = "right",
    type = "tween",
    delay = 0.2,
    duration = 1;
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export function Hero() {
  const { theme } = useTheme();
  return (
    <section
      className={`mx-auto py-4  sm:my-0 dark:bg-primaryDim ${style.paddingX} flex flex-row flex-wrap sm:flex-none  items-center justify-between sm:justify-evenly gap-2  p-2`}
    >
      <div className="flex flex-row ss:flex-col  justify-evenly place-items-center  gap-4 py-3">
        {socialMediaLinks.map((link) => (
          <a
            href={link.uri}
            key={link.id}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={theme === "dark" ? link.iconlight : link.icondark}
              className="h-[32px] w-[32px] object-contain"
            />
          </a>
        ))}
      </div>
      <div className="flex flex-col gap-2">
        <h4 className="dark:text-slate-500 font-semibold text-2xl md:text-3xl leading-12 font-poppins">
          Hi I am <br className="sm:block" />
          <strong className=" text-secondary font-thin text-md font-poppins">
            Samir Pokhrel
          </strong>
          <br />
          <strong className="dark:text-white text-darkPrimary font-bold text-4xl">
            Javascript Developer
          </strong>
        </h4>
        <div className="max-w-[200px] my-2 border-t-4 dark:border-secondary border-secondary" />
        <p className="max-w-md dark:text-white md:text-xl text-darkPrimary font-poppins leading-20">
          Experienced web developer with strong proficiency in developing modern
          web application using MERN Stack.
        </p>
        <div className="max-w-md sm:space-y-6 p-2">
          <motion.button whileHover={{ scale: 1.1 }}>
            <Button className="font-poppins">
              <a href={CV} download>
                Download CV
              </a>
            </Button>
          </motion.button>
        </div>
      </div>

      <motion.div
        className="w-[340px] h-[370px] ss:w-[688px] ss:h-[473px] md:w-[340px] md:h-[370px] xl:h-[850px] xl:w-[800px]"
        variants={slideIn()}
      >
        <HeroCanvas />
      </motion.div>
    </section>
  );
}
