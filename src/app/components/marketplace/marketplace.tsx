import Image from "next/image";
import brandImage from "@/app/assets/marketplace_bg.a408aa11.png";
import marketLogo from "@/app/assets/11tKq9v5bIXQ8.png";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";
import HeroCallingBanner from "../hero-calling-banner/hero-calling-banner";
import HeroVideoBanner from "../hero-video-banner/hero-video-banner";

const MarketPlace = () => {
  return (
    <div className={` bg-white `}>
      <div>
        {/* Container for left and right content */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl px-4 md:px-8 py-[5rem]">
          {/* left side image content */}
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="w-full md:w-auto my-[1rem] mb-[2rem] md:mt-[0rem]"
            >
              <Image
                src={brandImage}
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
                  src={marketLogo}
                  alt="logo"
                  width={50}
                  height={50}
                  loading="lazy"
                  className="w-8 md:w-10 h-8 md:h-10"
                  placeholder="blur"
                />

                <span className="text-[#009dff]">Marketplace</span>
              </div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-4xl md:text-5xl font-bold text-slate-700"
              >
                Buy and Sell Everything Here
              </motion.h1>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-lg md:text-xl text-[#009dff] font-thin mt-4 block"
              >
                Enhance your online shopping experience with great convenience
                and huge traffic.
              </motion.span>
            </div>
          </AnimatePresence>
        </div>

        <HeroCallingBanner />
        <HeroVideoBanner />
      </div>
    </div>
  );
};

export default MarketPlace;
