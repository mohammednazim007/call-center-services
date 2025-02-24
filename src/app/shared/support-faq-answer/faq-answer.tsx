"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FAQ, faqs } from "./data";

const FAQItem: React.FC<{ faq: FAQ }> = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="border-b border-gray-300 py-4 cursor-pointer"
    >
      <button
        className="w-full text-left flex justify-between items-center p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition-all duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <svg
            className="w-6 h-6 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </motion.span>
      </button>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="text-gray-700 p-4">{faq.answer}</p>
      </motion.div>
    </motion.div>
  );
};

const FAQSection: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto p-6 bg-white shadow-xl rounded-xl"
    >
      <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
        Frequently Asked Questions
      </h2>
      <div className="divide-y divide-gray-300">
        {faqs.map((faq, index) => (
          <FAQItem key={index} faq={faq} />
        ))}
      </div>
    </motion.div>
  );
};

export default FAQSection;
