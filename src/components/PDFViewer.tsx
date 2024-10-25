"use client";

import React from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

// Import styles
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

interface PDFViewerProps {
  fileUrl: string;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ fileUrl }) => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <Worker
      workerUrl={`https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.js`}
    >
      <div style={{ width: "900px", height: "750px" }}>
        <Viewer
          fileUrl={fileUrl}
          plugins={[
            // Register plugins
            defaultLayoutPluginInstance,
          ]}
        />
      </div>
    </Worker>
  );
};

export default PDFViewer;
