import React from "react";
import { POSTS } from "@/data/posts";
import { PostDataType } from "@/data/types";
import Avatar from "@/shared/Avatar";
import Badge from "@/shared/Badge";
import SocialsList from "@/shared/SocialsList";
import Image from "next/image";
import travelhero2Image from "@/images/travelhero2.png";
import PageContact from "../kontak/page";
import Link from "next/link";
import { Route } from "@/routers/types";

const Page = ({}) => {
  const renderHeader = () => {
    return (
      <header className="container rounded-xl">
        <div className="max-w-screen-md mx-auto space-y-5">
          <Badge color="green" name="PPDB" />
          <h1
            className="text-neutral-900 font-semibold text-3xl md:text-4xl md:!leading-[120%] lg:text-4xl dark:text-neutral-100 max-w-4xl"
            title="PPDB Tahun Pelajaran 2024-2025"
          >
            Penerimaan Peserta Didik Baru Tahun Pelajaran 2024-2025
          </h1>
          <span className="block text-base text-neutral-500 md:text-lg dark:text-neutral-400 pb-1">
            Selamat datang di laman resmi Penerimaan Peserta Didik Baru (PPDB)
            tahun pelajaran 2024-2025. Kami menyediakan informasi lengkap dan
            terkini mengenai proses pendaftaran siswa baru di sekolah kami.
          </span>

          <div className="w-full border-b border-neutral-100 dark:border-neutral-800"></div>
          <div className="flex flex-col items-baseline sm:flex-row sm:justify-between">
            <div className="nc-PostMeta2 flex items-center flex-wrap text-neutral-700 text-left dark:text-neutral-200 text-sm leading-none flex-shrink-0">
              <Avatar
                containerClassName="flex-shrink-0"
                sizeClass="w-8 h-8 sm:h-11 sm:w-11 "
              />
              <div className="ml-3">
                <div className="flex items-center">
                  <p className="block font-semibold">
                    Admin PPDB
                  </p>
                </div>
                <div className="text-xs mt-[6px]">
                  <span className="text-neutral-700 dark:text-neutral-300">
                    1 Juli 2024
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <SocialsList />
            </div>
          </div>
        </div>
      </header>
    );
  };

  const renderContent = () => {
    return (
      <div
        id="single-entry-content"
        className="prose dark:prose-invert prose-sm !max-w-screen-md sm:prose lg:prose-lg mx-auto dark:prose-dark"
      >
        <p>
          Penerimaan Peserta Didik Baru (PPDB) untuk tahun pelajaran 2024-2025
          telah dibuka. Proses PPDB dilakukan secara online melalui laman resmi
          kami. Semua informasi terkait persyaratan, jadwal, dan tata cara
          pendaftaran dapat diakses melalui situs ini.
        </p>
        <p>
          Bagi calon peserta didik yang ingin mendaftar, pastikan untuk
          menyiapkan dokumen-dokumen yang diperlukan seperti Kartu Keluarga,
          Akta Kelahiran, dan rapor terakhir. Pendaftaran akan berlangsung
          mulai tanggal 1 Juli 2024 hingga 15 Juli 2024.
        </p>
        <h3>Persyaratan Pendaftaran</h3>
        <p>
          Berikut adalah beberapa persyaratan yang harus dipenuhi oleh calon
          peserta didik:
        </p>
        <ul>
          <li>Usia minimal 6 tahun pada tanggal 1 Juli 2024.</li>
          <li>Mengisi formulir pendaftaran secara online.</li>
          <li>Mengunggah dokumen-dokumen yang diperlukan.</li>
          <li>Mengikuti tes seleksi yang akan dijadwalkan setelah pendaftaran.</li>
        </ul>
        <h2>Jadwal Pendaftaran</h2>
        <p>
          Pendaftaran akan dibuka pada tanggal 1 Juli 2024 dan berakhir pada
          tanggal 15 Juli 2024. Tes seleksi akan dilaksanakan pada tanggal 20
          Juli 2024, dan pengumuman hasil seleksi akan disampaikan pada tanggal
          25 Juli 2024.
        </p>
        <figure>
          <Image src={travelhero2Image} alt="PPDB" className="rounded-2xl" />
          <figcaption>
            Proses pendaftaran PPDB secara online.
          </figcaption>
        </figure>
        <p>
          Untuk informasi lebih lanjut, silakan kunjungi laman FAQ atau hubungi
          kontak kami melalui email atau nomor telepon yang tertera di bawah
          ini.
        </p>
      </div>
    );
  };

  const renderPostRelated = (post: PostDataType) => {
    return (
      <div
        key={post.id}
        className="relative aspect-w-3 aspect-h-4 rounded-3xl overflow-hidden group"
      >
        <Link href={post.href as Route} />
        <Image
          className="object-cover transform group-hover:scale-105 transition-transform duration-300"
          src={post.featuredImage}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          alt=""
        />
        <div>
          <div className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-black"></div>
        </div>
        <div className="flex flex-col justify-end items-start text-xs text-neutral-300 space-y-2.5 p-4">
          <Badge name="Categories" />
          <h2 className="block text-lg font-semibold text-white ">
            <span className="line-clamp-2">{post.title}</span>
          </h2>

          <div className="flex">
            <span className="block text-neutral-200 hover:text-white font-medium truncate">
              {post.author.displayName}
            </span>
            <span className="mx-1.5 font-medium">·</span>
            <span className="font-normal truncate">{post.date}</span>
          </div>
        </div>
        <Link href={post.href as Route} />
      </div>
    );
  };

  return (
    <div className="nc-PageSingle pt-8 lg:pt-16">
      {renderHeader()}

      <div className="nc-SingleContent container space-y-10 my-10 sm:my-12">
        {renderContent()}
        <PageContact />
        <div className="max-w-screen-md mx-auto border-b border-t border-neutral-100 dark:border-neutral-700"></div>
      </div>
      <div className="relative bg-neutral-100 dark:bg-neutral-800 py-16 lg:py-28 mt-16 lg:mt-24">
        <div className="container ">
          <h2 className="text-3xl font-semibold">Informasi Terkait</h2>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {/*  */}
            {POSTS.filter((_, i) => i < 4).map(renderPostRelated)}
            {/*  */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;