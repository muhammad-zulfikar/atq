import CardCategoryBox1 from "@/components/CardCategoryBox1";
import Heading from "@/shared/Heading";
import ButtonPrimary from "@/shared/ButtonPrimary";
import { TaxonomyType } from "@/data/types";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import React from "react";

export interface SectionExtracurricularProps {
  categories?: TaxonomyType[];
  headingCenter?: boolean;
  className?: string;
  gridClassName?: string;
}

const DEMO_CATS: TaxonomyType[] = [
  {
    id: "1",
    href: "/ekstrakurikuler/futsal",
    name: "Futsal",
    taxonomy: "category",
    thumbnail:
      "https://media.istockphoto.com/id/888503706/photo/futsal-player-sports-hall.jpg?b=1&s=612x612&w=0&k=20&c=hVV3k0N-L1gepBlwBL8rrt9E5QJ3nTk3Gi_ZVkMu2Bg=",
  },
  {
    id: "2",
    href: "/ekstrakurikuler/futsal",
    name: "Futsal",
    taxonomy: "category",
    thumbnail:
      "https://media.istockphoto.com/id/888503706/photo/futsal-player-sports-hall.jpg?b=1&s=612x612&w=0&k=20&c=hVV3k0N-L1gepBlwBL8rrt9E5QJ3nTk3Gi_ZVkMu2Bg=",
  },
  {
    id: "3",
    href: "/ekstrakurikuler/futsal",
    name: "Futsal",
    taxonomy: "category",
    thumbnail:
      "https://media.istockphoto.com/id/888503706/photo/futsal-player-sports-hall.jpg?b=1&s=612x612&w=0&k=20&c=hVV3k0N-L1gepBlwBL8rrt9E5QJ3nTk3Gi_ZVkMu2Bg=",
  },
  {
    id: "4",
    href: "/ekstrakurikuler/futsal",
    name: "Futsal",
    taxonomy: "category",
    thumbnail:
      "https://media.istockphoto.com/id/888503706/photo/futsal-player-sports-hall.jpg?b=1&s=612x612&w=0&k=20&c=hVV3k0N-L1gepBlwBL8rrt9E5QJ3nTk3Gi_ZVkMu2Bg=",
  },
  {
    id: "5",
    href: "/ekstrakurikuler/futsal",
    name: "Futsal",
    taxonomy: "category",
    thumbnail:
      "https://media.istockphoto.com/id/888503706/photo/futsal-player-sports-hall.jpg?b=1&s=612x612&w=0&k=20&c=hVV3k0N-L1gepBlwBL8rrt9E5QJ3nTk3Gi_ZVkMu2Bg=",
  },
  {
    id: "6",
    href: "/ekstrakurikuler/futsal",
    name: "Futsal",
    taxonomy: "category",
    thumbnail:
      "https://media.istockphoto.com/id/888503706/photo/futsal-player-sports-hall.jpg?b=1&s=612x612&w=0&k=20&c=hVV3k0N-L1gepBlwBL8rrt9E5QJ3nTk3Gi_ZVkMu2Bg=",
  },
  {
    id: "7",
    href: "/ekstrakurikuler/futsal",
    name: "Futsal",
    taxonomy: "category",
    thumbnail:
      "https://media.istockphoto.com/id/888503706/photo/futsal-player-sports-hall.jpg?b=1&s=612x612&w=0&k=20&c=hVV3k0N-L1gepBlwBL8rrt9E5QJ3nTk3Gi_ZVkMu2Bg=",
  },
  {
    id: "8",
    href: "/ekstrakurikuler/futsal",
    name: "Futsal",
    taxonomy: "category",
    thumbnail:
      "https://media.istockphoto.com/id/888503706/photo/futsal-player-sports-hall.jpg?b=1&s=612x612&w=0&k=20&c=hVV3k0N-L1gepBlwBL8rrt9E5QJ3nTk3Gi_ZVkMu2Bg=",
  },
];

const SectionExtracurricular: React.FC<SectionExtracurricularProps> = ({
  categories = DEMO_CATS,
  className = "",
  gridClassName = "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
}) => {
  const categoriesMobile = categories.slice(0, 4);

  return (
    <div className={`nc-SectionGridCategoryBox relative ${className}`}>
      <h2 className="font-semibold text-3xl md:text-4xl text-left flex items-center">
        Ekstrakurikuler
        <a href="/ekstrakurikuler" className="ml-2 p-2 bg-neutral-200 dark:bg-neutral-800 dark:bg-opacity-50 rounded-lg hover:bg-neutral-300 dark:hover:bg-neutral-800">
          <ChevronRightIcon className="h-4 w-4 text-neutral-500 dark:text-neutral-400" />
        </a>
      </h2>
      <div className="block sm:hidden mt-10 space-y-10">
        <div className="grid grid-cols-2 gap-5">
          {categoriesMobile.map((item, i) => (
            <CardCategoryBox1 key={i} taxonomy={item} />
          ))}
        </div>
        <div className="flex flex-col lg:pb-14 mt-12 md:mt-20 space-y-5 sm:space-y-0 sm:space-x-3 sm:flex-row justify-center items-center">
          <ButtonPrimary href="/ekstrakurikuler">Lihat Selengkapnya</ButtonPrimary>
        </div>
      </div>
      <div className="hidden sm:block mt-10 space-y-10">
        <div className={`grid ${gridClassName} gap-5 sm:gap-6 md:gap-8`}>
          {categories.map((item, i) => (
            <CardCategoryBox1 key={i} taxonomy={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionExtracurricular;