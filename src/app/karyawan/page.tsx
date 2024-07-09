import SectionGridAuthorBox from "@/components/section/SectionGridAuthorBox";
import { FC } from "react";

export interface PageAboutProps {}

const PageAbout: FC<PageAboutProps> = ({}) => {
  return (
    <div className="container relative space-y-24 mt-12 md:mt-24 mb-24 lg:space-y-28 lg:mb-28">
        <SectionGridAuthorBox />
    </div>
  );
};

export default PageAbout;
