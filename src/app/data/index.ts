import {
  artHaus,
  ajayImg,
  angular,
  bibusImg,
  company0,
  company1,
  company2,
  company3,
  css,
  facebook,
  facebooklight,
  headerIcon,
  html,
  instagram,
  instagramlight,
  javascript,
  landingPage,
  landingPage1,
  landingPage2,
  linkedin,
  linkedinlight,
  mongodb,
  nodejs,
  react,
  reactDashboard,
  sql,
  twitter,
  typescript,
} from "../../assets";

export const navbarItems = [
  {
    id: "about",
    name: "About",
  },
  {
    id: "stacks",
    name: "Stacks",
  },
  {
    id: "experience",
    name: "Experience",
  },
  {
    id: "testimonials",
    name: "Testimonials",
  },
  {
    id: "projects",
    name: "Projects",
  },
  {
    id: "contact",
    name: "Contact",
  },
];

export const socialMediaLinks = [
  {
    id: "facebook",
    uri: "https://www.facebook.com/samir.pokharel.3?mibextid=ZbWKwL",
    icondark: facebook,
    iconlight: facebooklight,
  },
  {
    id: "twitter",
    uri: "https://x.com/pokharelsameeer?t=4latVX4lKzMTxfpO_JZC2Q&s=08 ",
    icondark: twitter,
    iconlight: twitter,
  },
  {
    id: "instagram",
    uri: "./",
    icondark: instagram,
    iconlight: instagramlight,
  },
  {
    id: "linkedin",
    uri: "https://www.linkedin.com/in/pokharelsameer/",
    icondark: linkedin,
    iconlight: linkedinlight,
  },
];
export const techStack = [
  {
    id: "html",
    icon: html,
  },
  {
    id: "css",
    icon: css,
  },
  {
    id: "javascript",
    icon: javascript,
  },
  {
    id: "typescript",
    icon: typescript,
  },
  {
    id: "react",
    icon: react,
  },
  {
    id: "angular",
    icon: angular,
  },
  {
    id: "nodejs",
    icon: nodejs,
  },
  {
    id: "sql",
    icon: sql,
  },
  {
    id: "mongodb",
    icon: mongodb,
  },
];

export const experiences = [
  {
    title: "Full stack Developer",
    company_name: "Orgware Construct",
    icon: company3,
    iconBg: "#E6DEDD",
    date: "May 2023 - Currently working",
    points: [
      "Designing user registration and authentication flows, password recovery mechanisms and integrated third-party authentication providers (OAuth, social logins)",
      "Integrating the compiled Wasm module in application using JavaScript which significantly improves the performance of  the application.",
      "Designing a role-based access control system that allowed flexible permissions management and user privilege escalation, resulting in improved data security.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    ],
  },
  {
    title: "React JS Developer",
    company_name: "WaftTech",
    icon: company2,
    iconBg: "#E6DEDD",
    date: "October 2022 - April 2023",
    points: [
      "Developing SEO friendly user facing e-commerce site using NEXT JS.",
      "Creating secure and efficient RESTful APIs using Express.js.",
      "Ensuring data integrity and security through middleware and validation checks.",
      "Implementing responsive design using Tailwind CSS and ensuring cross-browser compatibility.",
      "Synchronizing Stripe with firebase for user's authentication and authorization using cloud functions.",
    ],
  },
  {
    title: "React  Developer",
    company_name: "Techart Trekkies",
    icon: company1,
    iconBg: "#383E56",
    date: "September 2021 - September 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Manage application state using Redux Duck Patterns and API Integration.",
      "Developing Modules like Leave Management,Attendance,Role Management, Payroll System, Class Routine, Post and comment Moderation Modules",
    ],
  },

  {
    title: "Front-end Developer",
    company_name: "IllinSo Technologies",
    icon: company0,
    iconBg: "#383E56",
    date: "May 2018 - August 2021",
    points: [
      "Developing and maintaining web applications using HTML,CSS,Bootstrap,jQuery.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
];

export const projectCategory = [
  {
    id: "all",
    name: "All",
  },
  {
    id: "web-design",
    name: "Web Design",
  },
  {
    id: "react",
    name: "React",
  },
  {
    id: "angular",
    name: "Angular",
  },
  {
    id: "mern",
    name: "MERN",
  },
];

export const projects = [
  {
    id: "landing-page",
    icon: landingPage1,
    key: "Web Design",
    name: "Landing Page",
    details: "Mock the landing page from Free Front end mentor challenge.",
    repoUri: "https://github.com/sameerPokhrel-n/WLanding-Page",
    preview: "https://cheerful-starburst-2248c8.netlify.app/",
  },
  {
    id: "dnd",
    icon: headerIcon,
    key: "React",
    name: "React Drag and Drop",
    details: "Drag n Drop HTML elements on canvas and change its attributes.",
    repoUri: "https://github.com/sameerPokhrel-n/react-grid-layout",
    preview: "https://sparkling-pudding-ae055d.netlify.app/",
  },
  {
    id: "dashboard",
    icon: reactDashboard,
    key: "React",
    name: "React Dashboard",
    details: "Dashboard with react tanstack table",
    repoUri: "https://github.com/sameerPokhrel-n/test-ui",
    preview: "https://testuii.netlify.app/dashboard",
  },
  {
    id: "dashboard",
    icon: artHaus,
    key: "React",
    name: "Art Haus Landing page",
    details: "Responsive Art Haus landing page template",
    repoUri: "",
    preview: "https://arthaus.netlify.app/",
  },
  {
    id: "audio-recorder",
    icon: landingPage2,
    key: "Angular",
    name: "Audio Recorder",
    details: "Record audio using microphone and download the recorded audio.",
    repoUri: "https://github.com/sameerPokhrel-n/Voice-Recorder",
    preview: "https://stupendous-chimera-136ea3.netlify.app/",
  },
  {
    id: "chat-application",
    icon: landingPage,
    key: "MERN",
    name: "Chat Application",
    details:
      "Chat app using MERN Stack with the features: User Authentication,One-to-One Real-Time Messaging,Sound Notifications,Typing Status",
    repoUri: "",
    preview: "https://chit-chat01.netlify.app/",
  },
];
export const testimonials = [
  {
    id: 1,
    name: "Ajay K. Mahato",
    position: "Backend Developer",
    image: ajayImg,
    company: "Techart Trekkies",
    details:
      "Samir has an impressive command over React.js and its associated technologies. His coding skills are top-notch, and he consistently produce code that is clean, efficient, and highly maintainable.",
  },
  {
    id: 2,
    name: "Bibus Poudel",
    position: "UI/UX Designer",
    image: bibusImg,
    company: "FuseMachines",
    details:
      "His ability to translate complex design concepts into clean and efficient code is truly commendable. I have witnessed him consistently deliver high-quality work, to ensure the success of the projects",
  },
  {
    id: 3,
    name: "Sujit Baniya",
    position: "CEO-Project Manger",
    image:
      "https://imgs.search.brave.com/XokBZ7BHUyG8dA0f-GKPiOV69MW2BAAewH20dqsIbuc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5naXRlbS5jb20v/cGltZ3MvbS8yNzIt/MjcyMDY1Nl91c2Vy/LXByb2ZpbGUtZHVt/bXktaGQtcG5nLWRv/d25sb2FkLnBuZw",
    company: "Orgware Construct",
    details:
      "Aside from his technical expertise, Samir is also a great team player. He actively collaborate with team members, share knowledge, and is always willing to lend a helping hand.",
  },
];
