import React, { FC } from "react";
import { PostDataType } from "@/data/types";
import Card1 from "./Card1";
import Card2 from "./Card2";

export interface SectionMagazineProps {
  posts: PostDataType[];
}

const SectionMagazine: FC<SectionMagazineProps> = ({ posts }) => {
  return (
    <div className="nc-SectionMagazine">
      <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
        {posts[0] && <Card1 post={posts[0]} />}
        <div className="grid gap-6 md:gap-8">
          {posts
            .filter((_, i) => i < 4 && i > 0)
            .map((item, index) => (
              <Card2 key={index} post={item} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default SectionMagazine;
