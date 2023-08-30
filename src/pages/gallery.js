import React, { useState, useCallback } from "react";
import ImageViewer from "react-simple-image-viewer";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Navbar from "@/components/layouts/Navbar";
import clsx from "clsx";
import Image from "next/image";

export default function gallery() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const images = [
    "/assets/img/gallery (1).webp",
    "/assets/img/gallery (2).webp",
    "/assets/img/gallery (3).webp",
    "/assets/img/gallery (4).webp",
    "/assets/img/gallery (5).webp",
    "/assets/img/gallery (6).webp",
    "/assets/img/gallery (8).webp",
    "/assets/img/gallery (9).webp",
    "/assets/img/gallery (7).webp",
  ];

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <>
      {/* when isView open, hide navbar */}
      {isViewerOpen ? null : <Navbar />}
      <div className="w-full h-full">
        <div id="bg" className={clsx("absolute top-0 overflow-auto")}>
          <svg
            className="w-full h-screen top-0"
            viewBox="0 0 1691 705"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask id="path-1-inside-1_205_182" fill="white">
              <path d="M1418.83 -0.537598C1418.83 61.1472 1404.25 122.228 1375.92 179.217C1347.6 236.207 1306.08 287.988 1253.74 331.606C1201.39 375.224 1139.26 409.823 1070.87 433.429C1002.48 457.035 929.185 469.185 855.163 469.185C781.141 469.185 707.844 457.035 639.457 433.429C571.07 409.823 508.932 375.224 456.59 331.606C404.249 287.988 362.73 236.207 334.403 179.217C306.076 122.228 291.496 61.1472 291.496 -0.537639L855.163 -0.537598L1418.83 -0.537598Z" />
            </mask>
            <path
              d="M1418.83 -0.537598C1418.83 61.1472 1404.25 122.228 1375.92 179.217C1347.6 236.207 1306.08 287.988 1253.74 331.606C1201.39 375.224 1139.26 409.823 1070.87 433.429C1002.48 457.035 929.185 469.185 855.163 469.185C781.141 469.185 707.844 457.035 639.457 433.429C571.07 409.823 508.932 375.224 456.59 331.606C404.249 287.988 362.73 236.207 334.403 179.217C306.076 122.228 291.496 61.1472 291.496 -0.537639L855.163 -0.537598L1418.83 -0.537598Z"
              stroke="#F5F5F5"
              strokeWidth="4"
              mask="url(#path-1-inside-1_205_182)"
            />
            <mask id="path-2-inside-2_205_182" fill="white">
              <path d="M1539.62 -0.536682C1539.62 74.3663 1521.91 148.536 1487.51 217.737C1453.12 286.938 1402.7 349.816 1339.14 402.781C1275.59 455.745 1200.13 497.759 1117.09 526.423C1034.05 555.087 945.046 569.84 855.163 569.84C765.279 569.84 676.276 555.087 593.234 526.423C510.193 497.759 434.739 455.745 371.182 402.781C307.625 349.816 257.208 286.938 222.811 217.737C188.414 148.536 170.71 74.3662 170.71 -0.536732L855.163 -0.536682H1539.62Z" />
            </mask>
            <path
              d="M1539.62 -0.536682C1539.62 74.3663 1521.91 148.536 1487.51 217.737C1453.12 286.938 1402.7 349.816 1339.14 402.781C1275.59 455.745 1200.13 497.759 1117.09 526.423C1034.05 555.087 945.046 569.84 855.163 569.84C765.279 569.84 676.276 555.087 593.234 526.423C510.193 497.759 434.739 455.745 371.182 402.781C307.625 349.816 257.208 286.938 222.811 217.737C188.414 148.536 170.71 74.3662 170.71 -0.536732L855.163 -0.536682H1539.62Z"
              stroke="#F5F5F5"
              strokeWidth="4"
              mask="url(#path-2-inside-2_205_182)"
            />
            <mask id="path-3-inside-3_205_182" fill="white">
              <path d="M1691 -0.000305176C1691 92.5269 1669.13 184.148 1626.64 269.632C1584.15 355.116 1521.87 432.789 1443.36 498.215C1364.85 563.642 1271.64 615.541 1169.06 650.95C1066.48 686.358 956.533 704.583 845.5 704.583C734.467 704.583 624.522 686.358 521.941 650.95C419.36 615.541 326.153 563.642 247.641 498.215C169.129 432.789 106.85 355.116 64.3598 269.632C21.8695 184.148 -9.70678e-06 92.5268 0 -0.000366772L845.5 -0.000305176H1691Z" />
            </mask>
            <path
              d="M1691 -0.000305176C1691 92.5269 1669.13 184.148 1626.64 269.632C1584.15 355.116 1521.87 432.789 1443.36 498.215C1364.85 563.642 1271.64 615.541 1169.06 650.95C1066.48 686.358 956.533 704.583 845.5 704.583C734.467 704.583 624.522 686.358 521.941 650.95C419.36 615.541 326.153 563.642 247.641 498.215C169.129 432.789 106.85 355.116 64.3598 269.632C21.8695 184.148 -9.70678e-06 92.5268 0 -0.000366772L845.5 -0.000305176H1691Z"
              stroke="#F5F5F5"
              strokeWidth="4"
              mask="url(#path-3-inside-3_205_182)"
            />
            <path
              d="M1298.04 0.268127C1298.04 48.7348 1286.59 96.7268 1264.33 141.504C1242.07 186.281 1209.45 226.967 1168.33 261.238C1127.2 295.509 1078.38 322.695 1024.65 341.242C970.913 359.789 913.323 369.336 855.163 369.336C797.003 369.336 739.412 359.789 685.679 341.242C631.947 322.695 583.124 295.509 541.999 261.238C500.873 226.967 468.251 186.281 445.994 141.504C423.737 96.7268 412.282 48.7347 412.282 0.268095L855.163 0.268127H1298.04Z"
              fill="#F9F9F9"
            />
            <path
              d="M1086.27 -0.000106812C1086.27 31.7235 1080.02 63.1365 1067.88 92.4453C1055.74 121.754 1037.94 148.385 1015.51 170.817C993.079 193.249 966.449 211.043 937.14 223.183C907.831 235.323 876.418 241.571 844.694 241.571C812.971 241.571 781.558 235.323 752.249 223.183C722.94 211.043 696.31 193.249 673.878 170.817C651.446 148.385 633.652 121.754 621.512 92.4453C609.371 63.1365 603.123 31.7235 603.123 -0.00012793L844.694 -0.000106812H1086.27Z"
              fill="#F5F5F5"
            />
          </svg>
        </div>
      </div>
      <div className="container mx-auto mt-32 relative z-40">
        <h1 className="text-5xl font-bold text-start text-primary mt-10 mb-2">
          <span className="text-3xl text-p font-semibold -mb-2">Foto</span>{" "}
          <br /> Galeri
        </h1>
        <p className="text-xl text-p font-light">
          Berikut beberapa project dan kegiatan yang kami ikuti
        </p>
        <div className="mt-12">
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 2, 750: 2, 900: 4 }}
          >
            <Masonry gutter="8px">
              {images.map((src, index) => (
                <Image
                  src={src}
                  onClick={() => openImageViewer(index)}
                  key={index}
                  alt=""
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="h-full w-auto object-cover cursor-pointer"
                />
              ))}
            </Masonry>
          </ResponsiveMasonry>

          {isViewerOpen && (
            <ImageViewer
              src={images}
              width={1200}
              height={800}
              currentIndex={currentImage}
              disableScroll={false}
              closeOnClickOutside={true}
              onClose={closeImageViewer}
              className="z-50"
            />
          )}
        </div>
      </div>
    </>
  );
}
