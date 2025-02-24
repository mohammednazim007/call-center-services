import * as motion from "motion/react-client";
import ArticleCard from "./article-card";

export interface Article {
  title: string;
  date: string;
  summary: string;
}

const articles: Article[] = [
  {
    title: "Knovo Messenger: The Future of Instant Communication",
    date: "February 24, 2025",
    summary:
      "Knovo Messenger is transforming the way people connect with its latest features, including AI-powered chat assistants, enhanced security, and a seamless user experience.",
  },
  {
    title: "New Feature Alert: Group Video Calls with 100+ Participants",
    date: "February 20, 2025",
    summary:
      "Knovo now supports large-scale group video calls, making it easier than ever to connect with your community, colleagues, and friends all at once.",
  },
  {
    title: "Privacy First: End-to-End Encryption for All Chats and Calls",
    date: "February 15, 2025",
    summary:
      "Your conversations are safer than ever with Knovo’s new end-to-end encryption, ensuring that only you and the recipient can access your messages.",
  },
  {
    title: "How Knovo is Redefining Social Messaging in 2025",
    date: "February 10, 2025",
    summary:
      "Knovo’s latest updates focus on AI-driven messaging, interactive stickers, and new themes, setting a new benchmark in social communication.",
  },
  {
    title: "Knovo Introduces AI Chatbots for Smarter Conversations",
    date: "February 5, 2025",
    summary:
      "AI-powered chatbots are now integrated into Knovo Messenger, helping users automate responses, translate messages, and provide instant support.",
  },
  {
    title: "Dark Mode: A Sleek New Look for Knovo Users",
    date: "January 28, 2025",
    summary:
      "Knovo introduces a new dark mode feature, allowing users to enjoy a stylish and comfortable chatting experience even in low-light environments.",
  },
  {
    title: "Voice Notes Get an Upgrade with AI-Powered Transcription",
    date: "January 20, 2025",
    summary:
      "Users can now convert voice notes into text instantly with Knovo’s new AI-powered transcription feature, making conversations more accessible than ever.",
  },
];

const ArticlesSection: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container py-10"
    >
      <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
        Latest Articles
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 p-6 bg-gray-50 rounded-xl">
        {articles?.map((article, index) => (
          <ArticleCard key={index} article={article} />
        ))}
      </div>
    </motion.div>
  );
};

export default ArticlesSection;
