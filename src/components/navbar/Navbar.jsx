import "flowbite";
import "flowbite/dist/flowbite.min.css";
import "flowbite/dist/flowbite.min.js";

import logo from "../../../public/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      id="navbar"
      className="px-11 fixed top-0 left-0 right-0 bg-white w-[100vw] lg:h-28 z-50 shadow-shadowNavbar"
    >
      <div className="flex flex-wrap lg:flex-nowrap justify-between mx-auto max-w-[1300px]">
        <a href="/Optim/">
          <img src={logo} className="w-24 lg:w-28 pb-6 pt-4" alt="logo" />
        </a>
        {/* MENU */}
        <button
          className="mt-4 block lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg
              className="w-10 h-10 transform rotate-90 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              data-collapse-toggle="navbar-default"
              type="button"
              aria-controls="navbar-default"
              aria-expanded="false"
              className="w-10 h-10 text-black transition duration-300 ease-in-out"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
        {/* ==== */}
        <ul
          id="navbar-default"
          className={`lg:flex mb-6 lg:mb-0 gap-10 text-[15px] w-full md:w-[90%] justify-between font-semibold items-center ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <div className="flex flex-wrap lg:flex-nowrap text-center lg:text-start gap-4 lg:gap-[100px] md:pl-20">
            <a
              href="/Optim/#home"
              className="hover:text-[#10454F] w-full lg:w-auto hover:-translate-y-1 transition"
            >
              Inicio
            </a>
            <a
              href="/Optim/#services"
              id="dropdownHoverButton"
              data-dropdown-toggle="dropdownHover"
              data-dropdown-trigger="hover"
              className={`hover:text-[#10454F] w-full lg:w-auto hover:-translate-y-1 transition`}
              type="button"
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
            >
              Servicios
              <div
                id="dropdownHover"
                className={`z-10 lg:absolute bg-white divide-y divide-gray-100 rounded-lg w-64 dark:bg-gray-700 ${
                  isOpen ? "block" : "hidden"
                }`}
              >
                <ul
                  className="py-2 hidden lg:block text-sm text-gray-700 transition-opacity duration-500 ease-in-out opacity-0 md:opacity-100 transform md:transform-none dark:text-gray-200"
                  aria-labelledby="dropdownHoverButton"
                >
                  <li>
                    <Link to={"/Optim/services/1"}>
                      <button className="block text-justify py-2 px-5 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        Adaptación y mitigación del cambio climático
                      </button>
                    </Link>
                    <hr className="w-[82%] mx-auto" />
                  </li>
                  <li>
                    <Link to={"/Optim/services/2"}>
                      <button className="block py-2 px-5 text-justify hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        Operación de proyectos de cooperación internacional
                      </button>
                    </Link>
                    <hr className="w-[82%] mx-auto" />
                  </li>
                  <li>
                    <Link to={"/Optim/services/3"}>
                      <button className="block py-2 px-5 text-justify hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        Gestión ambiental y social de proyectos productivos
                      </button>
                    </Link>
                    <hr className="w-[82%] mx-auto" />
                  </li>
                  <li>
                    <Link to={"/Optim/services/4"}>
                      <button className="block py-2 px-5 text-justify hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        Desarrollo de políticas públicas
                      </button>
                    </Link>
                    <hr className="w-[82%] mx-auto" />
                  </li>
                </ul>
              </div>
            </a>
            <a
              className="hover:text-[#10454F] w-full lg:w-auto hover:-translate-y-1 transition"
              href="/Optim/#enterprise"
            >
              Empresa
            </a>
            <a
              className="hover:text-[#10454F] w-full lg:w-auto hover:-translate-y-1 transition"
              href="/Optim/#customer"
            >
              Clientes
            </a>
            <Link
              to={"/Optim/projects"}
              className="lg:w-auto hover:-translate-y-1 w-full transition"
            >
              <button className="hover:text-[#10454F]">Proyectos</button>
            </Link>
          </div>
          <a
            className="hidden lg:flex py-2.5 px-[18px] bg-black hover:bg-[#10454F] transition text-white rounded-[55px] text-sm font-semibold w-auto"
            href="/Optim/#contact"
          >
            Contacto
          </a>
        </ul>
      </div>
    </nav>
  );
}
