"use client";

import React, { FC, useState } from "react";
import Heading from "@/shared/Heading";
import { TrophyIcon, AcademicCapIcon, BuildingLibraryIcon, UserGroupIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Dialog } from "@headlessui/react";

type IconType = typeof TrophyIcon | typeof AcademicCapIcon | typeof BuildingLibraryIcon | typeof UserGroupIcon;

export interface Statistic {
  id: string;
  desc: string;
  icon: IconType;
}

const PROFILE: Statistic[] = [
  {
    id: "1",
    desc: "Sekolah Standar Nasional",
    icon: TrophyIcon,
  },
  {
    id: "2",
    desc: "Akreditasi A",
    icon: AcademicCapIcon,
  },
  {
    id: "3",
    desc: "Islamic Full Day School",
    icon: BuildingLibraryIcon,
  },
  {
    id: "4",
    desc: "2000+ Siswa",
    icon: UserGroupIcon,
  },
];

const DETAILED_DESCRIPTIONS: { [key: string]: string } = {
  "1": "Sekolah Standar Nasional diakui atas keunggulannya dalam pendidikan, memenuhi standar kualitas nasional.",
  "2": "Akreditasi A adalah tingkat akreditasi tertinggi, menunjukkan kinerja dan kualitas yang luar biasa dalam pendidikan.",
  "3": "Islamic Full Day School menawarkan pendidikan komprehensif dengan fokus pada nilai-nilai Islam, memastikan perkembangan yang seimbang.",
  "4": "Sekolah kami bangga memiliki lebih dari 2000 siswa, membangun komunitas pelajar yang besar dan beragam.",
};

export interface SectionStatisticProps {
  className?: string;
}

const SectionStatistic: FC<SectionStatisticProps> = ({ className = "" }) => {
  const [selectedStat, setSelectedStat] = useState<Statistic | null>(null);

  return (
    <div className={`nc-SectionStatistic relative ${className}`}>
      <Heading
        desc=" Kami bersikap netral dan independen, dan setiap hari kami menciptakan program dan konten kelas dunia yang khas."
      >
        Keunggulan
      </Heading>
      <div className="grid md:grid-cols-2 gap-6 lg:grid-cols-4 xl:gap-8">
        {PROFILE.map((item) => (
          <div
            key={item.id}
            className="p-6 bg-neutral-50 dark:bg-neutral-800 rounded-2xl dark:border-neutral-800 flex flex-col items-center cursor-pointer"
            onClick={() => setSelectedStat(item)}
          >
            <item.icon className="h-12 w-12 text-neutral-900 dark:text-neutral-200" />
            <span className="block text-sm text-neutral-500 mt-3 sm:text-base dark:text-neutral-400 text-center">
              {item.desc}
            </span>
          </div>
        ))}
      </div>

      <Dialog
        open={selectedStat !== null}
        onClose={() => setSelectedStat(null)}
        className="fixed z-10 inset-0 overflow-y-auto"
      >
        <div className="flex items-center justify-center min-h-screen p-4">
          <div className="fixed inset-0 bg-black opacity-30" onClick={() => setSelectedStat(null)}></div>
          
          <div className="bg-white dark:bg-neutral-900 rounded-lg max-w-sm mx-auto p-6 relative z-20">
            <button
              className="absolute top-3 right-3"
              onClick={() => setSelectedStat(null)}
            >
              <XMarkIcon className="h-6 w-6 text-neutral-700 dark:text-neutral-200" />
            </button>

            {selectedStat && (
              <>
                <selectedStat.icon className="h-12 w-12 text-neutral-900 dark:text-neutral-200 mx-auto" />
                <div className="mt-4 text-center">
                  <h3 className="text-lg font-medium text-neutral-900 dark:text-neutral-200">
                    {selectedStat.desc}
                  </h3>
                  <p className="mt-2 text-neutral-600 dark:text-neutral-400">
                    {DETAILED_DESCRIPTIONS[selectedStat.id]}
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default SectionStatistic;