import Image from "next/image";
import rigthImge from "@/app/assets/bg-home-first-image.842b02fa.png";
import heroBannerStyles from "./banner.module.css";
import bg_image from "@/app/assets/bg-top.cd690b6a.png";
import windows from "@/app/assets/icon-win-blue.3a090cce.png";
import apple from "@/app/assets/icon-ios-blue.9a8ec9e9.png";
import mac from "@/app/assets/icon-mac-blue.e9c0aaa1.png";
import androids from "@/app/assets/icon-android-blue.992186a1.png";
import ImageButton from "@/app/shared/image-button/image-button";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";
import WindowsDownloadButton from "@/app/shared/windows-download-btn/windows-download-button";

const HeroBanner = () => {
  return (
    <div
      className={`${heroBannerStyles.heroBanner}  min-w-full flex items-center justify-center pt-[6rem] pb-[5rem] md:h-screen`}
      style={{
        backgroundImage: `url(${bg_image.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Container for left and right content */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl px-4 md:px-8 ">
        {/* Left side text content */}
        <AnimatePresence>
          <div className="mb-8 md:mb-0 md:w-1/3">
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-6xl md:text-5xl font-bold text-[#009dff]"
            >
              Free, Simple, and Secure
            </motion.h1>
            <span className="text-lg md:text-xl text-[#009dff] font-thin mt-4 block">
              Connect with your loved ones through calls and messages.
            </span>

            <WindowsDownloadButton />

            {/* == image button == */}
            <div className="flex items-center mt-6 gap-x-2">
              <ImageButton url={windows.src} />
              <ImageButton url={mac.src} />
              <ImageButton url={apple.src} />
              <ImageButton url={androids.src} />
              <span className="inline-block text-sm text-[#08adfd] cursor-pointer">
                More version
              </span>
            </div>
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
              src={rigthImge}
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

export default HeroBanner;
