import React from "react";
import { LucideIcon } from "lucide-react";

interface HelpTopicProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string; // Dynamic color for the icon
}

const HelpTopicCard: React.FC<HelpTopicProps> = ({
  icon: Icon,
  title,
  description,
  color,
}) => {
  return (
    <div className="bg-gray-100 hover:bg-white transition-all p-5 rounded-lg shadow-md flex flex-col items-center text-center w-64">
      <Icon size={48} className={`${color} mb-3`} />
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-600 text-sm mt-1">{description}</p>
    </div>
  );
};

export default HelpTopicCard;
