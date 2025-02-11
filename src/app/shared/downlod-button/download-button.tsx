import { Download } from "lucide-react";
import React from "react";

const DownloadButton = () => {
  return (
    <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#007ec4] hover:bg-[#30aefc] text-white font-medium transition-all shadow-md hover:shadow-lg active:scale-95">
      <Download className="w-5 h-5" />
      <span>Download</span>
    </button>
  );
};

export default DownloadButton;
