import React from "react";
import HeroVideoBanner from "../components/hero-video-banner/hero-video-banner";
import * as motion from "motion/react-client";

const policies = [
  {
    title: "Our App",
    content:
      "More than 2 billion people in over 180 countries use Konvo to stay in touch with friends and family, anytime and anywhere. Konvo is free and offers simple, secure, reliable messaging and calling, available on phones all over the world.\n\n And yes, the name Konvo is a pun on the phrase 'Conversation'.\n\n Data charges may apply.",
  },
  {
    title: "Our Mission",
    content:
      "Konvo started as an alternative to SMS. Our product now supports sending and receiving a variety of media: text, photos, videos, documents, and location, as well as voice calls. Some of your most personal moments are shared with Konvo, which is why we built end-to-end encryption into our app. Behind every product decision is our desire to let people communicate anywhere in the world without barriers.",
  },
  {
    title: "Our Team",
    content:
      "Konvo was founded by Jan Koum and Brian Acton who had previously spent 20 years combined at Yahoo. Konvo joined Facebook in 2014, but continues to operate as a separate app with a laser focus on building a messaging service that works fast and reliably anywhere in the world.",
  },
  {
    title: "Our Commitment to Privacy",
    content:
      "At Konvo, we take privacy seriously. Our end-to-end encryption ensures that your messages and calls stay secure, and we do not store any of your communication on our servers. Our commitment is to provide a safe and private messaging experience for everyone.",
  },
  {
    title: "Future Innovations",
    content:
      "We are constantly working on improving Konvo by introducing new features that enhance the messaging experience. From better video call capabilities to interactive media sharing, our team is dedicated to making communication more seamless and engaging for our users worldwide.",
  },
];

const About = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 2 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="bg-[#f0f8ff] pt-[4rem] pb-[5rem]"
      >
        <div className="max-w-5xl mx-auto p-4 sm:p-8 md:py-[2rem] text-gray-800">
          {/* Header Section */}
          <div className="mb-6 sm:mb-8">
            <h2 className="text-3xl sm:text-4xl font-mono font-bold text-[#009dff]">
              About Konvo
            </h2>
            <p className="text-gray-600 mt-2 text-lg sm:text-xl">
              Learn more about our mission, values, and the team behind the app.
            </p>
          </div>
          {/* Policy List */}
          <div className="space-y-6">
            {policies.map((policy, index) => (
              <div
                key={index}
                className="p-6 border border-gray-300 bg-white rounded-xl shadow-sm"
              >
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                  {policy.title}
                </h3>
                <div className="text-gray-700 leading-relaxed">
                  {policy.content.split("\n").map((line, idx) => (
                    <p key={idx} className="mb-2 last:mb-0">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/*  */}
      <HeroVideoBanner />
    </>
  );
};

export default About;
