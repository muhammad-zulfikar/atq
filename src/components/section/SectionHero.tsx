import React, { FC } from "react";
import Image from "next/image";
import ButtonPrimary from "@/shared/ButtonPrimary";
import ButtonSecondary from "@/shared/ButtonSecondary";
import styles from "@/styles/SectionHero.module.css";

export interface SectionHeroProps {
  className?: string;
}

import heroRight1 from "src/images/hero-right.png";
import heroRight2 from "src/images/hero-right-2.png";
import heroRight3 from "src/images/hero-right-3.png";

const SectionHero: FC<SectionHeroProps> = ({ className = "" }) => {
  const images = [
    heroRight1,
    heroRight2,
    heroRight3,
  ];

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
        <div className={`flex-grow mt-10 lg:mt-0 p-0 relative overflow-hidden ${styles.card}`}>
          <div className={styles.imageContainer}>
            {images.map((image, index) => (
              <div key={index} className={styles.imageWrapper}>
                <Image className="w-full xl:h-[400px]" src={image} alt={`Hero Image ${index + 1}`} priority width={900} height={700} />
              </div>
            ))}
          </div>
        </div>
        <div>
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
