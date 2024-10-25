import Image from "next/image";
import dynamic from "next/dynamic";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import DownloadButton from "@/components/DownloadButton";
import React from "react";

const pdfPath = "../../pdf/ALEX_PROG.pdf";
const newPdf = "../../pdf/pdf-open-parameters.pdf";
const PDFViewer = dynamic(() => import("../components/PDFViewer"), {
  ssr: false,
});

const Home: React.FC = () => {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center justify-center sm:items-start">
        <div className="text-center flex flex-col items-center justify-center mx-auto">
          {/* <PDFViewer fileUrl={newPdf} /> */}
          <div>
            <h1 className="text-4xl mb-4 font-extrabold">
              Kindly Click No This Button To Get Your PDF
            </h1>
          </div>
          <DownloadButton />
        </div>
        <div className="w-[80vw]">
          <div style={{ width: "100%" }}>
            <iframe
              width="100%"
              height="600"
              frameBorder="0"
              scrolling="no"
              marginHeight={0}
              marginWidth={0}
              src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=bortainor%20ma+(Funeral%20location)&t=&z=14&ie=UTF8&iwloc=B&output=embed"
            >
              <a href="https://www.gps.ie/">gps trackers</a>
            </iframe>
          </div>
        </div>
      </main>
      {/* <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"> */}
      <footer className="row-start-3 gap-[80px] flex items-center justify-center">
        <ul className="flex flex-col gap-3">
          <li className="text-lg font-bold dark:text-[#fff] text-black">
            Contact
          </li>
          <li className="text-sm dark:text-[#fff] text-black">
            +233 555 240 3344
          </li>
          <li className="text-sm dark:text-[#fff] text-black">
            info@gmail.com
          </li>
        </ul>
        <ul className="flex flex-col gap-2">
          <li className="text-lg font-bold dark:text-[#fff] text-black">
            Location
          </li>
          <li className="text-sm dark:text-[#fff] text-black">Ghana - Accra</li>
          <li className="text-sm dark:text-[#fff] text-black">
            Bortianor M/A Basic School - GM43+7WR, Bortianor
          </li>
        </ul>
      </footer>
    </div>
  );
};
export default Home;
