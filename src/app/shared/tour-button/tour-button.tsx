"use client";
import { Play } from "lucide-react";

const TourButton = () => {
  return (
    <button>
      <Play className="text-[#009dff] hover:rotate-180 hover:text-teal-500 transition-all duration-300" />
    </button>
  );
};

export default TourButton;
