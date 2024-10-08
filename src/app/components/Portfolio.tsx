import { useState } from "react";
import { projectCategory, projects } from "../data";
import { style } from "../styles";

import { motion, useAnimation } from "framer-motion";

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
            // <motion.div
            //   className="max-w-sm font-poppins cursor-pointer"
            //   transition={{ duration: 0.5 }}
            //   whileHover={{ scale: 1.07 }}
            //   key={name}
            // >
            //   <div className="bg-white dark:bg-primaryDim relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
            //     <img
            //       className="rounded-t-lg h-[22vh] w-full object-cover"
            //       alt={name}
            //       src={icon}
            //       loading="lazy"
            //     />

            //     <div className="py-6 px-8 rounded-lg bg-white dark:bg-primaryDim ">
            //       <h1 className="text-gray-700 dark:text-white font-bold text-2xl mb-3 hover:text-gray-900 hover:cursor-pointer">
            //         {name}
            //       </h1>
            //       <p className="text-gray-700 dark:text-white tracking-wide">
            //         {details}
            //       </p>
            //       <div className="flex justify-between  items-center">
            //         {id !== "chat-application" && (
            //           <>
            //             <Button
            //               size="sm"
            //               className="mt-6 py-2 px-4 bg-secondary dark:text-white dark:hover:bg-white hover:bg-white hover:text-slate-500 dark:hover:text-slate-500   rounded-lg shadow-md hover:shadow-lg transition duration-300"
            //             >
            //               <a
            //                 href={repoUri}
            //                 target="_blank"
            //                 rel="noopener noreferrer"
            //               >
            //                 View Repo
            //               </a>
            //             </Button>
            //             <Button
            //               size="sm"
            //               className="mt-6 py-2 px-4 bg-white !text-slate-500  hover:dark:bg-secondary hover:bg-secondary dark:text-slate-500 hover:dark:!text-white hover:!text-white  font-poppins  rounded-lg shadow-md hover:shadow-lg transition duration-300"
            //             >
            //               <a
            //                 href={preview}
            //                 target="_blank"
            //                 rel="noopener noreferrer"
            //               >
            //                 Visit Site
            //               </a>
            //             </Button>
            //           </>
            //         )}
            //       </div>
            //     </div>
            //   </div>
            // </motion.div>
            <motion.div
              className="relative  flex flex-col  rounded-lg overflow-hidden shadow-lg w-96 h-[420px] font-poppins cursor-pointer"
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              key={`${id}_${name}`}
            >
              <img
                src={icon}
                alt="Card image"
                className="w-full h-48 object-cover"
              />
              <div className="flex flex-col flex-1 p-4">
                <h3 className="text-xl font-semibold mb-2 text-gray-700 dark:text-white hover:text-gray-900 hover:cursor-pointer">
                  {name}
                </h3>
                <p className="text-gray-700 dark:text-white tracking-wide">
                  {details}
                </p>
              </div>

              <div className="flex border-t border-gray-300">
                <button
                  className="w-1/2 py-3 rounded-none focus:outline-0 focus-visible:outline-none focus:ring-offset-0 focus:ring-offset-white focus:ring-white focus:ring-0 focus:border-none   bg-white !text-slate-500 dark:text-slate-500 hover:dark:bg-secondary hover:bg-secondary hover:dark:!text-white hover:!text-white  hover:shadow-lg transition-colors duration-300"
                  onClick={() => window.open(repoUri, "_blank")}
                >
                  View Repo
                </button>

                {/* Vertical line */}
                <div className="w-px h-full bg-gray-300"></div>
                <button
                  className="w-1/2 py-3 focus:outline-0 focus-visible:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-white focus:ring-white focus:border-none  rounded-none  bg-white  !text-slate-500  hover:dark:bg-secondary hover:bg-secondary dark:text-slate-500 hover:dark:!text-white hover:!text-white  font-poppins  hover:shadow-lg transition-colors duration-300"
                  onClick={() => {
                    console.log(preview, "laudey");
                    window.open(preview, "_blank");
                  }}
                >
                  Visit Site
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
