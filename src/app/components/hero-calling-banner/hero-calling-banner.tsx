import Image from "next/image";
import bannerImage from "@/app/assets/imo.png";
import videoLogo from "@/app/assets/icon-video-light.d5af9c91.png";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";

const HeroCallingBanner = () => {
  return (
    <div
      className={`min-w-full flex items-center justify-center pt-[10rem] pb-[5rem] md:h-screen bg-[#131b21]`}
    >
      {/* Container for left and right content */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl px-4 md:px-8 ">
        {/* Left side text content */}
        <AnimatePresence>
          <div className="mb-8 md:mb-0 md:w-1/3">
            <div className="text-lg md:text-xl text-white font-thin mt-4 flex items-center gap-2">
              <Image
                src={videoLogo}
                alt="logo"
                width={50}
                height={50}
                loading="lazy"
                className="w-8 md:w-12 h-8 md:h-12"
              />
              <span>Audio & Video</span>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-[#009dff]"
            >
              Personal Calling Card
            </motion.h1>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-lg md:text-xl text-white font-thin mt-4 block"
            >
              Connect with your loved ones through calls and messages.
            </motion.span>
          </div>
        </AnimatePresence>

        {/* Right side image content */}
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-full md:w-auto mt-[4rem] md:mt-[0rem]"
          >
            <Image
              src={bannerImage}
              alt="hero-banner"
              width={1000}
              height={1000}
              loading="lazy"
              className="w-full md:w-auto max-w-[700px] h-auto object-contain"
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default HeroCallingBanner;
