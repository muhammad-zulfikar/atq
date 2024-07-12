import { GalleryImage } from "@/components/image-gallery/utils/types";

export const PHOTOS: string[] = [
  "https://images.pexels.com/photos/12904930/pexels-photo-12904930.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  "https://images.pexels.com/photos/12904930/pexels-photo-12904930.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  "https://images.pexels.com/photos/12904930/pexels-photo-12904930.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  "https://images.pexels.com/photos/12904930/pexels-photo-12904930.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  "https://images.pexels.com/photos/12904930/pexels-photo-12904930.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  "https://images.pexels.com/photos/12904930/pexels-photo-12904930.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  "https://images.pexels.com/photos/12904930/pexels-photo-12904930.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  "https://images.pexels.com/photos/12904930/pexels-photo-12904930.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
];

export const imageGallery: GalleryImage[] = [...PHOTOS].map(
  (item, index): GalleryImage => {
    return {
      id: index,
      url: item,
    };
  }
);
