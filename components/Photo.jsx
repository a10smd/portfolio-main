"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
      >
        <div className="w-[398px] h-[398px] xl:w-[598px] xl:h-[598px] mix-blend-lighten">
          <Image
            src="/assets/photo.png"
            priority
            quality={100}
            fill
            alt="photo"
            className="object-contain"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Photo;
