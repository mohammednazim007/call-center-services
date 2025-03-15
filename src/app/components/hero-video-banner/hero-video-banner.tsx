import Image from "next/image";
import leftImage from "@/app/assets/bg-video-call.6259fb3f.png";
import windows from "@/app/assets/icon-win-blue.3a090cce.png";
import apple from "@/app/assets/icon-ios-blue.9a8ec9e9.png";
import mac from "@/app/assets/icon-mac-blue.e9c0aaa1.png";
import androids from "@/app/assets/icon-android-blue.992186a1.png";
import videoLogo from "@/app/assets/icon-video-light.d5af9c91.png";
import ImageButton from "@/app/shared/image-button/image-button";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";

const HeroVideoBanner = () => {
  return (
    <div
      className={`min-w-full flex items-center justify-center pt-[10rem] pb-[5rem] md:h-screen bg-[#009dff]`}
      id="audio-video-call"
    >
      {/* Container for left and right content */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl px-4 md:px-8 ">
        {/* left side image content */}
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-full md:w-auto my-[1rem] mb-[2rem] md:mt-[0rem]"
          >
            <Image
              src={leftImage}
              alt="hero-banner"
              width={1500}
              height={1500}
              loading="lazy"
              className="w-full md:w-auto max-w-[700px] h-full object-cover"
              placeholder="blur"
            />
          </motion.div>
        </AnimatePresence>

        {/* right side text content */}
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
                placeholder="blur"
              />
              <span>Audio & Video</span>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-white"
            >
              Free, Secure, HD Calls
            </motion.h1>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-lg md:text-xl text-white font-thin mt-4 block"
            >
              Connect with your loved ones through calls and messages.
            </motion.span>

            {/* == image button == */}
            <div className="flex items-center mt-6 gap-x-2">
              <ImageButton url={windows.src} />
              <ImageButton url={mac.src} />
              <ImageButton url={apple.src} />
              <ImageButton url={androids.src} />
              <span className="inline-block text-sm text-white cursor-pointer">
                More version
              </span>
            </div>
          </div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default HeroVideoBanner;
