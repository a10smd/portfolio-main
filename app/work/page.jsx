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
          <div className="w-full">text</div>
          <div className="w-full">slider</div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
