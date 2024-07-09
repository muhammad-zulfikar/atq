import React from "react";
import ButtonPrimary from "@/shared/ButtonPrimary";
import { DEMO_POSTS } from "@/data/posts";
import SectionMagazine from "./components/SectionMagazine";
import BgGlassmorphism from "@/components/BgGlassmorphism";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

// DEMO DATA
const POSTS = DEMO_POSTS;

// DEMO POST FOR MAGAZINE SECTION
const MAGAZINE_POSTS = POSTS.filter((_, i) => i >= 0 && i < 8);
//

const BlogPage: React.FC = () => {
  return (
    <div className="pt-12 nc-BlogPage overflow-hidden relative">
      <BgGlassmorphism />
      <h2 className="font-semibold text-4xl text-left flex items-center">
        Berita & Artikel
        <a href="/blog" className="ml-2 p-2 bg-neutral-200 dark:bg-neutral-800 rounded-lg hover:bg-neutral-300 dark:hover:bg-neutral-900">
          <ChevronRightIcon className="h-4 w-4 text-neutral-500 dark:text-neutral-400" />
        </a>
      </h2>
      <div className="container relative mt-10">
        <div>
          <SectionMagazine posts={MAGAZINE_POSTS} />
        </div>
        <div className="flex flex-col lg:pb-14 mt-12 md:mt-20 space-y-5 sm:space-y-0 sm:space-x-3 sm:flex-row justify-center items-center">
          <ButtonPrimary href="/blog">Lihat selengkapnya</ButtonPrimary>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
