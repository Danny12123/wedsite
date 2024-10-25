"use client";

import React from "react";

const DownloadButton: React.FC = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/pdf/ALEX_PROG.pdf";
    link.download = "ALEX_PROG.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleDownload}
      style={{ padding: "10px 20px", fontSize: "16px" }}
      className="border border-gray-400 dark:text-white text-[#000] rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
    >
      Download PDF
    </button>
  );
};

export default DownloadButton;
