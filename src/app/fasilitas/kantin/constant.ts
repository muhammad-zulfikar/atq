import { GalleryImage } from "@/components/image-gallery/utils/types";

export const PHOTOS: string[] = [
  "https://images.pexels.com/photos/5506019/pexels-photo-5506019.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/5506019/pexels-photo-5506019.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/5506019/pexels-photo-5506019.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/5506019/pexels-photo-5506019.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/5506019/pexels-photo-5506019.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/5506019/pexels-photo-5506019.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/5506019/pexels-photo-5506019.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/5506019/pexels-photo-5506019.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
];

export const imageGallery: GalleryImage[] = [...PHOTOS].map(
  (item, index): GalleryImage => {
    return {
      id: index,
      url: item,
    };
  }
);
