import * as motion from "motion/react-client";
import { Article } from "./latest-articles";
const ArticleCard: React.FC<{ article: Article }> = ({ article }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group relative bg-white/80 backdrop-blur-sm rounded-lg p-8 border border-gray-200 hover:shadow-2xl transition-all duration-300 overflow-hidden hover:bg-gradient-to-br hover:from-white hover:to-blue-50 hover:backdrop-blur-md"
    >
      {/* Animated gradient border */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-[100%] top-0 h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-blue-300/30 to-transparent transition-all duration-500 group-hover:left-[150%]" />
      </div>

      {/* Content */}
      <div className="relative">
        <h3 className="text-2xl font-semibold text-gray-900 mb-2">
          {article.title}
        </h3>
        <p className="text-sm text-gray-500 mt-2 flex items-center">
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          {article.date}
        </p>
        <p className="text-gray-700 mt-4 leading-relaxed">{article.summary}</p>
        <a href="#" className="mt-4 inline-block relative">
          <span className="text-blue-500 hover:underline">Read more</span>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full" />
        </a>
      </div>

      {/* Glow effect */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300" />
    </motion.div>
  );
};

export default ArticleCard;
