import React from "react";
import styles from "./carouselBrands.module.css";
import intel from "../../../public/assets/img/intel.png"
import Image from "next/image";
import lenovo from "../../../public/assets/img/lenovo.png"
import asus from "../../../public/assets/img/asus.png"
import hp from "../../../public/assets/img/hp.png"
import samsung from "../../../public/assets/img/samsung.png"

const CarouselBrands = () => {
  return (
    <>
      <section className={styles.slider}>
        <div className={styles.slidetrack}>
          <div className={styles.slide}>
            <Image
             src={intel.src}
             alt="intel logo"
             height={50}
             width={50}
              />
           
          </div>
          <div className={styles.slide}>
            <Image
             src={hp.src}
             alt="hp logo"
             height={50}
             width={50}
              />
           
          </div>
      
          <div className={styles.slide}>
            <Image
             src={lenovo.src}
             alt="lenovo logo"
             height={50}
             width={50}
              />
           
          </div>
          <div className={styles.slide}>
            <Image
             src={asus.src}
             alt="asus"
             height={50}
             width={50}
              />
           
          </div>
          <div className={styles.slide}>
            <Image
             src={samsung.src}
             alt="intel"
             height={50}
             width={50}
              />
           
          </div>
      
      
        </div>
      </section>
    </>
  );
};

export default CarouselBrands;
