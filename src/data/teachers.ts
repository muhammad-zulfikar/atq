import __teachers from "./jsons/__teachers.json";
import { TeacherType } from "./types";
import avatar1 from "@/images/avatars/Image-1.png";
import avatar2 from "@/images/avatars/Image-2.png";
import avatar3 from "@/images/avatars/Image-3.png";
import avatar4 from "@/images/avatars/Image-4.png";
import avatar5 from "@/images/avatars/Image-5.png";
import avatar6 from "@/images/avatars/Image-6.png";
import avatar7 from "@/images/avatars/Image-7.png";
import avatar8 from "@/images/avatars/Image-8.png";
import avatar9 from "@/images/avatars/Image-9.png";
import avatar10 from "@/images/avatars/Image-10.png";
import { Route } from "@/routers/types";

const imgs = [
  avatar1,
  avatar2,
  avatar3,
  avatar4,
  avatar5,
  avatar6,
  avatar7,
  avatar8,
  avatar9,
  avatar10,
];

const TEACHERS: TeacherType[] = __teachers.map((item, index) => ({
  ...item,
  avatar: imgs[index] || item.avatar,
  href: item.href as Route,
}));

export { TEACHERS };
