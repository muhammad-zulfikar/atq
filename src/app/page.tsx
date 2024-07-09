"use client";

import React, { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import BackgroundSection from "@/components/BackgroundSection";
import BgGlassmorphism from "@/components/BgGlassmorphism";
import SectionHero from "@/components/section/SectionHero";
import SectionProfile from "@/components/section/SectionProfile";
import SectionFacility from "@/components/section/SectionFacility";
import SectionExtracurricular from "@/components/section/SectionExtracurricular";
import BlogPage from "./blog/ForHomePage";
import ImageGallery from "@/components/image-gallery/ImageGallery";
import SectionGallery from "./galeri/ForHomePage"; 
import { imageGallery } from "./galeri/constant";
import PageContact from "./contact/page";

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
      {/* GLASSMORPHISM */}
      <BgGlassmorphism />

      <div className="container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28">
        {/* SECTION HERO */}
        <SectionHero className="pt-10 lg:pt-16" />

        {/* SECTION PROFILE */}
        <div className="relative py-16">
          <BackgroundSection />
          <SectionProfile />
        </div>

        {/* SECTION FACILITY */}
        <SectionFacility categoryCardType="card5" />

        {/* SECTION EXTRACURRICULAR */}
        <SectionExtracurricular />

        {/* SECTION BLOG */}
        <BlogPage />

        {/* SECTION GALLERY */}
        <SectionGallery onOpenModal={handleOpenModalImageGallery} />

        {/* SECTION CONTACT */}
        <PageContact />
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