"use client";

import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left">
            <span className="text-xl">Software Engineer</span>
            <h1 className="h1">
              Hi, I'm <br />
              <span className="text-green-400">
                <Typewriter
                  words={["Abdus Samad ."]}
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
          </div>
          {/* photo */}
          <div>photo</div>
        </div>
      </div>
    </section>
  );
};

export default Home;
