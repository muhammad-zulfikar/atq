import { GalleryImage } from "@/components/image-gallery/utils/types";

export const PHOTOS: string[] = [
  "/atq.jpeg",
  "/atq.jpeg",
  "/atq.jpeg",
  "/atq.jpeg",
  "/atq.jpeg",
  "/atq.jpeg",
  "/atq.jpeg",
  "/atq.jpeg",
  "/atq.jpeg",
  "/atq.jpeg",
  "/atq.jpeg",
  "/atq.jpeg",
  "/atq.jpeg",
  "/atq.jpeg",
  "/atq.jpeg",
  "/atq.jpeg",
];

export const imageGallery: GalleryImage[] = [...PHOTOS].map(
  (item, index): GalleryImage => {
    return {
      id: index,
      url: item,
    };
  }
);
