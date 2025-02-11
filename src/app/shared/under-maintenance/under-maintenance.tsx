import Link from "next/link";
import * as motion from "motion/react-client";

const UnderMaintenance = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 2 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="flex flex-col items-center justify-center md:min-h-screen py-10 bg-[#ffffff] p-5"
    >
      <span className="text-4xl font-bold text-[#14a5ff] mb-4">
        Under Maintenance
      </span>
      <p className="text-lg text-gray-600 mb-8">
        We are currently performing maintenance. Please check back soon!
      </p>

      <Link
        href="/"
        className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
      >
        Go Back Home
      </Link>
    </motion.div>
  );
};

export default UnderMaintenance;
