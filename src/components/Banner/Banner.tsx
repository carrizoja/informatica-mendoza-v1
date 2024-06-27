import React from "react";
import banner from "../../../public/assets/img/banner.png";
import Image from "next/image";
const Banner = () => {
  return (
    <section>

        <Image
          src={banner.src}
          width={1920}
          height={1080}
          alt="banner"
          className="object-cover"
        />

    </section>
  );
};

export default Banner;
