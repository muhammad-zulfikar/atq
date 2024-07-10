import React from "react";
import { POSTS } from "@/data/posts";
import SectionMagazine from "./components/SectionMagazine";
import SectionLatestPosts from "./components/SectionLatestPosts";
import BgGlassmorphism from "@/components/BgGlassmorphism";

const MAGAZINE_POSTS = POSTS.filter((_, i) => i >= 0 && i < 8);
const BlogPage: React.FC = () => {
  return (
    <div className="nc-BlogPage overflow-hidden relative">
      <BgGlassmorphism />
      <div className="container relative">
        <div className="pt-12">
          <SectionMagazine posts={MAGAZINE_POSTS} />
        </div>
        <SectionLatestPosts className="py-16 lg:py-28" />
      </div>
    </div>
  );
};

export default BlogPage;
