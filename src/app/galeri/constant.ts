import { GalleryImage } from "@/components/image-gallery/utils/types";
import { StaticImageData } from "next/image";

import atq from "src/images/hero-right.png";

export const PHOTOS: StaticImageData[] = [
  atq,
  atq,
  atq,
  atq,
  atq,
  atq,
  atq,
  atq,
  atq,
  atq,
];

export const imageGallery: GalleryImage[] = [...PHOTOS].map(
  (item, index): GalleryImage => {
    return {
      id: index,
      url: typeof item === 'string' ? item : item.src,
    };
  }
);
