"use client";

import React, { FC } from "react";
import { TaxonomyType } from "@/data/types";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";

export interface PageFacilityProps {
  className?: string;
  heading?: string;
  subHeading?: string;
  categories?: TaxonomyType[];
}

const DEMO_CATS: TaxonomyType[] = [
  {
    id: "1",
    href: "/fasilitas/kelas",
    name: "Ruang Kelas",
    taxonomy: "category",
    thumbnail:
      "https://images.pexels.com/photos/256395/pexels-photo-256395.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "2",
    href: "/fasilitas/lapangan",
    name: "Lapangan",
    taxonomy: "category",
    thumbnail:
      "https://images.pexels.com/photos/5896843/pexels-photo-5896843.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
  },
  {
    id: "3",
    href: "/fasilitas/masjid",
    name: "Masjid",
    taxonomy: "category",
    thumbnail:
      "https://images.pexels.com/photos/326716/pexels-photo-326716.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "4",
    href: "/fasilitas/kantin",
    name: "Kantin",
    taxonomy: "category",
    thumbnail:
      "https://images.pexels.com/photos/5506019/pexels-photo-5506019.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "5",
    href: "/fasilitas/uks",
    name: "Unit Kesehatan Sekolah (UKS)",
    taxonomy: "category",
    thumbnail:
      "https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "6",
    href: "/fasilitas/lab-komputer",
    name: "Lab Komputer",
    taxonomy: "category",
    thumbnail:
      "https://images.pexels.com/photos/3747486/pexels-photo-3747486.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    id: "7",
    href: "/fasilitas/perpustakaan",
    name: "Perpustakaan",
    taxonomy: "category",
    thumbnail:
      "https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  },
  {
    id: "8",
    href: "/fasilitas/lab-sains",
    name: "Lab Sains",
    taxonomy: "category",
    thumbnail:
      "https://images.pexels.com/photos/12904930/pexels-photo-12904930.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  },
];

const PageFacility: FC<PageFacilityProps> = ({
  heading = "Fasilitas",
  subHeading = "",
  className = "container relative pt-6 pb-16",
  categories = DEMO_CATS,
}) => {
  return (
    <div className={`nc-SectionSliderNewCategories ${className}`}>
      <h2 className="font-semibold text-3xl md:text-4xl text-left flex items-center mb-10 space-y-10">
        <a href="/" className="mr-4 p-2 bg-neutral-200 dark:bg-neutral-800 dark:bg-neutral-800 dark:bg-opacity-50 rounded-lg hover:bg-neutral-300 dark:hover:bg-neutral-800">
          <ChevronLeftIcon className="h-4 w-4 text-neutral-500 dark:text-neutral-400" />
        </a>
        {heading}
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-12">
        {categories.map((item) => (
          <a href={item.href} key={item.id} className="block group">
            <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden relative">
              <img
                src={item.thumbnail}
                alt={item.name}
                className="object-cover w-full h-full"
              />
              <span className="opacity-0 group-hover:opacity-100 absolute inset-0 bg-black bg-opacity-10 transition-opacity"></span>
            </div>
            <div className="mt-4 px-3 truncate">
              <h2
                className={`text-base sm:text-lg text-neutral-900 dark:text-neutral-100 font-medium truncate`}
              >
                {item.name}
              </h2>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default PageFacility;