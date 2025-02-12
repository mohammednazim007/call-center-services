import { helpTopics } from "./help-center-data";
import HelpTopicCard from "./help-topic-card";
import * as motion from "motion/react-client";

const HelpCenter = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex flex-wrap gap-6 justify-center py-10 md:py-16"
    >
      {helpTopics.map((topic, index) => (
        <HelpTopicCard key={index} {...topic} />
      ))}
    </motion.div>
  );
};

export default HelpCenter;
