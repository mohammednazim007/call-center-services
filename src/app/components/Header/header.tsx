"use client";
import Image from "next/image";
import Headers from "./header.module.css";
import { AlignRight, Search, X } from "lucide-react";
import { useEffect, useState } from "react";
import Menubar from "@/app/shared/menu-bar/menu-bar";
import { AnimatePresence, motion } from "framer-motion";
import SearchBar from "@/app/shared/search-bar/search-bar";
import backgroundImage from "@/app/assets/searchbg.png";
import brandLogo from "@/app/assets/brandLogo.png";
import Link from "next/link";
import DownloadButton from "@/app/shared/downlod-button/download-button";
import TourButton from "@/app/shared/reactour/tour-button/tour-button";

type Mode = "closed" | "menu" | "search";

const Header = () => {
  const [mode, setMode] = useState<Mode>("closed");
  const [scrollProgress, setScrollProgress] = useState(0);

  // smooth scroll to top
  const toggleMode = (newMode: Mode) => {
    setMode((prev) => (prev === newMode ? "closed" : newMode));
  };

  // smooth scroll progress bar
  useEffect(() => {
    if (window === undefined) return;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / scrollHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Disable body scroll when the menu is open
  useEffect(() => {
    document.body.style.overflow = mode !== "closed" ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mode]);

  return (
    <div className={`${Headers.glassBg} sticky w-full top-0 left-0 z-10 `}>
      {/* scrollbar */}
      <div
        className="absolute bottom-0 left-0 h-[3px] bg-[#009dff]"
        style={{
          width: `${scrollProgress}%`,
          transition: "width 0.2s ease-out", // Smooth width change
        }}
      />

      <div className="container mx-auto flex items-center justify-between">
        {/* Left: Brand Image */}
        <Link href="/">
          <Image
            width={45}
            height={45}
            loading="lazy"
            src={brandLogo}
            alt="logo"
          />
        </Link>

        {/* === Right: Icons & Buttons === */}
        <div className="flex items-center gap-4">
          {/* download button */}
          <DownloadButton />

          {/* tour button */}
          <TourButton toggleMode={toggleMode} />

          {/* search button */}
          <Search
            onClick={() => toggleMode("search")}
            className="text-[#009dff] cursor-pointer"
          />
          {mode === "menu" ? (
            <X
              onClick={() => toggleMode("menu")}
              className="text-[#009dff] cursor-pointer"
            />
          ) : (
            <AlignRight
              onClick={() => toggleMode("menu")}
              className="text-[#009dff] cursor-pointer"
            />
          )}
        </div>
      </div>

      {/* === Fullscreen Menubar === */}
      <AnimatePresence>
        {mode === "menu" && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="fixed top-[4.3rem] left-0 w-full h-[calc(100vh-40px)] md:h-[100vh] bg-[#cce5f6] overflow-y-auto"
            style={{ backgroundImage: `url(${backgroundImage.src})` }}
          >
            <Menubar toggleMode={toggleMode} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* === Fullscreen Search Bar === */}
      <AnimatePresence>
        {mode === "search" && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="fixed top-[4.3rem] left-0 w-screen h-[calc(100vh-40px)] md:h-[100vh] bg-[#cce5f6] overflow-y-auto"
            style={{ backgroundImage: `url(${backgroundImage.src})` }}
          >
            <SearchBar />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
