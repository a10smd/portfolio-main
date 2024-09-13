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
        transition: { delay: 0.4, duration: 0.8, ease: "easeOut" },
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
            {["experience", "education", "skills", "about"].map((value) => (
              <TabsTrigger
                key={value}
                value={value}
                className="p-4 bg-gray-800 text-white rounded-lg shadow-lg transform transition-transform hover:scale-110 active:scale-100"
              >
                {value.charAt(0).toUpperCase() + value.slice(1)}
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="min-h-[70vh] w-full">
            {/* Experience Tab */}
            <TabsContent value="experience">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex flex-col gap-[60px] text-center xl:text-left"
              >
                <h3 className="text-6xl font-extrabold text-white drop-shadow-lg">
                  {experience.title}
                </h3>
                <p className="max-w-[600px] text-white/90 mx-auto xl:mx-0 text-lg">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  {/* Experience Content */}
                  <motion.ul
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="grid grid-cols-1 gap-[30px] lg:grid-cols-2"
                  >
                    {experience.items.map((item, index) => (
                      <motion.li
                        key={index}
                        className="bg-gray-800 p-6 rounded-lg shadow-2xl transform transition-transform hover:scale-105"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -30 }}
                        transition={{ duration: 0.5, delay: index * 0.3 }}
                      >
                        <h4 className="text-3xl font-bold mb-4 text-gray-100">
                          {item.position}
                        </h4>
                        <p className="text-gray-300">
                          {item.company} - {item.duration}
                        </p>
                      </motion.li>
                    ))}
                  </motion.ul>
                </ScrollArea>
              </motion.div>
            </TabsContent>

            {/* Education Tab */}
            <TabsContent value="education">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex flex-col gap-[60px] text-center xl:text-left"
              >
                <h3 className="text-6xl font-extrabold text-white drop-shadow-lg">
                  {education.title}
                </h3>
                <p className="max-w-[600px] text-white/90 mx-auto xl:mx-0 text-lg">
                  {education.description}
                </p>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.6 }}
                  className="bg-gray-800 p-8 rounded-lg shadow-2xl"
                >
                  <ul className="space-y-6">
                    {education.items.map((item, index) => (
                      <motion.li
                        key={index}
                        className="flex flex-col bg-gray-700 p-4 rounded-lg shadow-md"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.3 }}
                      >
                        <h4 className="text-2xl font-bold text-white">
                          {item.Degree}
                        </h4>
                        <p className="text-gray-300">
                          {item.institute} - {item.duration}
                        </p>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            </TabsContent>

            {/* Skills Tab */}
            <TabsContent value="skills">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex flex-col gap-[60px] text-center xl:text-left"
              >
                <h3 className="text-6xl font-extrabold text-white drop-shadow-lg">
                  {skills.title}
                </h3>
                <p className="max-w-[600px] text-white/90 mx-auto xl:mx-0 text-lg">
                  {skills.description}
                </p>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.6 }}
                  className="bg-gray-800 p-8 rounded-lg shadow-2xl"
                >
                  <ul className="grid grid-cols-2 gap-[30px] md:grid-cols-4 lg:grid-cols-4">
                    {skills.skillList.map((skill, index) => (
                      <motion.li
                        key={index}
                        className="flex flex-col items-center text-white"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.3 }}
                      >
                        <div className="text-4xl">{skill.icon}</div>
                        <span className="text-lg">{skill.name}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            </TabsContent>

            {/* About Tab */}
            <TabsContent value="about">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex flex-col gap-[60px] text-center xl:text-left"
              >
                <h3 className="text-6xl font-extrabold text-white drop-shadow-lg">
                  {about.title}
                </h3>
                <p className="max-w-[600px] text-white/90 mx-auto xl:mx-0 text-lg">
                  {about.description}
                </p>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.6 }}
                  className="bg-gray-800 p-8 rounded-lg shadow-2xl"
                >
                  <ul className="space-y-6">
                    {about.info.map((item, index) => (
                      <motion.li
                        key={index}
                        className="flex justify-between text-lg text-white"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.3 }}
                      >
                        <span className="font-bold">{item.fieldName}:</span>
                        <span className="text-gray-300">{item.fieldValue}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
