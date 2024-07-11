"use client";

import Logo from "@/shared/Logo";
import SocialsList1 from "@/shared/SocialsList1";
import { CustomLink } from "@/data/types";
import React from "react";
import FooterNav from "./FooterNav";

export interface WidgetFooterMenu {
  id: string;
  title: string;
  menus: CustomLink[];
}

const widgetMenus: WidgetFooterMenu[] = [
  {
    id: "5",
    title: "Tentang",
    menus: [
      { href: "/profil", label: "Profil" },
      { href: "/profil#sejarah", label: "Sejarah" },
      { href: "/profil#keunggulan", label: "Keunggulan" },
      { href: "/profil#visimisi", label: "Visi & Misi" },
      { href: "/profil#statistik", label: "Statistik" },
    ],
  },
  {
    id: "1",
    title: "Telusuri",
    menus: [
      { href: "/guru", label: "Guru" },
      { href: "#", label: "Fasilitas" },
      { href: "#", label: "Ekstrakurikuler" },
      { href: "#", label: "Galeri" },
      { href: "#", label: "Prestasi" },
    ],
  },
  {
    id: "2",
    title: "Informasi",
    menus: [
      { href: "#", label: "Penerimaan Peserta Didik Baru (PPDB)" },
      { href: "#", label: "Artikel & Berita" },
      { href: "#", label: "FAQ" },
      { href: "#", label: "Kontak" },
      { href: "#", label: "Pengumuman" },
    ],
  },
];

const Footer: React.FC = () => {
  const renderWidgetMenuItem = (menu: WidgetFooterMenu, index: number) => {
    return (
      <div key={index} className="text-sm">
        <h2 className="font-semibold text-neutral-700 dark:text-neutral-200">
          {menu.title}
        </h2>
        <ul className="mt-5 space-y-4">
          {menu.menus.map((item, index) => (
            <li key={index}>
              <a
                key={index}
                className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                href={item.href}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <>
      <div className="nc-Footer relative py-24 lg:py-28 border-t border-neutral-200 dark:border-neutral-700">
        <div className="container grid grid-cols-2 gap-y-10 gap-x-5 sm:gap-x-8 md:grid-cols-4 lg:grid-cols-4 lg:gap-x-10 ">
          <div className="grid grid-cols-4 gap-5 col-span-2 md:col-span-4 lg:md:col-span-1 lg:flex lg:flex-col">
            <div className="col-span-2 md:col-span-1">
              <Logo />
            </div>
            <div className="col-span-2 flex items-center md:col-span-3">
              <SocialsList1 className="flex items-center space-x-3 lg:space-x-0 lg:flex-col lg:space-y-2.5 lg:items-start" />
            </div>
          </div>
          {widgetMenus.map(renderWidgetMenuItem)}
        </div>
      </div>
    </>
  );
};

export default Footer;
