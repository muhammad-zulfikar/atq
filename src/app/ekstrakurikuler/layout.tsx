"use client";

import ImageGallery from "@/components/image-gallery/ImageGallery";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { ReactNode } from "react";
import { imageGallery } from "./futsal/constant";
import { Route } from "next";

const DetailtLayout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const thisPathname = usePathname();
  const searchParams = useSearchParams();
  const modal = searchParams?.get("modal");

  const handleCloseModalImageGallery = () => {
    let params = new URLSearchParams(document.location.search);
    params.delete("modal");
    router.push(`${thisPathname}/?${params.toString()}` as Route);
  };

  const getImageGalleryListing = () => {
    if (thisPathname?.includes("/futsal")) {
      return imageGallery;
    }

    return [];
  };

  return (
    <div className="ListingDetailPage">
      <ImageGallery
        isShowModal={modal === "PHOTO_TOUR_SCROLLABLE"}
        onClose={handleCloseModalImageGallery}
        images={getImageGalleryListing()}
      />

      <div className="container ListingDetailPage__content mb-12 lg:mb-24">{children}</div>
    </div>
  );
};

export default DetailtLayout;
