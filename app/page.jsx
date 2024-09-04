"use client";

import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import { Typewriter } from "react-simple-typewriter";

//components
import Social from "@/components/Social";
import Photo from "@/components/Photo";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Engineer</span>
            <h1 className="h1">
              Hi, I'm <br />
              <span className="text-green-400">
                <Typewriter
                  words={["Abdus Samad."]}
                  loop={false}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={70}
                  delaySpeed={2000}
                />
              </span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I'm a skilled Software Engineer specializing in website
              development, with proficiency in multiple technologies and
              languages.
            </p>
            {/* button and social */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-green-400 rounded-full flex justify-center items-center text-green-400 text-base hover:bg-green-400 hover:text-primary transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
