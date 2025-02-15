"use client";
import { Play } from "lucide-react";
import { useTour } from "@reactour/tour";
import { MenubarProps } from "../../menu-bar/types";

const TourButton: React.FC<MenubarProps> = ({ toggleMode }) => {
  const { setIsOpen } = useTour();

  // const handleClick = () => {
  //   toggleMode("menu");
  //   setIsOpen(true);
  // };

  const handleClick = () => {
    toggleMode("menu");

    // Wait for elements to appear before starting the tour
    const checkElements = setInterval(() => {
      const blogElement = document.querySelector(`[data-tour-element="blog"]`);
      if (blogElement) {
        setIsOpen(true);
        clearInterval(checkElements);
      }
    }, 500); // Check every 300ms

    setTimeout(() => clearInterval(checkElements), 3000); // Stop checking after 3s
  };

  return (
    <button onClick={handleClick}>
      <Play className="text-[#009dff] hover:rotate-180 hover:text-teal-500 transition-all duration-300" />
    </button>
  );
};

export default TourButton;
