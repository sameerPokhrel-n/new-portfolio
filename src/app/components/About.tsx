import { style } from "../styles";

export function About() {
  return (
    <section
      id="about"
      className={`px-6 ${style.flexCol}  py-6 flex-wrap-reverse justify-evenly gap-2 sm:gap-0   mx-auto items-center dark:bg-primaryDim`}
    >
      <div className={`${style.flexCol} md:text-lg space-y-10 text-center`}>
        <h4 className={`${style.h4}  leading-20`}>About Me 🧑‍💻</h4>
        <p className={`${style.paragraph} text-md text-center max-w-[750px]`}>
          With a background in computer science and experience in full-stack
          development, I am now transitioning into Data Engineering, focusing on
          building robust data pipelines, cloud solutions, and analytical models
          to enable data-driven decision-making. I have a strong foundation in
          SQL, Python, and cloud platforms like AWS and Azure, with hands-on
          experience in ETL processes, data warehousing, and big data
          technologies. I thrive on solving complex data challenges and
          continuously expanding my expertise in modern data tools.
        </p>
      </div>
    </section>
  );
}
