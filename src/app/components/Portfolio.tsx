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
          Projects done so far...
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
          {reqProject.map(({ name, id, icon, repoUri, preview, details }) => (
            <motion.div
              className="max-w-sm font-poppins cursor-pointer"
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.07 }}
              key={name}
            >
              <div className="bg-white dark:bg-primaryDim relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
                <img
                  className="rounded-t-lg h-[22vh] w-full object-cover"
                  alt={name}
                  src={icon}
                  loading="lazy"
                />

                <div className="py-6 px-8 rounded-lg bg-white dark:bg-primaryDim ">
                  <h1 className="text-gray-700 dark:text-white font-bold text-2xl mb-3 hover:text-gray-900 hover:cursor-pointer">
                    {name}
                  </h1>
                  <p className="text-gray-700 dark:text-white tracking-wide">
                    {details}
                  </p>
                  <div className="flex justify-between  items-center">
                    {id !== "chat-application" && (
                      <>
                        <Button
                          size="sm"
                          className="mt-6 py-2 px-4 bg-secondary dark:text-white dark:hover:bg-white hover:bg-white hover:text-slate-500 dark:hover:text-slate-500   rounded-lg shadow-md hover:shadow-lg transition duration-300"
                        >
                          <a
                            href={repoUri}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View Repo
                          </a>
                        </Button>
                        <Button
                          size="sm"
                          className="mt-6 py-2 px-4 bg-white !text-slate-500  hover:dark:bg-secondary hover:bg-secondary dark:text-slate-500 hover:dark:!text-white hover:!text-white  font-poppins  rounded-lg shadow-md hover:shadow-lg transition duration-300"
                        >
                          <a
                            href={preview}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Visit Site
                          </a>
                        </Button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
