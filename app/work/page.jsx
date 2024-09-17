"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    num: "01",
    category: "fullstack",
    title: "Emirates Delight",
    description:
      "Emirates Delight is an online food delivery service that offers a variety of cuisines from all over the world. The platform was created using Next.js, React, and Tailwind CSS.",
    stack: [
      { name: "Next.js" },
      { name: "React" },
      { name: "Tailwind CSS" },
      { name: "Node js" },
    ],
    live: "https://emirates-delight.vercel.app/",
    github: "https://github.com/a10smd/emirates-delight",
  },
  {
    num: "02",
    category: "frontend",
    title: "Admin Panel",
    description:
      "Admin Panel is a web application that allows users to manage their data. The platform was created using Next.js, React, and Tailwind CSS.",
    stack: [{ name: "Next.js" }, { name: "React" }, { name: "Tailwind CSS" }],
    live: "",
    github: "https://github.com/a10smd/Admin-panel",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            {/* outline num */}
            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
              {project.num}
            </div>
            {/* project category */}
            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-green-400 transition-all duration-500 capitalize ">
              {project.category} project
            </h2>
            {/* project description */}
            <p className="text-white/60">{project.description}</p>
            {/* project stack */}
            <ul className="flex gap-4">
              {project.stack.map((item, index) => {
                return (
                  <li key={index} className="text-xl text-green-400">
                    {item.name}
                    {/* remove last comma */}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                );
              })}
            </ul>
            {/* border */}
            <div className="w-full h-[1px] bg-white/20"></div>
            {/* buttons */}
            <div></div>
          </div>
          <div className="w-full">slider</div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
