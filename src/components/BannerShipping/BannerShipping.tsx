import React from "react";
import secure from "../../../public/assets/img/lock.png";
import localShipping from "../../../public/assets/img/local_shipping.png"
import styles from "./bannerShipping.module.css";
const BannerShipping = () => {
    return (
        <section className="flex flex-row h-60 w-2/3 gap-20 rounded-lg border border-white items-center justify-center">
            <div className="flex flex-col items-center w-1/3 justify-center bg-white gap-5 rounded-lg h-40">
            <img className={styles.shippingImg} src={localShipping.src} alt="local shipping"/>
                <p className="text-gray-950 font-bold">Envíos a todo el país</p>
            </div>
            <div className="flex flex-col items-center w-1/3 justify-center bg-white gap-5 rounded-lg h-40">
                <img className={styles.secureImg} src={secure.src} alt="secure logo" />
                <p className="text-gray-950 font-bold">Compra 100% segura</p>
            </div>
        </section>
    );

};

export default BannerShipping;
