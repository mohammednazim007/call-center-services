import React from "react";
import { callCenterData } from "./menu";
import { CallCenterCategory, CallCenterItem } from "./types"; // Import the type
import menuStyle from "./menu.module.css";
import Link from "next/link";

const Menubar: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      {/* Responsive Grid for Menu Items */}
      <div className={menuStyle.customGrid}>
        {callCenterData.length > 0 &&
          callCenterData.map((category: CallCenterCategory) => (
            <div key={category._id} className="p-4 shadow-sm ">
              {/* Category Name */}
              <strong className="text-gray-700 text-xl mb-2 block capitalize">
                {category.category}
              </strong>

              {/* Sub-Items List */}
              <ul>
                {category.items.map((item: CallCenterItem) => (
                  <li
                    key={item._id}
                    className=" hover:bg-[#d9ecfb] transition-all block capitalize text-[18px] cursor-pointer  rounded-sm py-4 p-3 group"
                  >
                    <Link
                      href={`${item.link}`}
                      className="text-gray-700 block group-hover:tracking-wider transition-all"
                    >
                      {item.name}
                    </Link>
                    <span className="text-gray-700 block text-sm line-clamp-1">
                      {item.description}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Menubar;
