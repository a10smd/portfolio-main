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
    stack: [{ name: "Next.js" }, { name: "React" }, { name: "Tailwind CSS" }],
    live: "https://emirates-delight.vercel.app/",
    github: "https://github.com/a10smd/emirates-delight",
  },
  {
    num: "02",
    category: "frontend",
    title: "Admin Panel",
    description:
      "Admin Panel is an online food delivery service that offers a variety of cuisines from all over the world. The platform was created using Next.js, React, and Tailwind CSS.",
    stack: [{ name: "Next.js" }, { name: "React" }, { name: "Tailwind CSS" }],
    live: "",
    github: "https://github.com/a10smd/Admin-panel",
  },
];

const Work = () => {
  return <div>Work</div>;
};

export default Work;
