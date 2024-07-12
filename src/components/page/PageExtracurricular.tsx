"use client";

import React, { FC } from "react";
import { TaxonomyType } from "@/data/types";

export interface PageExtracurricularProps {
  className?: string;
  heading?: string;
  subHeading?: string;
  categories?: TaxonomyType[];
}

const DEMO_CATS: TaxonomyType[] = [
  {
    id: "1",
    href: "/fasilitas/lapangan",
    name: "Lapangan",
    taxonomy: "category",
    thumbnail:
      "https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
  },
  {
    id: "2",
    href: "/fasilitas",
    name: "Masjid",
    taxonomy: "category",
    thumbnail:
      "https://images.pexels.com/photos/2351649/pexels-photo-2351649.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "3",
    href: "/fasilitas",
    name: "Kantin",
    taxonomy: "category",
    thumbnail:
      "https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "4",
    href: "/fasilitas",
    name: "UKS",
    taxonomy: "category",
    thumbnail:
      "https://images.pexels.com/photos/248837/pexels-photo-248837.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "5",
    href: "/fasilitas",
    name: "Lab Komputer",
    taxonomy: "category",
    thumbnail:
      "https://images.pexels.com/photos/3613236/pexels-photo-3613236.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    id: "6",
    href: "/fasilitas",
    name: "Dome House",
    taxonomy: "category",
    thumbnail:
      "https://images.pexels.com/photos/14534337/pexels-photo-14534337.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  },
  {
    id: "7",
    href: "/fasilitas",
    name: "Wooden house",
    taxonomy: "category",
    thumbnail:
      "https://images.pexels.com/photos/2351649/pexels-photo-2351649.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "8",
    href: "/fasilitas",
    name: "Wooden Dome",
    taxonomy: "category",
    thumbnail:
      "https://images.pexels.com/photos/9039238/pexels-photo-9039238.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  },
];

const PageExtracurricular: FC<PageExtracurricularProps> = ({
  heading = "Ekstrakurikuler",
  subHeading = "",
  className = "container relative pt-6 pb-16",
  categories = DEMO_CATS,
}) => {
  return (
    <div className={`nc-SectionSliderNewCategories ${className}`}>
      <h2 className="font-semibold text-3xl md:text-4xl text-left flex items-center mb-10 space-y-10">
        {heading}
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-12">
        {categories.map((item) => (
          <a href={item.href} key={item.id} className="block group">
            <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden relative">
              <img
                src={item.thumbnail}
                alt={item.name}
                className="object-cover w-full h-full group-hover:opacity-75 transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-25 transition-opacity duration-300"></div>
            </div>
            <h3 className="text-sm md:text-[16px] font-medium mt-4 text-center">{item.name}</h3>
          </a>
        ))}
      </div>
    </div>
  );
};

export default PageExtracurricular;
