// components/FeaturesList.js

import React from "react";
import HeroCallingBanner from "../../components/hero-calling-banner/hero-calling-banner";
import * as motion from "motion/react-client";

const FeaturesList = () => {
  // Array of objects representing features
  const features = [
    {
      id: 1,
      title: "Real-time Messaging",
      description: "Communicate instantly with your friends and colleagues.",
      icon: "💬", // Emoji as an icon
    },
    {
      id: 2,
      title: "End-to-End Encryption",
      description: "Your conversations are secure and private.",
      icon: "🔒",
    },
    {
      id: 3,
      title: "Cross-Platform Support",
      description: "Access Konvo on any device, anywhere.",
      icon: "📱",
    },
    {
      id: 4,
      title: "Voice and Video Calls",
      description: "Make high-quality voice and video calls.",
      icon: "📞",
    },
    {
      id: 5,
      title: "File Sharing",
      description: "Share documents, images, and videos effortlessly.",
      icon: "📂",
    },
  ];

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="bg-[#cee6f8] py-12 md:pb-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 className="text-3xl md:text-5xl font-bold text-[#009dff] mb-10">
            Key Features of Konvo
          </motion.h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center"
              >
                <span className="text-4xl mb-4">{feature.icon}</span>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* calling component */}
      <HeroCallingBanner />
    </>
  );
};

export default FeaturesList;
