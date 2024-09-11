"use client";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

// about data
const about = {
  title: "About me",
  description:
    "I am Abdus Samad, a skilled frontend developer and UI/UX designer with a year of experience. I specialize in building responsive and dynamic web applications using modern technologies like Next.js. I am also available for freelance work.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Abdus Samad",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+971) 054 578 9975",
    },
    {
      fieldName: "Experience",
      fieldValue: "1 Year",
    },
    {
      fieldName: "Github",
      fieldValue: "a10smd",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Pakistan",
    },
    {
      fieldName: "Email",
      fieldValue: "abdussamada11d8@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Urdu/Hindi",
    },
  ],
};

// experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "Throughout my career, I've gained hands-on experience working as a UI/UX designer and frontend developer, focusing on creating seamless user experiences and building modern web applications.",
  items: [
    {
      company: "ISD Global",
      position: "UI/UX Designer/Frontend Developer & App Developer",
      duration: "Sep 2023 - Present",
    },
    {
      company: "Acooa Life FZE.",
      position: "Sales Promoter",
      duration: "Nov 2023",
    },
  ],
};

// education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "My academic background has provided me with a strong foundation in both business and computing, which complements my work in frontend development and UI/UX design.",
  items: [
    {
      institute: "Arab Unity School",
      Degree:
        "Cambridge International General Certificate of Secondary Education",
      duration: "2013-2020",
    },
    {
      institute: "University of Bolton",
      Degree: "Diploma in Business",
      duration: "2020-2021",
    },
    {
      institute: "University of Bolton",
      Degree: "BSc. (Hons) in Computing",
      duration: "2021-2023",
    },
    {
      institute: "University of Bolton",
      Degree: "BEng. (Hons) in Software Engineering",
      duration: "2023-2024",
    },
  ],
};

// skills data
const skills = {
  title: "My skills",
  description:
    "I possess a wide range of technical skills that help me create dynamic and efficient applications. Below are some of the key tools and technologies I use in my work.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML 5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaReact />,
      name: "React",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <FaReact />,
      name: "React Native", // Added for app development
    },
    {
      icon: <FaJs />,
      name: "TypeScript", // Popular for frontend development
    },
    {
      icon: <FaReact />,
      name: "Redux", // State management for frontend
    },
    {
      icon: <FaFigma />,
      name: "Adobe XD", // Added for UI/UX design
    },
    {
      icon: <FaCss3 />,
      name: "SCSS", // Preprocessor for advanced CSS
    },
    {
      icon: <FaCss3 />,
      name: "Styled Components", // For styling in React apps
    },
    {
      icon: <FaNodeJs />,
      name: "Express.js", // Backend framework often used with Node.js
    },
  ],
};

const Resume = () => {
  return <div>resume page</div>;
};

export default Resume;
