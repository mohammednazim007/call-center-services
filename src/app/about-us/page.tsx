import React from "react";

const policies = [
  {
    title: "Our App",
    content:
      "More than 2 billion people in over 180 countries use WhatsApp1 to stay in touch with friends and family, anytime and anywhere. WhatsApp is free2 and offers simple, secure, reliable messaging and calling, available on phones all over the world.\n\n1 And yes, the name WhatsApp is a pun on the phrase What's Up.\n\n2 Data charges may apply.",
  },
  {
    title: "Our Mission",
    content:
      "WhatsApp started as an alternative to SMS. Our product now supports sending and receiving a variety of media: text, photos, videos, documents, and location, as well as voice calls. Some of your most personal moments are shared with WhatsApp, which is why we built end-to-end encryption into our app. Behind every product decision is our desire to let people communicate anywhere in the world without barriers.",
  },
  {
    title: "Our Team",
    content:
      "WhatsApp was founded by Jan Koum and Brian Acton who had previously spent 20 years combined at Yahoo. WhatsApp joined Facebook in 2014, but continues to operate as a separate app with a laser focus on building a messaging service that works fast and reliably anywhere in the world.",
  },
  {
    title: "Our Commitment to Privacy",
    content:
      "At WhatsApp, we take privacy seriously. Our end-to-end encryption ensures that your messages and calls stay secure, and we do not store any of your communication on our servers. Our commitment is to provide a safe and private messaging experience for everyone.",
  },
  {
    title: "Future Innovations",
    content:
      "We are constantly working on improving WhatsApp by introducing new features that enhance the messaging experience. From better video call capabilities to interactive media sharing, our team is dedicated to making communication more seamless and engaging for our users worldwide.",
  },
];

const about = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg text-gray-800">
      <h2 className="text-2xl font-semibold mb-4 text-blue-600">
        Software Policy
      </h2>
      <ul className="space-y-4">
        {policies.map((policy, index) => (
          <li
            key={index}
            className="p-4 border border-gray-300 rounded-lg bg-gray-50"
          >
            <h3 className="text-lg font-semibold text-gray-900">
              {policy.title}
            </h3>
            <p className="text-gray-700 mt-2">{policy.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default about;
