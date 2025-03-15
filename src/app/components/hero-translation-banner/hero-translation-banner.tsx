import Image from "next/image";
import brandImage from "@/app/assets/bg-translate.9257ccaa.png";
import securityLogo from "@/app/assets/icon-translate.5479bb7f.png";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";

const HeroTranslationBanner = () => {
  return (
    <div
      className={`min-w-full flex items-center justify-center pt-[10rem] pb-[5rem] md:h-screen bg-[#c8ebff]`}
      id="translation"
    >
      {/* Container for left and right content */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl px-4 md:px-8 ">
        {/* left side image content */}
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 1, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
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
                src={securityLogo}
                alt="logo"
                width={50}
                height={50}
                loading="lazy"
                className="w-8 md:w-12 h-8 md:h-12"
                placeholder="blur"
              />
              <span className="text-[#29adff]">Translation</span>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-[#29adff]"
            >
              Instant Message Translation
            </motion.h1>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-lg md:text-xl text-[#29adff] font-thin mt-4 block"
            >
              Keep your account secure with 2-step verification, spam blocking,
              and more.
            </motion.span>
          </div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default HeroTranslationBanner;
