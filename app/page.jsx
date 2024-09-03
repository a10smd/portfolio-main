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
            <span>Software Engineer</span>
            <h1 className="h1">
              Hi, I'm <br />
              <span>
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
          </div>
          {/* photo */}
          <div>photo</div>
        </div>
      </div>
    </section>
  );
};

export default Home;
