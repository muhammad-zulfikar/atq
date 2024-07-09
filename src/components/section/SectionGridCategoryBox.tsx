import CardCategoryBox1 from "@/components/CardCategoryBox1";
import Heading from "@/shared/Heading";
import ButtonPrimary from "@/shared/ButtonPrimary";
import { TaxonomyType } from "@/data/types";
import React from "react";

export interface SectionGridCategoryBoxProps {
  categories?: TaxonomyType[];
  headingCenter?: boolean;
  className?: string;
  gridClassName?: string;
}

const DEMO_CATS: TaxonomyType[] = [
  {
    id: "1",
    href: "/",
    name: "New York",
    taxonomy: "category",
    thumbnail:
      "https://media.istockphoto.com/id/888503706/photo/futsal-player-sports-hall.jpg?b=1&s=612x612&w=0&k=20&c=hVV3k0N-L1gepBlwBL8rrt9E5QJ3nTk3Gi_ZVkMu2Bg=",
  },
  {
    id: "2",
    href: "/",
    name: "Singapore",
    taxonomy: "category",
    thumbnail:
      "https://images.pexels.com/photos/7740160/pexels-photo-7740160.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "3",
    href: "/",
    name: "Paris",
    taxonomy: "category",
    thumbnail:
      "https://images.pexels.com/photos/739407/pexels-photo-739407.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "4",
    href: "/",
    name: "London",
    taxonomy: "category",
    thumbnail:
      "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
  },
  {
    id: "5",
    href: "/",
    name: "Tokyo",
    taxonomy: "category",
    thumbnail:
      "https://images.pexels.com/photos/4151484/pexels-photo-4151484.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
  },
  {
    id: "6",
    href: "/",
    name: "Maldives",
    taxonomy: "category",
    thumbnail:
      "https://images.pexels.com/photos/3250613/pexels-photo-3250613.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "7",
    href: "/",
    name: "New York",
    taxonomy: "category",
    thumbnail:
      "https://images.pexels.com/photos/64271/queen-of-liberty-statue-of-liberty-new-york-liberty-statue-64271.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
  },
  {
    id: "8",
    href: "/",
    name: "Singapore",
    taxonomy: "category",
    thumbnail:
      "https://images.pexels.com/photos/7740160/pexels-photo-7740160.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
];

const SectionGridCategoryBox: React.FC<SectionGridCategoryBoxProps> = ({
  categories = DEMO_CATS,
  className = "",
  gridClassName = "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
}) => {
  const categoriesMobile = categories.slice(0, 4);

  return (
    <div className={`nc-SectionGridCategoryBox relative ${className}`}>
      <Heading>Extracurricular</Heading>
      <div className="block sm:hidden">
        <div className="grid grid-cols-2 gap-5">
          {categoriesMobile.map((item, i) => (
            <CardCategoryBox1 key={i} taxonomy={item} />
          ))}
        </div>
        <div className="flex flex-col lg:pb-14 mt-12 md:mt-20 space-y-5 sm:space-y-0 sm:space-x-3 sm:flex-row justify-center items-center">
          <ButtonPrimary href="/blog">Show me more</ButtonPrimary>
        </div>
      </div>
      <div className="hidden sm:block">
        <div className={`grid ${gridClassName} gap-5 sm:gap-6 md:gap-8`}>
          {categories.map((item, i) => (
            <CardCategoryBox1 key={i} taxonomy={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionGridCategoryBox;