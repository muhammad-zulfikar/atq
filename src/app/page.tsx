"use client";

import React from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import BackgroundSection from "@/components/BackgroundSection";
import BgGlassmorphism from "@/components/BgGlassmorphism";

import SectionHero from "@/components/section/SectionHero";
import SectionProfile from "@/components/section/SectionProfile";
import SectionFacility from "@/components/section/SectionFacility";
import SectionExtracurricular from "@/components/section/SectionExtracurricular";
import SectionBlog from "../components/section/SectionBlog";

import SectionGallery from "../components/section/SectionGallery";
import ImageGallery from "@/components/image-gallery/ImageGallery";
import { imageGallery } from "./galeri/constant";

import SectionContact from "@/components/section/SectionContact";
import SectionAddress from "@/components/section/SectionAddress";

import { Route } from "next";

function PageHome() {
  const router = useRouter();
  const thisPathname = usePathname();
  const searchParams = useSearchParams();
  const modal = searchParams?.get("modal");

  const handleOpenModalImageGallery = () => {
    router.push(`${thisPathname}/?modal=PHOTO_TOUR_SCROLLABLE` as Route);
  };

  const handleCloseModalImageGallery = () => {
    let params = new URLSearchParams(document.location.search);
    params.delete("modal");
    router.push(`${thisPathname}/?${params.toString()}` as Route);
  };

  return (
    <main className="nc-PageHome relative overflow-hidden">
      <BgGlassmorphism />

      <div className="container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28">
        <SectionHero className="pt-10 lg:pt-16" />

        <div className="relative pt-16">
          <BackgroundSection />
          <SectionProfile />
        </div>

        <SectionFacility categoryCardType="card5" />

        <SectionExtracurricular />

        <SectionGallery onOpenModal={handleOpenModalImageGallery} />
        
        <SectionBlog />

        <SectionContact />

        <SectionAddress />
      </div>

      <ImageGallery
        isShowModal={modal === "PHOTO_TOUR_SCROLLABLE"}
        onClose={handleCloseModalImageGallery}
        images={imageGallery}
      />
    </main>
  );
}

export default PageHome;