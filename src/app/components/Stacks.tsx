import { techStack } from "../data";
import { style } from "../styles";

import { motion } from "framer-motion";

export function Stacks() {
  return (
    <section
      id="stacks"
      className={`pb-4 pt-10 ${style.container} ${style.paddingX}`}
    >
      <div className={`${style.flexCol} place-items-center`}>
        <h4 className={`${style.h4}`}>
          Tech Stack <sub className="text-secondary">used</sub>
        </h4>
        <div className="mx-auto p-4 w-full md:max-w-7xl grid grid-cols-4 md:grid-cols-9  justify-start gap-4 items-center shadow-lg rounded-medium cursor-pointer">
          {techStack.map(({ id, icon }) => (
            <div key={id} className="xs:px-0 sm:px-6 py-2">
              <motion.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 2 }}
                transition={{ duration: 0.1 }}
                key={id}
              >
                <img
                  src={icon}
                  className="ss:scale-100 sm:scale-150 h-35 w-70 object-contain"
                />
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
