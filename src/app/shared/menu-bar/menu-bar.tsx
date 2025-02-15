import React from "react";
import { callCenterData } from "./menu";
import { CallCenterCategory, CallCenterItem, MenubarProps } from "./types"; // Import the types
import menuStyle from "./menu.module.css";
import Link from "next/link";
import NavSlider from "../nav-slider/nav-slider";

const Menubar: React.FC<MenubarProps> = ({ toggleMode }) => {
  return (
    <div className="container mx-auto px-4 lg:px-8">
      {/* Responsive Grid for Menu Items */}
      <div className={menuStyle.customGrid}>
        {callCenterData.length > 0 &&
          callCenterData.map((category: CallCenterCategory) => (
            <div key={category._id} className="pt-4">
              {/* Category Name */}
              <strong
                data-tour-element={category?.category}
                className="text-gray-700 text-xl mb-2 block capitalize"
              >
                {category.category}
              </strong>

              {/* Sub-Items List */}
              <ul>
                {category.items.map((item: CallCenterItem) => (
                  <Link
                    key={item._id}
                    href={`${item.link}`}
                    className="text-gray-700 block group-hover:tracking-wider transition-all"
                    onClick={() => toggleMode("closed")} // Close the menu on link click
                  >
                    <li className="hover:bg-[#d9ecfb] transition-all capitalize text-[18px] cursor-pointer rounded-sm py-4 p-3 group flex gap-2 ">
                      <item.icon
                        className="mt-[5px]"
                        color={item.iconColor}
                        size={35}
                      />
                      <div>
                        <span className="group-hover:tracking-wider transition-all">
                          {item.name}
                        </span>
                        <span className="text-gray-700 block text-sm line-clamp-1">
                          {item.description}
                        </span>
                      </div>
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          ))}

        {/* === add slider for navbar side === */}
        <div>
          <strong
            data-tour-element="tutorials"
            className="text-gray-700 text-xl mb-2 block capitalize mt-4"
          >
            Tutorials
          </strong>
          <div className="py-4">
            <NavSlider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menubar;
