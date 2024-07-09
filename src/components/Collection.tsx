import React, { FC } from "react";
import ButtonPrimary from "@/shared/ButtonPrimary";
import Link from "next/link";
import Image from "next/image";

export interface CollectionProps {
  className?: string;
  featuredImage?: string;
  name?: string;
  desc?: string;
  color?: string;
}

const Collection: FC<CollectionProps> = ({
  className = "",
  featuredImage = "/atq.jpeg",
  name = "Informasi",
  desc = "Penerimaan Peserta <br /> Didik Baru (PPDB)",
  color,
}) => {
  return (
    <Link href={"/ppdb"} className={`nc-Collection block ${className}`}>
      <div
        className={`relative w-full aspect-w-16 aspect-h-11 sm:aspect-h-10 h-0 rounded-2xl overflow-hidden group ${color}`}
      >
        <div>
          <Image
            src={featuredImage}
            fill
            alt=""
            className="object-cover "
            sizes="300px"
          />
        </div>
        <span className="opacity-30 group-hover:opacity-50 dark:opacity-50 dark:group-hover:opacity-70 transition-opacity absolute inset-0 bg-black"></span>

        <div>
          <div className="absolute inset-5 flex flex-col">
            <div className="max-w-xs">
              <span className={`block mb-2 text-sm text-slate-300`}>
                {name}
              </span>
              {desc && (
                <h2
                  className={`text-xl md:text-2xl text-white font-semibold`}
                  dangerouslySetInnerHTML={{ __html: desc }}
                ></h2>
              )}
            </div>
            <div className="mt-auto">
              <ButtonPrimary
                sizeClass="py-3 px-4 sm:py-3.5 sm:px-6"
                fontSize="text-sm font-medium"
              >
                Show more
              </ButtonPrimary>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Collection;
