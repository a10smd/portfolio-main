"Use client";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "Experienced frontend developer specializing in web development, primarily using Next.js.",
    href: "",
  },
  {
    num: "02",
    title: "Frontend Development",
    description:
      "Frontend developer specializing in creating dynamic web applications, primarily using Next.js.",
    href: "",
  },
  {
    num: "03",
    title: "UI/UX Designer",
    description:
      "Frontend developer and UI/UX designer, specializing in creating seamless web experiences, primarily using Next.js.",
    href: "",
  },
];

import { motion } from "framer-motion";
const Services = () => {
  return (
    <section>
      <div className="container mx-auto">Service Page</div>
    </section>
  );
};
export default Services;
