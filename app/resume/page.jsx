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

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

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
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{
        opacity: 1,
        scale: 1,
        transition: { delay: 0.4, duration: 0.6, ease: "easeOut" },
      }}
      exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.4 } }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0 bg-primary"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger
              value="experience"
              className="p-4 bg-gray-800 text-white rounded-lg shadow-lg transform transition-transform hover:scale-110 active:scale-100"
            >
              Experience
            </TabsTrigger>
            <TabsTrigger
              value="education"
              className="p-4 bg-gray-800 text-white rounded-lg shadow-lg transform transition-transform hover:scale-110 active:scale-100"
            >
              Education
            </TabsTrigger>
            <TabsTrigger
              value="skills"
              className="p-4 bg-gray-800 text-white rounded-lg shadow-lg transform transition-transform hover:scale-110 active:scale-100"
            >
              Skills
            </TabsTrigger>
            <TabsTrigger
              value="about"
              className="p-4 bg-gray-800 text-white rounded-lg shadow-lg transform transition-transform hover:scale-110 active:scale-100"
            >
              About me
            </TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col gap-[60px] text-center xl:text-left"
              >
                <h3 className="text-6xl font-extrabold text-white">
                  {experience.title}
                </h3>
                <p className="max-w-[600px] text-white/90 mx-auto xl:mx-0 text-lg">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 gap-[30px] lg:grid-cols-2">
                    {experience.items.map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -30 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className="bg-gray-800 p-6 rounded-lg shadow-2xl transform transition-transform hover:scale-105"
                      >
                        <h4 className="text-3xl font-bold mb-4 text-gray-100">
                          {item.position}
                        </h4>
                        <p className="text-gray-300">
                          {item.company} - {item.duration}
                        </p>
                        <p className="text-gray-300">{item.description}</p>
                      </motion.li>
                    ))}
                  </ul>
                </ScrollArea>
              </motion.div>
            </TabsContent>

            <TabsContent value="education">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6 }}
                className="bg-gray-800 p-8 rounded-lg shadow-2xl"
              >
                <h3 className="text-6xl font-extrabold text-white">
                  {education.title}
                </h3>
                <p className="max-w-[600px] text-white/90 mx-auto xl:mx-0 text-lg mb-8">
                  {education.description}
                </p>
                <ul className="space-y-6">
                  {education.items.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.4, delay: index * 0.2 }}
                      className="flex flex-col"
                    >
                      <h4 className="text-3xl font-bold text-gray-100">
                        {item.Degree}
                      </h4>
                      <p className="text-gray-300">{item.institute}</p>
                      <p className="text-gray-300">{item.duration}</p>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </TabsContent>

            <TabsContent value="skills">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6 }}
                className="bg-gray-800 p-8 rounded-lg shadow-2xl"
              >
                <h3 className="text-6xl font-extrabold text-white">
                  {skills.title}
                </h3>
                <p className="max-w-[600px] text-white/90 mx-auto xl:mx-0 text-lg mb-8">
                  {skills.description}
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {skills.skillList.map((skill, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg shadow-lg transform transition-transform hover:scale-105"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <div className="text-3xl text-white">{skill.icon}</div>
                      <p className="text-lg text-gray-100">{skill.name}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="about">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6 }}
                className="bg-gray-800 p-8 rounded-lg shadow-2xl"
              >
                <h3 className="text-6xl font-extrabold text-white">
                  {about.title}
                </h3>
                <p className="max-w-[600px] text-white/90 mx-auto xl:mx-0 text-lg mb-8">
                  {about.description}
                </p>
                <ul className="space-y-4">
                  {about.info.map((item, index) => (
                    <li
                      key={index}
                      className="flex justify-between text-gray-300"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <span className="font-bold text-gray-100">
                        {item.fieldName}:
                      </span>
                      <span>{item.fieldValue}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
