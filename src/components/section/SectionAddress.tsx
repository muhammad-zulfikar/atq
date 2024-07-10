import React, { FC } from "react";

const SectionAddress: FC = () => {
  const mapSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1982.095139434055!2d106.879160!3d-6.368960!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ed4637e8a2a5%3A0x2e0110f8e1e6db9!2sJl.%20Putri%20Tunggal%20No.17%2C%20Harjamukti%2C%20Cimanggis%2C%20Depok%2C%20Jawa%20Barat%2C%20Indonesia!5e0!3m2!1sen!2sus!4v1625162111240!5m2!1sen!2sus`;

  return (
    <div>
      <h2 className="font-medium text-3xl md:text-4xl text-left mb-10">
        Lokasi
      </h2>
      <div className="w-full h-96 md:h-[500px]">
        <iframe
          src={mapSrc}
          width="100%"
          height="100%"
          style={{ border: 0, borderRadius: "1rem" }}
          allowFullScreen={false}
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default SectionAddress;