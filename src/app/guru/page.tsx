import SectionGridBox from "./components/SectionGridBox";
import { FC } from "react";

export interface PageAboutProps {}

const PageAbout: FC<PageAboutProps> = ({}) => {
  return (
    <div className="container relative pt-6 pb-16">
        <SectionGridBox />
    </div>
  );
};

export default PageAbout;
