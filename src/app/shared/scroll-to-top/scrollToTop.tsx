"use client";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

const ScrollToTop: React.FC = () => {
  const [scrollPercent, setScrollPercent] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;
      const percent = (scrollTop / (scrollHeight - clientHeight)) * 100;

      setScrollPercent(percent);
      setIsVisible(scrollTop > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {/* Scroll-To-Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`p-3 rounded-full bg-[#FF2DF1] text-white shadow-lg transition-opacity relative ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <ArrowUp size={24} className="text-white" />
        {/* Circular Progress Indicator */}
        <svg
          className="absolute inset-0"
          width="48"
          height="48"
          viewBox="0 0 50 50"
        >
          <circle
            cx="25"
            cy="25"
            r="22"
            fill="none"
            stroke="#FFEFC8"
            strokeWidth="6"
            strokeDasharray="138"
            strokeDashoffset={`${138 - scrollPercent * 1.38}`}
            strokeLinecap="round"
          />
        </svg>
      </button>
    </div>
  );
};

export default ScrollToTop;
