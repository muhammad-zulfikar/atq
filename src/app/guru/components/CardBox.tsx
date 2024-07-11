import React, { FC } from "react";
import { TeacherType } from "@/data/types";
import Avatar from "@/shared/Avatar";
import Link from "next/link";
import { Route } from "next";

export interface CardBoxProps {
  className?: string;
  teacher: TeacherType;
  index?: number;
}

const CardBox: FC<CardBoxProps> = ({
  className = "",
  teacher,
}) => {
  const { displayName, id, avatar, jobName } = teacher;
  return (
    <Link
      href="/guru/details"
      className={`relative flex flex-col items-center justify-center text-center px-3 py-5 sm:px-6 sm:py-7  [ nc-box-has-hover ] [ nc-dark-box-bg-has-hover ] ${className}`}
    >
      <Avatar
        sizeClass="w-20 h-20 text-2xl"
        radius="rounded-full"
        imgUrl={avatar}
        userName={displayName}
      />
      <div className="mt-3">
        <h2 className={`text-base font-medium`}>
          <span className="line-clamp-1">{displayName}</span>
        </h2>
        <span
          className={`block mt-1.5 text-sm text-neutral-500 dark:text-neutral-400`}
        >
          {jobName}
        </span>
      </div>
    </Link>
  );
};

export default CardBox;
