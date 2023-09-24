import { useState } from "react";
import { projectCategory, projects } from "../data";
import { style } from "../styles";

import { motion, useAnimation } from "framer-motion";
import { Button } from "../../core/components/button";

export default function Portfolio() {
  const [active, setActive] = useState("All");
  const reqProject =
    active === "All" ? projects : projects.filter((el) => el.key === active);

  const divAnimationControls = useAnimation();

  return (
    <section
      id="projects"
      className={`${style.paddingX} ${style.container} pb-4 pt-10`}
    >
      <div
        className={`${style.flexCol} place-items-center space-y-6 sm:space-y-4`}
      >
        <h4 className={`${style.h4}`}>Projects</h4>
        <p className={`${style.paragraph}  max-w-xl`}>
          Projects donne so far...
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 sm:gap-2 md:gap-3 pt-4">
          {projectCategory.map(({ id, name }) => (
            <motion.div
              key={id}
              animate={divAnimationControls}
              className={`md:px-6 whitespace-nowrap px-4 py-2 rounded-md font-poppins  outline-none border-transparent  cursor-pointer text-center ${
                active === name
                  ? "bg-secondary text-white outline-secondary ring-2 ring-offset-2"
                  : "bg-lightPrimaryDim"
              }  hover:bg-secondary hover:text-white`}
              onClick={() => setActive(name)}
            >
              {name}
            </motion.div>
          ))}
        </div>
        <div className="flex flex-row flex-wrap gap-4 max-w-7xl justify-center pt-5">
          {reqProject.map(({ name, id, icon, repoUri }) => (
            <div
              key={id}
              className="border-none cursor-pointer border-secondaryDim rounded-md w-[300px] h-auto relative group "
            >
              <motion.img
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                src={icon}
                whileHover={{ scale: 1.1 }}
                className="object-cover block h-auto w-[100%]"
                loading="lazy"
                alt={name}
              />

              <div className="absolute w-[100%] opacity-0 group-hover:opacity-100  transition duration-300 ease-in-out cursor-pointer rounded-xl inset-x-0 bottom-20 pt-30  flex place-items-center justify-center gap-4">
                {name !== "Chat Application" ? (
                  <>
                    <Button>
                      <a
                        href={repoUri}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Github
                      </a>
                    </Button>
                  </>
                ) : (
                  <h3 className="font-poppins text-2xl text-white">
                    Coming Soon
                  </h3>
                )}
              </div>
              <p className={`${style.paragraph} text-center`}>{name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
