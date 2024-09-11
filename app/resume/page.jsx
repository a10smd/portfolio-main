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
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibusdam, sunt explicabo inventore.",
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
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibusdam, sunt explicabo inventore.",
  items: [
    {
      company: "ISD Global",
      position: "UI/UX Designer/Frontend Developer & App Developer",
      duration: "Sep 2023 - Present",
    },
    {
      company: "Acooa Life FZE.",
      position: "Sales Promoter",
      duration: "Nov 2023 - Nov 2023",
    },
  ],
};

const Resume = () => {
  return <div>resume page</div>;
};

export default Resume;
