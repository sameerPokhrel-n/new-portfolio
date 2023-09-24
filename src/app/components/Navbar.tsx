import { useState } from "react";
import { navbarItems } from "../data";
import { menu, close, light, dark } from "../../assets";
import { useTheme } from "../../context/ThemeContext";

import { motion } from "framer-motion";

export function Navbar() {
  const [toggle, setToggle] = useState(false);
  const { theme, setTheme } = useTheme();
  return (
    <div className=" dark:bg-primaryDim  ss:px-16 sm:px-6 md:px-6  mx-auto flex flex-row items-center justify-between sm:justify-evenly p-2">
      <h4 className="text-darkPrimary dark:text-white md:text-lg sm:text-sm sm:whitespace-nowrap font-bold font-poppins cursor-pointer hover:text-secondary hover:dark:text-secondary">
        <a href="/">{theme === "dark" ? "🌚" : "🌞"} Samir Pokhrel</a>
      </h4>
      <div className="hidden sm:block">
        <ul className="list-none flex-1 flex flex-row md:gap-4 sm:gap-2">
          {navbarItems.map((item) => (
            <a href={`#${item.id}`} key={item.id}>
              <motion.li
                whileHover={{ scale: 1.1 }}
                className="text-darkPrimary dark:text-slate-400   font-poppins cursor-pointer hover:text-secondary hover:dark:text-secondary"
                key={item.id}
              >
                {item.name}
              </motion.li>
            </a>
          ))}
        </ul>
      </div>

      <div className="hidden sm:block">
        <div className="p-2 ">
          <img
            src={theme === "light" ? light : dark}
            className="block w-[28px] h-[28px] object-contain cursor-pointer transition ease-in-out   "
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          />
        </div>
      </div>
      <div className="sm:hidden flex flex-row justify-between items-center gap-4">
        {!toggle && (
          <>
            <img
              src={theme === "light" ? light : dark}
              className="block w-[28px] h-[28px] object-contain cursor-pointer transition ease-in-out "
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            />
            <img
              src={toggle ? close : menu}
              className="block w-[28px] h-[28px] object-contain cursor-pointer transition ease-in-out  "
              onClick={() => setToggle((prev) => !prev)}
            />
          </>
        )}
      </div>

      {toggle && (
        <div className="sm:hidden">
          {toggle && (
            <div className="top-0 right-0 w-[45vw] dark:bg-white bg-primaryDim p-3    fixed h-full z-[10000]">
              <div className="flex flex-row justify-end  gap-2">
                <img
                  src={toggle ? close : menu}
                  className="block w-[28px] h-[28px] object-contain cursor-pointer transition ease-in-out  "
                  onClick={() => setToggle((prev) => !prev)}
                />
              </div>
              <ul className="list-none flex-1 flex flex-col pt-4 md:gap-4 sm:gap-2">
                {navbarItems.map((item) => (
                  <a href={`#${item.id}`} key={item.id}>
                    <motion.li
                      whileHover={{ scale: 1.1 }}
                      className="text-white dark:text-darkPrimary p-4 text-center   font-poppins cursor-pointer hover:text-secondary hover:dark:text-secondary"
                      key={item.id}
                    >
                      {item.name}
                    </motion.li>
                  </a>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
