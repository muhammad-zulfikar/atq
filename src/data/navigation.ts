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
    href: "/ekstrakurikuler",
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
    href: "/kontak" as Route,
    name: "Kontak"
  },
];

export const NAVIGATION_DESKTOP: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/profil",
    name: "Tentang",
    children: [
      {
        id: ncNanoId(),
        href: "/profil",
        name: "Profil",
      },
      {
        id: ncNanoId(),
        href: "/profil",
        name: "Sejarah",
      },
      {
        id: ncNanoId(),
        href: "/profil",
        name: "Keunggulan",
      },
      {
        id: ncNanoId(),
        href: "/profil",
        name: "Visi & Misi",
      },
      {
        id: ncNanoId(),
        href: "/profil",
        name: "Statistik",
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
        href: "/guru",
        name: "Guru"
      },
      {
        id: ncNanoId(),
        href: "/fasilitas",
        name: "Fasilitas",
      },
      {
        id: ncNanoId(),
        href: "/ekstrakurikuler",
        name: "Ekstrakurikuler"
      },

      {
        id: ncNanoId(),
        href: "/galeri",
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
        href: "/blog",
        name: "Artikel & Berita"
      },
      {
        id: ncNanoId(),
        href: "/kontak",
        name: "Kontak"
      },
      {
        id: ncNanoId(),
        href: "/kontak",
        name: "FAQ"
      },
      {
        id: ncNanoId(),
        href: "/kontak",
        name: "Pengumuman"
      },
    ],
  },
];
