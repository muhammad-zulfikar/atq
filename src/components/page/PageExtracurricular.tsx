"use client";

import React, { FC } from "react";
import { TaxonomyType } from "@/data/types";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";

export interface PageExtracurricularProps {
  className?: string;
  heading?: string;
  subHeading?: string;
  categories?: TaxonomyType[];
}

const DEMO_CATS: TaxonomyType[] = [
  {
    id: "1",
    href: "/ekstrakurikuler/futsal",
    name: "Futsal",
    taxonomy: "category",
    thumbnail:
      "https://images.pexels.com/photos/15964698/pexels-photo-15964698/free-photo-of-men-playing-futsal.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "2",
    href: "/ekstrakurikuler",
    name: "Karate",
    taxonomy: "category",
    thumbnail:
      "https://images.pexels.com/photos/7045580/pexels-photo-7045580.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
  },
  {
    id: "3",
    href: "/ekstrakurikuler",
    name: "Taekwondo",
    taxonomy: "category",
    thumbnail:
      "https://images.pexels.com/photos/4428290/pexels-photo-4428290.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "4",
    href: "/ekstrakurikuler",
    name: "Basket",
    taxonomy: "category",
    thumbnail:
      "https://images.pexels.com/photos/5586418/pexels-photo-5586418.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "5",
    href: "/ekstrakurikuler",
    name: "Marawis",
    taxonomy: "category",
    thumbnail:
      "https://images.pexels.com/photos/6193720/pexels-photo-6193720.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "6",
    href: "/ekstrakurikuler",
    name: "Pramuka",
    taxonomy: "category",
    thumbnail:
      "https://images.pexels.com/photos/10643526/pexels-photo-10643526.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "7",
    href: "/ekstrakurikuler",
    name: "Paskibra",
    taxonomy: "category",
    thumbnail:
      "https://images.pexels.com/photos/9223650/pexels-photo-9223650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "8",
    href: "/ekstrakurikuler",
    name: "Paduan Suara",
    taxonomy: "category",
    thumbnail:
      "https://images.pexels.com/photos/6193853/pexels-photo-6193853.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
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
              <span className="opacity-0 group-hover:opacity-100 absolute inset-0 bg-black bg-opacity-20 dark:bg-opacity-10 transition-opacity"></span>
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

export default PageExtracurricular;
