"use client";
import { Download } from "lucide-react";
import { toast } from "react-hot-toast";

const DownloadButton = () => {
  const downloadHandler = () => {
    toast.error("App not available yet", {
      icon: "📥",
      style: {
        borderRadius: "10px",
        background: "#ff6c37",
        color: "#fff",
      },
    });
  };

  return (
    <button
      onClick={downloadHandler}
      className="hidden md:flex items-center gap-2 px-3 py-2 rounded-lg bg-[#30aefc] hover:bg-[#007ec4] text-white transition-all shadow-md hover:shadow-lg active:scale-95"
    >
      <Download className="w-5 h-5" />
      <span>Download</span>
    </button>
  );
};

export default DownloadButton;
