"use client";

import React, { FC } from "react";
import Image from "next/image";
import { PHOTOS } from "@/app/galeri/constant";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

export interface SectionGalleryProps { }

const SectionGallery: FC<{ onOpenModal: () => void }> = ({ onOpenModal }) => {
  const handleOpenModalImageGallery = () => {
    onOpenModal();
  };

  return (
    <div className="nc-ListingStayDetailPage">
      <h2 className="font-semibold text-3xl md:text-4xl text-left flex items-center">
        Galeri
        <a href="/galeri" className="ml-4 p-2 bg-neutral-200 dark:bg-neutral-800 dark:bg-opacity-50 rounded-lg hover:bg-neutral-300 dark:hover:bg-neutral-800">
          <ChevronRightIcon className="h-4 w-4 text-neutral-500 dark:text-neutral-400" />
        </a>
      </h2>
      <header className="rounded-md sm:rounded-xl mt-10">
        <div className="relative grid grid-cols-3 sm:grid-cols-4 gap-1 sm:gap-2">
          <div
            className="col-span-2 row-span-3 sm:row-span-2 relative rounded-md sm:rounded-xl overflow-hidden cursor-pointer"
            onClick={handleOpenModalImageGallery}
          >
            <Image
              fill
              className="object-cover rounded-md sm:rounded-xl"
              src={PHOTOS[0]}
              alt=""
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            />
            <div className="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity"></div>
          </div>
          {PHOTOS.filter((_, i) => i >= 1 && i < 5).map((item, index) => (
            <div
              key={index}
              className={`relative rounded-md sm:rounded-xl overflow-hidden ${index >= 3 ? "hidden sm:block" : ""}`}
            >
              <div className="aspect-w-4 aspect-h-3 sm:aspect-w-6 sm:aspect-h-5">
                <Image
                  fill
                  className="object-cover rounded-md sm:rounded-xl "
                  src={item || ""}
                  alt=""
                  sizes="400px"
                />
              </div>
              <div
                className="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity cursor-pointer"
                onClick={handleOpenModalImageGallery}
              />
            </div>
          ))}
        </div>
      </header>
    </div>
  );
};

export default SectionGallery;

