import React, { useState, useCallback } from "react";
import ImageViewer from "react-simple-image-viewer";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Navbar from "@/components/layouts/Navbar";
import clsx from "clsx";
import Image from "next/image";
import BgImage from "@/svg/BgImage";

export default function Gallery() {
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
        <BgImage />
      </div>
      <div className="container mx-auto mt-32 relative z-40">
        <h1 className="text-5xl font-bold text-start text-primary mt-10 mb-2">
          <span className="text-3xl text-p font-semibold -mb-2">Foto</span>{" "}
          <br /> Galeri
        </h1>
        <p className="text-xl text-p font-light">
          Berikut dokumentasi dari beberapa project dan kegiatan yang kami ikuti
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
