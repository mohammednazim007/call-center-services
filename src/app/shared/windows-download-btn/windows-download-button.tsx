import Image from "next/image";
import downloadStyle from "./download.module.css";
import windows from "@/app/assets/icon-win-btn.0a86f5cb.png";
import * as motion from "motion/react-client";

const WindowsDownloadButton = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.1, delay: 0.5 }}
    >
      <button
        className={`${downloadStyle.downloadBtn} flex items-center gap-x-3`}
      >
        <span>
          <Image
            src={windows}
            alt="windows"
            width={20}
            height={20}
            loading="lazy"
          />
        </span>
        Download for windows
      </button>
    </motion.div>
  );
};

export default WindowsDownloadButton;
