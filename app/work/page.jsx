"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "fullstack",
    title: "Emirates Delight",
    description:
      "Emirates Delight is an online food delivery service that offers a variety of cuisines from all over the world.",
    stack: [
      { name: "Next.js" },
      { name: "React" },
      { name: "Tailwind CSS" },
      { name: "Node js" },
    ],
    image: "/assets/work/thumb1.png",
    live: "https://emirates-delight.vercel.app/",
    github: "https://github.com/a10smd/emirates-delight",
  },
  {
    num: "02",
    category: "frontend",
    title: "Admin Panel",
    description:
      "Admin Panel is a web application that allows users to manage their data.",
    stack: [{ name: "Next.js" }, { name: "React" }, { name: "Tailwind CSS" }],
    image: "/assets/work/thumb2.png",
    live: "",
    github: "https://github.com/a10smd/Admin-panel",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;

    // set current project
    setProject(projects[currentIndex]);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
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
                    <li key={index} className="text-md text-green-400">
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
              <div className="flex items-center gap-4">
                {/* live project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white group-hover:text-green-400 text-3xl" />
                        <TooltipContent>
                          <p>Live Project</p>
                        </TooltipContent>
                      </TooltipTrigger>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                {/* github repo button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white group-hover:text-green-400 text-3xl" />
                        <TooltipContent>
                          <p>Github Repo</p>
                        </TooltipContent>
                      </TooltipTrigger>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>

                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          alt={project.title}
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* Slider Buttons */}
              <WorkSliderBtns />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
