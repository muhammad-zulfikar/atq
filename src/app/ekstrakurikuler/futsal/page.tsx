"use client";

import React, { FC } from "react";
import { Squares2X2Icon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { PHOTOS } from "./constant";
import { Route } from "next";

export interface FutsalExtracurricularPageProps {}

const FutsalExtracurricularPage: FC<FutsalExtracurricularPageProps> = ({}) => {

  const thisPathname = usePathname();
  const router = useRouter();

  const handleOpenModalImageGallery = () => {
    router.push(`${thisPathname}/?modal=PHOTO_TOUR_SCROLLABLE` as Route);
  };

  const renderSection8 = () => {
    return (
      <div className="listingSection__wrap">
        {/* HEADING */}
        <h2 className="text-2xl font-semibold">Futsal Extracurricular</h2>
        <div className="border-b border-neutral-200 dark:border-neutral-700" />

        {/* CONTENT */}
        <div>
          <h4 className="text-lg font-semibold">Overview</h4>
          <span className="block mt-3 text-neutral-500 dark:text-neutral-400">
            Our futsal extracurricular activity is designed to help students
            develop their skills in a fun and engaging environment. Students
            will learn the basics of futsal, including dribbling, passing, and
            shooting, while also focusing on teamwork and sportsmanship.
          </span>
        </div>
        <div className="border-b border-neutral-200 dark:border-neutral-700" />

        {/* CONTENT */}
        <div>
          <h4 className="text-lg font-semibold">Schedule</h4>
          <div className="mt-3 text-neutral-500 dark:text-neutral-400 max-w-md text-sm sm:text-base">
            <div className="flex space-x-10 justify-between p-3 bg-neutral-100 dark:bg-neutral-800 rounded-lg">
              <span>Monday</span>
              <span>03:00 pm - 05:00 pm</span>
            </div>
            <div className="flex space-x-10 justify-between p-3 bg-neutral-100 dark:bg-neutral-800 rounded-lg">
              <span>Wednesday</span>
              <span>03:00 pm - 05:00 pm</span>
            </div>
            <div className="flex space-x-10 justify-between p-3 bg-neutral-100 dark:bg-neutral-800 rounded-lg">
              <span>Friday</span>
              <span>03:00 pm - 05:00 pm</span>
            </div>
          </div>
        </div>
        <div className="border-b border-neutral-200 dark:border-neutral-700" />

        {/* CONTENT */}
        <div>
          <h4 className="text-lg font-semibold">Special Notes</h4>
          <div className="w-full">
            <ul className="mt-3 text-neutral-500 dark:text-neutral-400 space-y-2">
              <li>Students should wear appropriate sports attire and bring a water bottle.</li>
              <li>Respectful behavior and good sportsmanship are expected at all times.</li>
              <li>Parents are welcome to attend and support their children during practice sessions.</li>
            </ul>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="nc-FutsalExtracurricularPage">
      {/* HEADER */}
      <header className="rounded-md sm:rounded-xl">
        <div className="relative grid grid-cols-3 sm:grid-cols-4 gap-1 sm:gap-2">
          <div
            className="col-span-2 row-span-3 sm:row-span-2 relative rounded-md sm:rounded-xl overflow-hidden cursor-pointer"
            onClick={handleOpenModalImageGallery}
          >
            <Image
              fill
              className="object-cover rounded-md sm:rounded-xl"
              src={PHOTOS[0]}
              alt="Futsal practice"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            />
            <div className="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity"></div>
          </div>
          {PHOTOS.filter((_, i) => i >= 1 && i < 5).map((item, index) => (
            <div
              key={index}
              className={`relative rounded-md sm:rounded-xl overflow-hidden ${
                index >= 3 ? "hidden sm:block" : ""
              }`}
            >
              <div className="aspect-w-4 aspect-h-3 sm:aspect-w-6 sm:aspect-h-5">
                <Image
                  fill
                  className="object-cover rounded-md sm:rounded-xl "
                  src={item || ""}
                  alt={`Futsal practice ${index + 1}`}
                  sizes="400px"
                />
              </div>

              {/* OVERLAY */}
              <div
                className="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity cursor-pointer"
                onClick={handleOpenModalImageGallery}
              />
            </div>
          ))}

          <button
            className="absolute hidden md:flex md:items-center md:justify-center left-3 bottom-3 px-4 py-2 rounded-xl bg-neutral-100 text-neutral-500 hover:bg-neutral-200 z-10"
            onClick={handleOpenModalImageGallery}
          >
            <Squares2X2Icon className="w-5 h-5" />
            <span className="ml-2 text-neutral-800 text-sm font-medium">
              Show all photos
            </span>
          </button>
        </div>
      </header>

      {/* MAIN */}
      <main className="relative z-10 mt-11 flex flex-col lg:flex-row">
        {/* CONTENT */}
        <div className="w-full space-y-8 lg:space-y-10">
          {renderSection8()}
        </div>
      </main>
    </div>
  );
};

export default FutsalExtracurricularPage;