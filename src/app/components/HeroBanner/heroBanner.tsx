// import Image from "next/image";
// import rigthImge from "@/app/assets/bg-home-first-image.842b02fa.png";
// import herebannerStyles from "./banner.module.css";
// import bg_image from "@/app/assets/bg-top.cd690b6a.png";

// const HeroBanner = () => {
//   return (
//     <div
//       className={`${herebannerStyles.heroBanner} h-[100vh] min-w-full`}
//       style={{
//         backgroundImage: `url(${bg_image.src})`,
//       }}
//     >
//       <div>
//         {/* left side text content */}
//         <div>
//           <h1>Free, Simple, and Secure</h1>
//           <span> Connect with your loved ones through calls and messages.</span>
//         </div>

//         {/* right side image content */}
//         <div>
//           <Image
//             width={500}
//             height={500}
//             loading="lazy"
//             src={rigthImge}
//             alt="hero-banner"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroBanner;
import Image from "next/image";
import rigthImge from "@/app/assets/bg-home-first-image.842b02fa.png";
import herebannerStyles from "./banner.module.css";
import bg_image from "@/app/assets/bg-top.cd690b6a.png";
import DownloadButton from "@/app/shared/download-btn/downloadButton";

const HeroBanner = () => {
  return (
    <div
      className={`${herebannerStyles.heroBanner} h-[100vh] min-w-full flex items-center justify-center -mt-[0rem]`}
      style={{
        backgroundImage: `url(${bg_image.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Container for left and right content */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl px-4 md:px-8">
        {/* Left side text content */}
        <div className="text-center md:text-left mb-8 md:mb-0 md:w-1/3">
          <h1 className="text-4xl md:text-5xl font-bold text-[#009dff]">
            Free, Simple, and Secure
          </h1>
          <span className="text-lg md:text-xl text-[#009dff] font-thin mt-4 block">
            Connect with your loved ones through calls and messages.
          </span>

          <DownloadButton />
        </div>

        {/* Right side image content */}
        <div className="w-full md:w-auto">
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
