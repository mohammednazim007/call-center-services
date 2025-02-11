// import Link from "next/link";
// import { footerData } from "./data";
// import DownloadButton from "../downlod-button/download-button";

// const Footer = () => {
//   return (
//     <div>
//       <footer className="px-4 divide-y bg-[#c8ebff] text-gray-800">
//         <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
//           <div className="lg:w-1/3">
//             <div className="flex items-center space-2 gap-3">
//               <div className="flex flex-row items-center justify-center w-12 h-12 rounded-full bg-violet-600">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 32 32"
//                   fill="currentColor"
//                   className="flex-shrink-0 w-5 h-5 rounded-full text-gray-50"
//                 >
//                   <path d="M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z"></path>
//                 </svg>
//               </div>
//               {/* === text === */}
//               <div>
//                 <span className="self-center text-2xl font-semibold text-[#009dff]">
//                   IMO
//                 </span>
//                 <span className="self-center font-semibold block">
//                   HD video call for free
//                 </span>
//               </div>
//             </div>
//             <div className="mt-[1.5rem]">
//               <DownloadButton />
//             </div>
//           </div>

//           {footerData.length > 0 &&
//             footerData.map((item, index) => (
//               <div key={index} className="grid grid-cols-2">
//                 <div className="space-y-3">
//                   <h3 className="tracking-wide uppercase text-[#30aefc]">
//                     {item?.category}
//                   </h3>
//                   <ul className="space-y-1">
//                     {item?.items?.map((list, index) => (
//                       <li key={index}>
//                         <Link href={list?.slug}>{list?.name}</Link>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             ))}
//         </div>
//         <div className="py-6 text-sm text-center dark:text-gray-600">
//           © {new Date().getFullYear()} Company Co. All rights reserved.
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Footer;
"use client"; // Ensure it's client-side for scrolling
import { useRouter, usePathname } from "next/navigation"; // Next.js navigation
import { footerData } from "./data";
import DownloadButton from "../downlod-button/download-button";

const Footer = () => {
  const router = useRouter();
  const pathname = usePathname(); // Get the current route

  // Smooth scroll function
  const handleScroll = (slug: string) => {
    const targets = document.getElementById(slug);
    if (pathname === "/" && targets === null) return router.push(`/${slug}`);

    if (pathname === "/" && targets !== null) {
      // If on home page, scroll smoothly

      document.getElementById(slug)?.scrollIntoView({ behavior: "smooth" });
    } else {
      console.log(pathname, slug);

      // If on another page, navigate to home and pass the target section
      router.push(`/#${slug}`);
    }
  };

  return (
    <footer className="px-4 divide-y bg-[#c8ebff] text-gray-800">
      <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
        <div className="lg:w-1/3">
          <div className="flex items-center space-2 gap-3">
            <div className="flex flex-row items-center justify-center w-12 h-12 rounded-full bg-violet-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                fill="currentColor"
                className="flex-shrink-0 w-5 h-5 rounded-full text-gray-50"
              >
                <path d="M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z"></path>
              </svg>
            </div>
            {/* === text === */}
            <div>
              <span className="self-center text-2xl font-semibold text-[#009dff]">
                IMO
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
