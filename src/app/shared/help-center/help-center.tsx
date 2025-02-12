"use client";
import { useState } from "react";
import { helpTopics } from "./help-center-data";
import HelpTopicCard from "./help-topic-card";
import * as motion from "motion/react-client";
import { Search } from "lucide-react";

const HelpCenter = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Filter help topics based on search input
  const filteredTopics =
    searchTerm.trim() === ""
      ? helpTopics // Show all topics if input is empty
      : helpTopics.filter((topic) =>
          topic.title.toLowerCase().includes(searchTerm.toLowerCase())
        );

  return (
    <div className="flex flex-col items-center gap-6">
      {/* Search Box */}
      <span className="text-2xl pt-8 font-semibold text-[#43b7de]">
        How can we help you?
      </span>
      <div className="relative w-full max-w-md">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search..."
          className="w-full pl-10 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Help Topics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap gap-6 justify-center pb-10 md:pt-5 md:py-16"
      >
        {filteredTopics.length > 0 ? (
          filteredTopics?.map((topic, index) => (
            <HelpTopicCard key={index} {...topic} />
          ))
        ) : (
          <p className="text-gray-500 text-lg">No results found.</p>
        )}
      </motion.div>
    </div>
  );
};

export default HelpCenter;
