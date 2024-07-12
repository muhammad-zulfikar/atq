import React, { FC } from "react";
import SocialsList from "@/shared/SocialsList";
import Label from "@/components/Label";
import Input from "@/shared/Input";
import Textarea from "@/shared/Textarea";
import ButtonPrimary from "@/shared/ButtonPrimary";

export interface SectionContactProps { }

const info = [
  {
    title: "Alamat",
    desc: "Jl. Putri Tunggal No.17, Harjamukti, Cimanggis, Depok, Jawa Barat, Indonesia",
  },
  {
    title: "E-mail",
    desc: "	sdit_at_taufiq@yahoo.co.id",
  },
  {
    title: "Telepon",
    desc: "021-8733-222",
  },
  {
    title: "WhatsApp",
    desc: "081234567890",
  },
];

const SectionContact: FC<SectionContactProps> = ({ }) => {
  return (
    <div className={`nc-PageContact overflow-hidden`}>
      <div>
        <h2 className="font-semibold text-3xl md:text-4xl text-left flex items-center">
          Kontak
        </h2>
        <div className="container max-w-7xl mx-auto mt-10">
          <div className="flex-shrink-0 grid grid-cols-1 sm:grid-cols-2 gap-12 ">
            <div className="max-w-sm space-y-8">
              {info.map((item, index) => (
                <div key={index}>
                  <h3 className="font-semibold text-sm dark:text-neutral-200 tracking-wider">
                    {item.title}
                  </h3>
                  <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
                    {item.desc}
                  </span>
                </div>
              ))}
              <div>
                <h3 className="font-semibold text-sm dark:text-neutral-200 tracking-wider">
                  Sosial Media
                </h3>
                <SocialsList className="mt-2" />
              </div>
            </div>
            <div>
              <form className="grid grid-cols-1 gap-6" action="#" method="post">
                <label className="block">
                  <Label>Nama</Label>

                  <Input
                    type="text"
                    className="mt-1"
                  />
                </label>
                <label className="block">
                  <Label>E-mail</Label>

                  <Input
                    type="email"
                    className="mt-1"
                  />
                </label>
                <label className="block">
                  <Label>Pesan</Label>

                  <Textarea className="mt-1" rows={6} />
                </label>
                <div>
                  <ButtonPrimary type="submit">Kirim Pesan</ButtonPrimary>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default SectionContact;
