"use client";
import Image from "next/image";
import brandImage from "@/app/assets/imo.30ad61b6.png";
import Headers from "./header.module.css";
import { AlignRight, Search, X } from "lucide-react";
import { useState } from "react";
import Menubar from "@/app/shared/menu-bar/menu-bar";
import { AnimatePresence } from "motion/react";
import { motion } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`${Headers.glassBg} fixed w-full top-0 left-0 z-50`}>
      <div className="container mx-auto flex items-center justify-between px-4 md:px-8 ">
        {/* left brand image */}
        <div>
          <Image
            width={45}
            height={45}
            loading="lazy"
            src={brandImage}
            alt="logo"
          />
        </div>

        {/* right side content */}
        <div className="flex items-center gap-4">
          <div>
            <Search className="text-[#009dff]" />
          </div>
          <div>
            {isOpen ? (
              <AlignRight
                onClick={() => setIsOpen(false)}
                className="text-[#009dff]"
              />
            ) : (
              <X onClick={() => setIsOpen(true)} />
            )}
          </div>
        </div>
      </div>

      {/* menubar */}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-screen h-[calc(100vh-40px)] md:h-[calc(100vh-80px)] fixed top-[4.3rem] md:top-[4.3rem] left-0 bg-[#cce5f6]"
          >
            <Menubar />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
