import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/assets/img/logo IM.png";

const Nav = () => {
  return (
    <nav className="flex flex-row justify-between w-full mb-16 px-8 pt-6">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src={logo.src}
          alt="logo"
          width={150}
          height={80}
          className="object-contain"
        />
      </Link>

      <div className="flex">
        <div className="flex gap-3 md:gap-5 items-center">
          <Link href="/productos">
            Productos
          </Link>
          <Link href="/servicios">
            Servicios
          </Link>
          <Link href="/nosotros">
            Nosotros
          </Link>
          <Link href="/contacto">
            contacto
          </Link>
        </div>
      </div>
      <div>
        <button
          type="button"
          className="border-2 border-white/50 px-4 py-3 rounded-md"
        >
          Chatea con nosotros
        </button>
      </div>
    </nav>
  );
};

export default Nav;
