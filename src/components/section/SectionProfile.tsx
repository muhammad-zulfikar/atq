import React, { FC, useState } from "react";
import { TrophyIcon, AcademicCapIcon, BuildingLibraryIcon, UserGroupIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { Dialog } from "@headlessui/react";

type IconType = typeof TrophyIcon | typeof AcademicCapIcon | typeof BuildingLibraryIcon | typeof UserGroupIcon;

export interface KeunggulanItem {
  id: string;
  desc: string;
  icon: IconType;
  detailedDesc: string;
}

export interface VisiMisiItem {
  title: string;
}

const TENTANG = "SDIT At Taufiq berdiri sejak 1996, dengan tujuan untuk menyiapkan generasi rabbani yang unggul, memadukan iman, takwa, ilmu pengetahuan, dan teknologi untuk menghadapi tantangan global.";

const KEUNGGULAN: KeunggulanItem[] = [
  {
    id: "1",
    desc: "Sekolah Standar Nasional",
    icon: TrophyIcon,
    detailedDesc: "Sekolah Standar Nasional diakui atas keunggulannya dalam pendidikan, memenuhi standar kualitas nasional.",
  },
  {
    id: "2",
    desc: "Akreditasi A",
    icon: AcademicCapIcon,
    detailedDesc: "Akreditasi A adalah tingkat akreditasi tertinggi, menunjukkan kinerja dan kualitas yang luar biasa dalam pendidikan.",
  },
  {
    id: "3",
    desc: "Islamic Full Day School",
    icon: BuildingLibraryIcon,
    detailedDesc: "Islamic Full Day School menawarkan pendidikan komprehensif dengan fokus pada nilai-nilai Islam, memastikan perkembangan yang seimbang.",
  },
  {
    id: "4",
    desc: "2000+ Siswa",
    icon: UserGroupIcon,
    detailedDesc: "Sekolah kami bangga memiliki lebih dari 2000 siswa, membangun komunitas pelajar yang besar dan beragam.",
  },
];

const VISI = "Menyiapkan generasi Rabbani yang unggul, dengan memadukan IMLAQ, IMTAQ, dan IPTEK, demi menghadapi tantangan global.";

const MISI: VisiMisiItem[] = [
  { title: "Menjadi SDIT unggulan kebanggaan umat Islam di Kota Depok." },
  { title: "Profesionalisme dalam pengelolaan pendidikan dan dakwah." },
  { title: "Penerapan proses belajar dan pendidikan dengan nilai Islami yang integratif." },
  { title: "Penerapan proses belajar yang aktif, kreatif, efektif, dan menyenangkan." },
  { title: "Membina tenaga kependidikan yang islami, militan, dan berkualitas." },
];

export interface SectionProfileProps {
  className?: string;
}

const SectionProfile: FC<SectionProfileProps> = ({ className = "pb-16" }) => {
  const [selectedItem, setSelectedItem] = useState<KeunggulanItem | null>(null);

  const renderIcon = (IconComponent: IconType, className: string) => {
    return <IconComponent className={className} />;
  };

  return (
    <div className={`nc-SectionProfile relative flex flex-col items-center ${className}`} data-nc-id="SectionProfile">
      <div className="w-full">
        <h2 className="font-semibold text-3xl md:text-4xl text-left flex items-center">
          Profil Sekolah
          <a href="/profil" className="ml-4 p-2 bg-neutral-200 dark:bg-neutral-800 dark:bg-opacity-50 rounded-lg hover:bg-neutral-300 dark:hover:bg-neutral-800">
            <ChevronRightIcon className="h-4 w-4 text-neutral-500 dark:text-neutral-400" />
          </a>
        </h2>

        <div className="mt-10 space-y-10">
          <div className="space-y-4">
            <span className="block text-xl font-semibold text-left">Tentang</span>
            <p className="mt-5 text-neutral-500 dark:text-neutral-400 text-left bg-neutral-200 dark:bg-neutral-800 dark:bg-opacity-50 p-6 rounded-lg">
              {TENTANG}
            </p>
          </div>

          <div id="keunggulan" className="space-y-4">
            <span className="block text-xl font-semibold text-left">Keunggulan</span>
            <div className="mt-5 grid grid-cols-2 lg:grid-cols-4 gap-4 text-neutral-500 dark:text-neutral-400">
              {KEUNGGULAN.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-center flex-col p-4 cursor-pointer bg-neutral-200 dark:bg-neutral-800 dark:bg-opacity-50 dark:hover:bg-neutral-800 hover:bg-neutral-300 rounded-lg"
                  onClick={() => setSelectedItem(item)}
                >
                  {renderIcon(item.icon, "w-5 h-5 lg:w-7 lg:h-7")}
                  <p className="mt-2 text-center text-sm md:text-base">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <span className="block text-xl font-semibold text-left">Visi & Misi</span>
            <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4 text-neutral-500 dark:text-neutral-400">
              <div className="bg-neutral-200 dark:bg-neutral-800 dark:bg-opacity-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Visi</h3>
                <p>{VISI}</p>
              </div>
              <div className="bg-neutral-200 dark:bg-neutral-800 dark:bg-opacity-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Misi</h3>
                <ul className="list-disc list-inside">
                  {MISI.map((item, index) => (
                    <li key={index}>{item.title}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Dialog
        open={selectedItem !== null}
        onClose={() => setSelectedItem(null)}
        className="fixed z-10 inset-0 overflow-y-auto"
      >
        <div className="flex items-center justify-center min-h-screen p-4">
          <div className="fixed inset-0 bg-black opacity-30" onClick={() => setSelectedItem(null)}></div>

          <div className="bg-white dark:bg-neutral-900 rounded-lg max-w-sm mx-auto p-6 relative z-20">
            <button
              className="absolute top-3 right-3"
              onClick={() => setSelectedItem(null)}
            >
              <XMarkIcon className="h-6 w-6 text-neutral-700 dark:text-neutral-200" />
            </button>

            {selectedItem && (
              <>
                {renderIcon(selectedItem.icon, "h-12 w-12 text-neutral-900 dark:text-neutral-200 mx-auto")}
                <div className="mt-4 text-center">
                  <h3 className="text-lg font-medium text-neutral-900 dark:text-neutral-200">
                    {selectedItem.desc}
                  </h3>
                  <p className="mt-2 text-neutral-600 dark:text-neutral-400">
                    {selectedItem.detailedDesc}
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

export default SectionProfile;
