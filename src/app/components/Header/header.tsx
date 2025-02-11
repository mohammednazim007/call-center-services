"use client";
import Image from "next/image";
import Headers from "./header.module.css";
import { AlignRight, Search, X } from "lucide-react";
import { useState } from "react";
import Menubar from "@/app/shared/menu-bar/menu-bar";
import { AnimatePresence } from "motion/react";
import { motion } from "framer-motion";
import SearchBar from "@/app/shared/search-bar/search-bar";
import backgroundImage from "@/app/assets/searchbg.png";
import brandLogo from "@/app/assets/brandLogo.png";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearch, setIsSearch] = useState(false);

  const handleSearch = () => {
    setIsSearch(!isSearch);
    setIsOpen(false);
  };

  const handleMenu = () => {
    setIsOpen(!isOpen);
    setIsSearch(false);
  };

  return (
    <div className={`${Headers.glassBg} sticky w-full top-0 left-0 z-50`}>
      <div className="container mx-auto flex items-center justify-between px-4 md:px-8 ">
        {/* left brand image */}
        <Link href={"/"}>
          <Image
            width={45}
            height={45}
            loading="lazy"
            src={brandLogo}
            alt="logo"
          />
        </Link>

        {/* right side content */}
        <div className="flex items-center gap-4">
          <div>
            <Search onClick={handleSearch} className="text-[#009dff]" />
          </div>
          <div>
            {isOpen ? (
              <X onClick={handleMenu} className="text-[#009dff]" />
            ) : (
              <AlignRight onClick={handleMenu} className="text-[#009dff]" />
            )}
          </div>
        </div>
      </div>

      {/* === fullscreen menubar === */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-screen h-[calc(100vh-40px)] md:h-[calc(100vh-80px)] fixed top-[4.3rem] md:top-[4.3rem] left-0 bg-[#cce5f6] overflow-y-auto"
          >
            <Menubar />
          </motion.div>
        )}
      </AnimatePresence>

      {/* === fullscreen search bar === */}
      <AnimatePresence>
        {isSearch && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-screen h-[calc(100vh-40px)] md:h-[calc(100vh-80px)] fixed top-[4.3rem] md:top-[4.2rem] left-0 bg-[#cce5f6] overflow-y-auto"
            style={{
              backgroundImage: `url(${backgroundImage.src})`,
            }}
          >
            <SearchBar />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
