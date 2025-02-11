"use client";
import { useRouter } from "next/navigation";
import { footerData } from "./data";
import Image from "next/image";
import brandLogo from "@/app/assets/brandLogo.png";
import DownloadButton from "../downlod-button/download-button";

const Footer = () => {
  const router = useRouter();
  const forceRoute = ["about-us", "policy-terms"];
  const underMaintenanceRoute = ["feedback", "for-business", "media-inquiries"];

  // Smooth scroll function
  const handleScroll = (slug: string) => {
    const targets = document.getElementById(slug);

    if (forceRoute.includes(slug)) return router.push(`/${slug}`);
    if (underMaintenanceRoute.includes(slug))
      return router.push(`/under-maintenance`);

    if (!forceRoute.includes(slug)) {
      router.push(`/#${slug}`);
      targets?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="px-4 divide-y bg-[#c8ebff] text-gray-800">
      <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
        <div className="lg:w-1/3">
          <div className="flex items-center space-2 gap-3">
            <div className="flex flex-row items-center justify-center w-12 h-12 rounded-full bg-violet-600">
              <Image
                width={100}
                height={100}
                src={brandLogo}
                loading="lazy"
                alt="logo"
              />
            </div>

            {/* === text === */}
            <div>
              <span className="self-center text-2xl font-semibold text-[#009dff]">
                Konvo
              </span>
              <span className="self-center font-semibold block">
                HD video call for free
              </span>
            </div>
          </div>
          <div className="mt-[1.5rem]">
            <DownloadButton />
          </div>
        </div>

        {footerData.length > 0 &&
          footerData.map((item, index) => (
            <div key={index} className="grid grid-cols-2">
              <div className="space-y-3">
                <h3 className="tracking-wide uppercase text-[#30aefc]">
                  {item?.category}
                </h3>
                <ul className="space-y-1">
                  {item?.items?.map((list, index) => (
                    <li key={index}>
                      <button
                        onClick={() => handleScroll(list.slug)}
                        className="text-blue-500 hover:underline"
                      >
                        {list.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
      </div>
      <div className="py-6 text-sm text-center dark:text-gray-600">
        © {new Date().getFullYear()} Company Co. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
