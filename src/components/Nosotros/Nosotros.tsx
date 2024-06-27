import React from "react";
import Image from "next/image";
import nosotrosImg from "../../../public/assets/img/nosotros.png";
import Button from "../Button/Button";

const Nosotros = () => {
  return (
    <>
      <main className="flex flex-col container w-9/10 mx-auto min-h-screen gap-5">
        <div className="text-start my-16">
          <h1 className="text-2xl font-bold">Acerca de Nosotros</h1>
        </div>
        <section className="flex flex-row gap-10 mb-10 justify-center items-center">
          <Image
            src={nosotrosImg}
            alt="Nosotros"
            width={440}
            height={440}
            className="object-contain"
            style={{ width: "auto", height: "auto" }}
          ></Image>
          <div className="flex flex-col gap-y-5">
            <p className="text-justify text-xl">
              Desde hace más de 25 años nos dedicamos a resolver tus problemas
              informáticos, tanto si necesitás armar una PC gaming o planificar
              tu flota para tu Pyme.
            </p>
            <p className="text-justify text-xl">
              Te brindamos soluciones tecnológicas de vanguardia y de permanente
              innovación a través de un servicio técnico altamente profesional y
              personalizado.
            </p>
            <p className="text-justify text-xl">
              Nos comprometemos a asesorarte con profesionalismo y calidad en
              cada etapa que necesites.
            </p>
          </div>
        </section>
        <section className="flex flex-col items-end justify-end">
          <Button text="Contactanos" />
        </section>
      </main>
    </>
  );
};

export default Nosotros;
