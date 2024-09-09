"use client";
import { BsArrowDownRight, BsArrowRight } from "react-icons/bs";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

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

const Services = () => {
  // Track hover state for each service
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [floating, setFloating] = useState(false);

  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div key={index}>
                {/* top */}
                <div>
                  <div>{service.num}</div>
                  <Link href={service.href}>
                    {/* Animate the icon transition */}
                    <span
                      onMouseEnter={() => {
                        setHoveredIndex(index);
                        setFloating(true);
                      }}
                      onMouseLeave={() => {
                        setHoveredIndex(null);
                        setFloating(false);
                      }}
                      className="inline-block mb-4"
                    >
                      <AnimatePresence initial={false}>
                        {hoveredIndex === index ? (
                          <motion.div
                            key="right-arrow"
                            initial={{ x: -20, opacity: 0 }}
                            animate={{
                              x: 0,
                              opacity: 1,
                              y: floating ? [0, -4, 0] : 0, // Floating animation
                            }}
                            exit={{ x: 20, opacity: 0 }}
                            transition={{
                              duration: 0.4,
                              ease: "easeOut",
                              y: {
                                repeat: floating ? Infinity : 0,
                                repeatType: "reverse",
                                duration: 0.6,
                              },
                            }}
                            style={{ position: "absolute", fontSize: "1.5rem" }} // Increased size
                          >
                            <BsArrowRight />
                          </motion.div>
                        ) : (
                          <motion.div
                            key="down-right-arrow"
                            initial={{ x: -20, y: -20, opacity: 0 }}
                            animate={{ x: 0, y: 0, opacity: 1 }}
                            exit={{ x: 20, y: 20, opacity: 0 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            style={{ position: "absolute", fontSize: "1.5rem" }} // Increased size
                          >
                            <BsArrowDownRight />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </span>
                  </Link>
                </div>
                {/* title */}
                <h2>{service.title}</h2>
                {/* description */}
                <p>{service.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
