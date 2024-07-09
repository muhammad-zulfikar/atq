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
    href: "/ppdb",
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
    name: "Home",
    children: [
      {
        id: ncNanoId(),
        href: "/",
        name: "Beranda",
      },
    ],
  },

  //
  {
    id: ncNanoId(),
    href: "/",
    name: "About Us",
    children: [
      {
        id: ncNanoId(),
        href: "/",
        name: "Profil"
      },
      {
        id: ncNanoId(),
        href: "/",
        name: "Sejarah",
      },
      {
        id: ncNanoId(),
        href: "/",
        name: "Keunggulan"
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
    href: "/author",
    name: "Templates",
    type: "dropdown",
    children: [
      {
        id: ncNanoId(),
        href: "/",
        name: "Fasilitas"
      },
      {
        id: ncNanoId(),
        href: "/",
        name: "Ekstrakurikuler"
      },
      {
        id: ncNanoId(),
        href: "/",
        name: "Guru & Karyawan"
      },
      {
        id: ncNanoId(),
        href: "/",
        name: "Kalender Akademik"
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
        href: "/blog",
        name: "Artikel"
      },
      {
        id: ncNanoId(),
        href: "/blog/single" as Route,
        name: "PPDB"
      },
      {
        id: ncNanoId(),
        href: "/contact" as Route,
        name: "Kontak"
      },
    ],
  },
];
