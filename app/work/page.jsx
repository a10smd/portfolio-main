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
    category: "Full Stack",
    title: "Emirates Delight",
    description:
      "Emirates Delight is an online food delivery service that offers a variety of cuisines from all over the world. The platform was created using Next.js, React, and Tailwind CSS.",
    stack: [{ name: "Next.js" }, { name: "React" }, { name: "Tailwind CSS" }],
    live: "",
    github: "",
  },
];

const Work = () => {
  return <div>Work</div>;
};

export default Work;
