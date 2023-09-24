import { useState } from "react";

export const ScrollButton = () => {
  const [visible, setVisible] = useState<boolean>(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 200) {
      setVisible(true);
    } else if (scrolled <= 200) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <button
      className={`!fixed bottom-5  sm:bottom-14 z-[10] right-5 rounded-full bg-secondary p-3 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out   ${
        visible ? "block" : "hidden"
      }  dark:bg-secondary dark:text-white`}
      onClick={scrollToTop}
    >
      Back To Top
    </button>
  );
};
