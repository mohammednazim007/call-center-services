import { Download } from "lucide-react";
import React from "react";

const DownloadButton = () => {
  return (
    <button className="hidden md:flex items-center gap-2 px-3 py-2 rounded-lg bg-[#30aefc] hover:bg-[#007ec4] text-white transition-all shadow-md hover:shadow-lg active:scale-95">
      <Download className="w-5 h-5" />
      <span>Download</span>
    </button>
  );
};

export default DownloadButton;
