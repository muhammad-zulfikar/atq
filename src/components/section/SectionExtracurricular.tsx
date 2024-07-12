"use client";

import React, { FC, useEffect, useState } from "react";
import { TaxonomyType } from "@/data/types";
import CardCategory5 from "@/components/CardCategory5";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import PrevBtn from "../PrevBtn";
import NextBtn from "../NextBtn";
import { variants } from "@/utils/animationVariants";
import { useWindowSize } from "react-use";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

export interface SectionFacilityProps {
  className?: string;
  itemClassName?: string;
  heading?: string;
  subHeading?: string;
  categories?: TaxonomyType[];
  itemPerRow?: 4 | 5;
  sliderStyle?: "style1" | "style2";
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

const SectionExtracurricular: FC<SectionFacilityProps> = ({
  heading = "Ekstrakurikuler",
  className = "",
  itemClassName = "",
  categories = DEMO_CATS,
  itemPerRow = 5,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [numberOfItems, setNumberOfitem] = useState(0);

  const windowWidth = useWindowSize().width;
  useEffect(() => {
    if (windowWidth < 320) {
      return setNumberOfitem(1);
    }
    if (windowWidth < 500) {
      return setNumberOfitem(itemPerRow - 3);
    }
    if (windowWidth < 1024) {
      return setNumberOfitem(itemPerRow - 2);
    }
    if (windowWidth < 1280) {
      return setNumberOfitem(itemPerRow - 1);
    }

    setNumberOfitem(itemPerRow);
  }, [itemPerRow, windowWidth]);

  function changeItemId(newVal: number) {
    if (newVal > currentIndex) {
      setDirection(1);
    } else {
      setDirection(-1);
    }
    setCurrentIndex(newVal);
  }

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (currentIndex < categories?.length - 1) {
        changeItemId(currentIndex + 1);
      }
    },
    onSwipedRight: () => {
      if (currentIndex > 0) {
        changeItemId(currentIndex - 1);
      }
    },
    trackMouse: true,
  });

  if (!numberOfItems) return null;

  return (
    <div className={`nc-SectionSliderNewCategories ${className}`}>
      <h2 className="font-semibold text-3xl md:text-4xl text-left flex items-center mb-10 space-y-10">
        {heading}
        <a href="/ekstrakurikuler" className="ml-4 p-2 bg-neutral-200 dark:bg-neutral-800 dark:bg-neutral-800 dark:bg-opacity-50 rounded-lg hover:bg-neutral-300 dark:hover:bg-neutral-800">
          <ChevronRightIcon className="h-4 w-4 text-neutral-500 dark:text-neutral-400" />
        </a>
      </h2>
      <MotionConfig
        transition={{
          x: { type: "spring", stiffness: 300, damping: 30 },
          opacity: { duration: 0.2 },
        }}
      >
        <div className={`relative flow-root`} {...handlers}>
          <div className={`flow-root overflow-hidden rounded-xl`}>
            <motion.ul
              initial={false}
              className="relative whitespace-nowrap -mx-2 xl:-mx-4"
            >
              <AnimatePresence initial={false} custom={direction}>
                {categories.map((item, indx) => (
                  <motion.li
                    className={`relative inline-block px-2 xl:px-4 ${itemClassName}`}
                    custom={direction}
                    initial={{
                      x: `${(currentIndex - 1) * -100}%`,
                    }}
                    animate={{
                      x: `${currentIndex * -100}%`,
                    }}
                    variants={variants(200, 1)}
                    key={indx}
                    style={{
                      width: `calc(1/${numberOfItems} * 100%)`,
                    }}
                  >
                    <CardCategory5 taxonomy={item} />
                  </motion.li>
                ))}
              </AnimatePresence>
            </motion.ul>
          </div>

          {currentIndex ? (
            <PrevBtn
              style={{ transform: "translate3d(0, 0, 0)" }}
              onClick={() => changeItemId(currentIndex - 1)}
              className="w-9 h-9 xl:w-12 xl:h-12 text-lg absolute -left-3 xl:-left-6 top-1/3 -translate-y-1/2 z-[1]"
            />
          ) : null}

          {categories.length > currentIndex + numberOfItems ? (
            <NextBtn
              style={{ transform: "translate3d(0, 0, 0)" }}
              onClick={() => changeItemId(currentIndex + 1)}
              className="w-9 h-9 xl:w-12 xl:h-12 text-lg absolute -right-3 xl:-right-6 top-1/3 -translate-y-1/2 z-[1]"
            />
          ) : null}
        </div>
      </MotionConfig>
    </div>
  );
};

export default SectionExtracurricular;