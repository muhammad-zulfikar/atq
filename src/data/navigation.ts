import { NavItemType } from "@/shared/Navigation/NavigationItem";
import ncNanoId from "@/utils/ncNanoId";
import { Route } from "@/routers/types";

export const NAVIGATION_MOBILE: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/",
    name: "Beranda",
  },
  {
    id: ncNanoId(),
    href: "/ppdb" as Route,
    name: "PPDB",
  },
  {
    id: ncNanoId(),
    href: "/fasilitas",
    name: "Fasilitas"
  },
  {
    id: ncNanoId(),
    href: "/ekstrakurikuler/futsal",
    name: "Ekstrakurikuler"
  },
  {
    id: ncNanoId(),
    href: "/blog",
    name: "Artikel"
  },
  {
    id: ncNanoId(),
    href: "/galeri",
    name: "Galeri"
  },
  {
    id: ncNanoId(),
    href: "/contact" as Route,
    name: "Kontak"
  },
];

export const NAVIGATION_DESKTOP: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/",
    name: "Tentang",
    children: [
      {
        id: ncNanoId(),
        href: "/",
        name: "Profil",
      },
      {
        id: ncNanoId(),
        href: "/",
        name: "Sejarah",
      },
      {
        id: ncNanoId(),
        href: "/",
        name: "Keunggulan",
      },
      {
        id: ncNanoId(),
        href: "/",
        name: "Visi & Misi",
      },
      {
        id: ncNanoId(),
        href: "/",
        name: "Akreditasi",
      },
    ],
  },

  //
  {
    id: ncNanoId(),
    href: "/",
    name: "Telusuri",
    children: [
      {
        id: ncNanoId(),
        href: "/",
        name: "Guru"
      },
      {
        id: ncNanoId(),
        href: "/",
        name: "Fasilitas",
      },
      {
        id: ncNanoId(),
        href: "/",
        name: "Ekstrakurikuler"
      },

      {
        id: ncNanoId(),
        href: "/",
        name: "Galeri",
      },
      {
        id: ncNanoId(),
        href: "/",
        name: "Prestasi",
      },
    ],
  },

  //
  {
    id: ncNanoId(),
    href: "/blog",
    name: "Informasi",
    type: "dropdown",
    children: [
      {
        id: ncNanoId(),
        href: "/ppdb",
        name: "Penerimaan Peserta Didik Baru (PPDB)"
      },
      {
        id: ncNanoId(),
        href: "/blog/single" as Route,
        name: "Artikel & Berita"
      },
      {
        id: ncNanoId(),
        href: "/contact" as Route,
        name: "Kontak"
      },
      {
        id: ncNanoId(),
        href: "/contact" as Route,
        name: "FAQ"
      },
      {
        id: ncNanoId(),
        href: "/contact" as Route,
        name: "Pengumuman"
      },
    ],
  },
];
