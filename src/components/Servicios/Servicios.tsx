import React from "react";
import soporte from "../../../public/assets/img/soporte.jpg";
import styles from "./servicios.module.css";
import gamer from "../../../public/assets/img/gamer.jpg";
import pyme from "../../../public/assets/img/pyme.jpg";

const Servicios = () => {
  return (
    <>
      <main className="flex flex-col container w-10/12 mx-auto min-h-screen gap-5">
        <div className="text-start my-16">
          <h1 className="text-2xl font-bold">Servicios</h1>
        </div>
        <section className="w-full flex xl:flex-row md:flex-row flex-wrap sm:flex-col lg:flex-row gap-10 mb-10 justify-center items-center sm:flex-col">
          <div className={` sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-96 relative flex flex-col text-gray-700 bg-gray-950 shadow-md bg-clip-border rounded-xl w-96 ${styles.card}`}>
            <h4 className=" text-center block mb-2 mt-4 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-white">
              Soporte técnico
            </h4>
            <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-70">
              <img src={soporte.src} alt="soporte tecnico" />
            </div>
            <div className="p-6 text-center flex flex-col w-5/6 mx-auto">
              <p className="block font-sans text-base text-left antialiased font-medium leading-relaxed text-white bg-clip-text bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400">
              &#8226;  Repará tu equipo o accesorio
              </p>
              <p className="block font-sans text-base text-left antialiased font-medium leading-relaxed text-white bg-clip-text bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400">
              &#8226;  Mantené tu PC
              </p>
              <p className="block font-sans text-base text-left antialiased font-medium leading-relaxed text-white bg-clip-text bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400">
              &#8226;  Asesorate en lo que necesites
              </p>
            </div>
           
          </div>
          <div className={`sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-96 relative flex flex-col text-gray-700 bg-gray-950 shadow-md bg-clip-border rounded-xl w-96 ${styles.card}`}>
            <h4 className=" text-center block mb-2 mt-4 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-white">
              Asesoramos a tu Pyme
            </h4>
            <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-70">
              <img src={pyme.src} alt="pymes" />
            </div>
            <div className="p-6 text-center flex flex-col lg:w-5/6 xl:w-full mx-auto">
              <p className="block font-sans text-base text-left antialiased font-medium leading-relaxed text-white bg-clip-text bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400">
              &#8226;  Armá tu parque informático
              </p>
              <p className="font-sans text-base text-left antialiased font-medium leading-relaxed text-white bg-clip-text bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400">
              &#8226;  Resolvé tus necesidades de mantenimiento
              </p>
              <p className="block font-sans text-base text-left antialiased font-medium leading-relaxed text-white bg-clip-text bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400">
              &#8226;  Armá tu red
              </p>
            </div>
           
          </div>
          <div className={`sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-96 relative flex flex-col text-gray-700 bg-gray-950 shadow-md bg-clip-border rounded-xl w-96 ${styles.card}`}>
            <h4 className=" text-center block mb-2 mt-4 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-white">
              Encontrá tu PC o accesorio
            </h4>
            <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-70">
              <img src={gamer.src} alt="gamer" />
            </div>
            <div className="p-6 text-center flex flex-col w-5/6 mx-auto">
              <p className="block font-sans text-base text-left antialiased font-medium leading-relaxed text-white bg-clip-text bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400">
              &#8226;  Armá tu PC a medida
              </p>
              <p className="block font-sans text-base text-left antialiased font-medium leading-relaxed text-white bg-clip-text bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400">
              &#8226;  Elegí el accesorio que necesitás
              </p>
              <p className="block font-sans text-base text-left antialiased font-medium leading-relaxed text-white bg-clip-text bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400">
              &#8226;  Encontrá el periférico adecuado
              </p>
            </div>
           
          </div>
        </section>
      </main>
    </>
  );
};

export default Servicios;
