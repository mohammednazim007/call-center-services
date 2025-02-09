import Image from "next/image";
import rigthImge from "@/app/assets/bg-home-first-image.842b02fa.png";
import herebannerStyles from "./banner.module.css";
import bg_image from "@/app/assets/bg-top.cd690b6a.png";
import windows from "@/app/assets/icon-win-blue.3a090cce.png";
import apple from "@/app/assets/icon-ios-blue.9a8ec9e9.png";
import mac from "@/app/assets/icon-mac-blue.e9c0aaa1.png";
import androids from "@/app/assets/icon-android-blue.992186a1.png";
import DownloadButton from "@/app/shared/download-btn/downloadButton";
import ImageButton from "@/app/shared/image-button/image-button";

const HeroBanner = () => {
  return (
    <div
      className={`${herebannerStyles.heroBanner}  min-w-full flex items-center justify-center pt-[10rem] pb-[5rem] md:h-screen`}
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
        <div className="mb-8 md:mb-0 md:w-1/3">
          <h1 className="text-4xl md:text-5xl font-bold text-[#009dff]">
            Free, Simple, and Secure
          </h1>
          <span className="text-lg md:text-xl text-[#009dff] font-thin mt-4 block">
            Connect with your loved ones through calls and messages.
          </span>

          <DownloadButton />

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

        {/* Right side image content */}
        <div className="w-full md:w-auto mt-[4rem] md:mt-[0rem]">
          <Image
            src={rigthImge}
            alt="hero-banner"
            width={1000}
            height={1000}
            loading="lazy"
            className="w-full md:w-auto max-w-[500px] h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
