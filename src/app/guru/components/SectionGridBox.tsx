import CardBox from "@/app/guru/components/CardBox";
import Heading from "@/shared/Heading";
import { TEACHERS } from "@/data/teachers";
import { TeacherType } from "@/data/types";
import React, { FC } from "react";
import ButtonSecondary from "@/shared/ButtonSecondary";

export interface SectionGridBoxProps {
  className?: string;
  teachers?: TeacherType[];
  gridClassName?: string;
}

const DEMO_DATA = TEACHERS.filter((_, i) => i < 10);

const SectionGridBox: FC<SectionGridBoxProps> = ({
  className = "",
  teachers = DEMO_DATA,
  gridClassName = "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 ",
}) => {
  return (
    <div
      className={`nc-SectionGridAuthorBox relative ${className}`}
      data-nc-id="SectionGridAuthorBox"
    >
      <Heading>
        Guru dan Karyawan
      </Heading>
      <div className={`grid gap-6 md:gap-8 ${gridClassName}`}>
        {teachers.map((teacher, index) =>
          <CardBox
            index={index < 3 ? index + 1 : undefined}
            key={teacher.id}
            teacher={teacher}
          />
        )}
      </div>
      <div className="mt-16 flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-5">
        <ButtonSecondary loading>Show me more </ButtonSecondary>
      </div>
    </div>
  );
};

export default SectionGridBox;
