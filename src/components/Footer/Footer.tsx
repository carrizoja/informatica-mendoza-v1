import React from "react";
import styles from "./footer.module.css";
import logo from "../../../public/assets/img/logo IM.png";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className={`bg-white dark:bg-gray-900 ${styles.footer}`}>
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="/" className="flex items-center">
              <Image
                src={logo}
                alt="logo"
                width={190}
                height={80}
                className="object-contain"
                style={{ width: "auto", height: "auto" }}
              />
            </a>
          </div>
          <div className="flex flex-row gap-20 justify-center">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 dark:text-white">
                Categorías
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-2">
                  <a href="https://flowbite.com/" className="hover:underline">
                    Computadora
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                  >
                    Notebook
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                  >
                    Monitor
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                  >
                    Gaming
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                  >
                    Cámaras
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 dark:text-white">
                Mapa de sitio
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-2">
                  <a href="/productos" className="hover:underline ">
                    Productos
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/servicios" className="hover:underline">
                    Servicios
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/nosotros" className="hover:underline">
                    Nosotros
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/contacto" className="hover:underline">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 dark:text-white">
                Redes Sociales
              </h2>
              <ul className="text-gray-200 dark:text-gray-400 font-medium ">
                <li className="mb-4 flex flex-row space-x-4">
                  <a href="#" className="hover:opacity-50 transition-opacity duration-1000">
                    <div className="bg-gray-100 rounded-lg h-10 w-10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24"><path fill="#030711" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"/></svg>
                    </div>
                  </a>         
                  <a href="#" className="hover:opacity-50 transition-opacity duration-1000">
                    <div className="bg-gray-100 rounded-lg h-10 w-10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 50 50"><path fill="#030711" d="M26 20v-3c0-1.3.3-2 2.4-2H31v-5h-4c-5 0-7 3.3-7 7v3h-4v5h4v15h6V25h4.4l.6-5z"/></svg>
                    </div>
                  </a>      
                  <a href="#" className="hover:opacity-50 transition-opacity duration-1000">
                    <div className="bg-gray-100 rounded-lg h-10 w-10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24"><path fill="#030711" d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23c-1.48 0-2.93-.39-4.19-1.15l-.3-.17l-3.12.82l.83-3.04l-.2-.32a8.188 8.188 0 0 1-1.26-4.38c.01-4.54 3.7-8.24 8.25-8.24M8.53 7.33c-.16 0-.43.06-.66.31c-.22.25-.87.86-.87 2.07c0 1.22.89 2.39 1 2.56c.14.17 1.76 2.67 4.25 3.73c.59.27 1.05.42 1.41.53c.59.19 1.13.16 1.56.1c.48-.07 1.46-.6 1.67-1.18c.21-.58.21-1.07.15-1.18c-.07-.1-.23-.16-.48-.27c-.25-.14-1.47-.74-1.69-.82c-.23-.08-.37-.12-.56.12c-.16.25-.64.81-.78.97c-.15.17-.29.19-.53.07c-.26-.13-1.06-.39-2-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.12-.24-.01-.39.11-.5c.11-.11.27-.29.37-.44c.13-.14.17-.25.25-.41c.08-.17.04-.31-.02-.43c-.06-.11-.56-1.35-.77-1.84c-.2-.48-.4-.42-.56-.43c-.14 0-.3-.01-.47-.01"/></svg>
                    </div>
                  </a>          
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="flex flex-row">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400 mx-auto my-auto">
            © 2024{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              Informática Mendoza
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
