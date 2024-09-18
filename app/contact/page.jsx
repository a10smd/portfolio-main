"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+971) 054 578 9975",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "abdussamada11d8@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Location",
    description: "Sharjah, UAE",
  },
];

import { motion } from "framer-motion";

const Contact = () => {
  return <motion.section>Contact</motion.section>;
};

export default Contact;
