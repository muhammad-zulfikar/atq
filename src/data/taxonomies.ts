import __taxonomies from "./jsons/__taxonomies.json";
import { TaxonomyType } from "./types";
import { Route } from "@/routers/types";

const CATEGORIES: TaxonomyType[] = __taxonomies.map((item) => ({
  ...item,
  taxonomy: "category",
  href: item.href as Route,
}));

const TAGS: TaxonomyType[] = __taxonomies.map((item) => ({
  ...item,
  taxonomy: "tag",
  href: item.href as Route,
}));

export {
  CATEGORIES,
  TAGS
};
