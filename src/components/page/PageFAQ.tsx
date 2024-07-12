// pageFAQ.tsx

"use client";

import React, { FC, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const PERTANYAAN_FAQ: FAQItem[] = [
  {
    id: "1",
    question: "Apakah SDIT At Taufiq menerima siswa baru setiap tahun?",
    answer: "Ya, SDIT At Taufiq menerima siswa baru setiap tahun. Kami membuka penerimaan siswa baru pada awal setiap tahun ajaran.",
  },
  {
    id: "2",
    question: "Bagaimana cara mendaftar sebagai siswa di SDIT At Taufiq?",
    answer: "Untuk mendaftar sebagai siswa di SDIT At Taufiq, Anda dapat mengunjungi kantor sekolah kami dan mengisi formulir pendaftaran yang tersedia.",
  },
  {
    id: "3",
    question: "Apakah SDIT At Taufiq menyediakan kegiatan ekstrakurikuler?",
    answer: "Ya, SDIT At Taufiq memiliki berbagai kegiatan ekstrakurikuler seperti olahraga, seni, dan kegiatan akademis tambahan lainnya.",
  },
];

export interface SectionFAQProps {
  className?: string;
}

const PageFAQ: FC<SectionFAQProps> = ({ className = "container relative pt-6 pb-16" }) => {
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);

  const toggleDropdown = (itemId: string) => {
    setSelectedItemId((prev) => (prev === itemId ? null : itemId));
  };

  const renderDropdownItem = (item: FAQItem) => {
    const isOpen = selectedItemId === item.id;

    return (
      <div key={item.id} className="mt-4">
        <div
          className="cursor-pointer flex justify-between items-center bg-neutral-200 dark:bg-neutral-800 dark:bg-opacity-50 p-4 rounded-lg relative transition-all duration-300"
          onClick={() => toggleDropdown(item.id)}
        >
          <p className="text-sm md:text-md lg:text-lg font-semibold">{item.question}</p>
          <ChevronDownIcon
            className={`h-6 w-6 md:h-5 md:w-5 text-neutral-700 dark:text-neutral-200 transform ${isOpen ? 'rotate-180' : ''}`}
          />
        </div>
        <div
          className={`overflow-hidden transition-all duration-300 ml-4 ${isOpen ? 'max-h-96 opacity-100 mt-4 mb-10' : 'max-h-0 opacity-0 mt-0'}`}
        >
          <div>
            <p>{item.answer}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={`nc-SectionFAQ relative ${className}`} data-nc-id="SectionFAQ">
      <div className="w-full">
        <h2 className="font-semibold text-3xl md:text-4xl text-left flex items-center">
          FAQ (Frequently Asked Questions)
        </h2>

        <div className="mt-10 space-y-4">
          {PERTANYAAN_FAQ.map((item) => (
            <React.Fragment key={item.id}>
              {renderDropdownItem(item)}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PageFAQ;