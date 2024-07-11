import React, { FC } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import ButtonPrimary from "@/shared/ButtonPrimary";
import ButtonSecondary from "@/shared/ButtonSecondary";

export interface SectionHeroProps {
  className?: string;
}

const images = [
  { src: "/images/hero-right.png", alt: "Hero 1" },
  { src: "/images/hero-right-2.png", alt: "Hero 2" },
  { src: "/images/hero-right-3.png", alt: "Hero 3" },
];

const SectionHero: FC<SectionHeroProps> = ({ className = "" }) => {
  return (
    <div className={`nc-SectionHero flex flex-col-reverse lg:flex-col relative ${className}`}>
      <div className="flex flex-col lg:flex-row lg:items-center mt-5 lg:mt-0">
        <div className="flex-shrink-0 lg:w-1/2 flex flex-col items-start space-y-8 sm:space-y-10 sm:pb-4 xl:pr-14 lg:mr-10 xl:mr-0">
          <h2 className="font-medium text-5xl xl:text-7xl !leading-[114%]">
            Sekolah Dasar Islam Terpadu At-Taufiq
          </h2>
          <span className="text-base md:text-lg text-neutral-500 dark:text-neutral-400">
            Cerdas, Kreatif, Mandiri, dan Islami
          </span>
          <div className="gap-5 hidden md:flex">
            <ButtonPrimary href="/ppdb" sizeClass="px-5 py-4 sm:px-7">
              Daftar Sekarang!
            </ButtonPrimary>
            <ButtonSecondary href="/ppdb" sizeClass="px-5 py-4 sm:px-7">
              Hubungi Kami
            </ButtonSecondary>
          </div>
        </div>
        <div className="flex-grow mt-10 lg:mt-0 p-0">
          <Carousel
            autoPlay={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            showArrows={false}
            interval={3000}
            className="rounded-xl overflow-hidden"
          >
            {images.map((image, index) => (
              <div key={index}>
                <Image className="w-full xl:h-[400px]" src={image.src} alt={image.alt} priority width={900} height={700} />
              </div>
            ))}
          </Carousel>
          <div className="flex gap-5 md:hidden pt-10">
            <ButtonPrimary href="/ppdb" sizeClass="px-5 py-4 sm:px-7">
              Daftar Sekarang!
            </ButtonPrimary>
            <ButtonSecondary href="/ppdb" sizeClass="px-5 py-4 sm:px-7">
              Hubungi Kami
            </ButtonSecondary>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionHero;
