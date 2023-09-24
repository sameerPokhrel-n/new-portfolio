import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { style } from "../styles";
import { experiences } from "../data";
import { useTheme } from "../../context/ThemeContext";

// export const textVariant = (delay) => {
//   return {
//     hidden: {
//       y: -50,
//       opacity: 0,
//     },
//     show: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         duration: 1.25,
//         delay: delay,
//       },
//     },
//   };
// };

const ExperienceCard = ({
  experience,
}: {
  experience: {
    title: string;
    company_name: string;
    icon: string;
    iconBg: string;
    date: string;
    points: string[];
  };
}) => {
  const { theme } = useTheme();
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: theme === "dark" ? "#283141" : "rgb(243 244 246 /1)",
        color: theme === "dark" ? "#fff" : "#000",
        fontFamily: "poppins",
      }}
      contentArrowStyle={{ borderRight: "7px solid #FD6F00" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain scale-150 rounded-full   border-orange-300"
          />
        </div>
      }
    >
      <div>
        <h3 className="dark:text-white text-darkPrimary text-[24px] font-bold">
          {experience.title}
        </h3>
        <p
          className="dark:text-slate-400 text-slate-400 text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

export default function Experience() {
  return (
    <section
      id="experience"
      className={`pb-4 pt-10 ${style.container} ${style.paddingX}`}
    >
      <div className={`${style.flexCol} place-items-center`}>
        <h4 className={`${style.h4}`}>Work Experience</h4>
        <div className="pt-4">
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={`experience-${index}`}
                experience={experience}
              />
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
}
