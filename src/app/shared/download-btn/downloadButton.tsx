import Image from "next/image";
import downloadStyle from "./download.module.css";
import windows from "@/app/assets/icon-win-btn.0a86f5cb.png";

const DownloadButton = () => {
  return (
    <div>
      <button
        className={`${downloadStyle.downloadBtn} flex items-center gap-x-3`}
      >
        <span>
          <Image
            src={windows}
            alt="windows"
            width={20}
            height={20}
            className=""
          />
        </span>
        Download for windows
      </button>
    </div>
  );
};

export default DownloadButton;
