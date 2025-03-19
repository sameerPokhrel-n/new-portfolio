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
          With a background in computer science and more than 2 years of
          hands-on experience in the field, I thrive on turning innovative ideas
          into reality through code. My journey in web development began when I
          discovered the limitless potential of the MERN stack. In addition to
          technical skills, I am a strong advocate for collaboration and
          effective communication.Outside of coding, I enjoy staying updated
          with the latest web development trends and technologies. I'm a
          lifelong learner who loves tackling new challenges and embracing
          emerging tools to enhance my skill set.
        </p>
      </div>
    </section>
  );
}
