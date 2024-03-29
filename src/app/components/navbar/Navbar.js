"use client"

import Link from "next/link";
import { useState, useEffect } from "react";
import { IconMenu2, IconX } from "@tabler/icons-react";
import MenuNavbar from "./MenuNavbar";
import SearchButton from "../search/SearchButton";

const Navbar = () => {
  const [bukaMenu, setBukaMenu] = useState(false);
  const [putarIcon, setPutarIcon] = useState(false);

  const klikMenuIcon = () => {
    setBukaMenu(!bukaMenu);
    setPutarIcon(!putarIcon);
  };

  const pilihMenu = () => {
    setBukaMenu(false);
    setPutarIcon(false);
  };

  useEffect(() => {
    const klikEsc = (klik) => {
      if (klik.keyCode === 27 && bukaMenu) {
        setBukaMenu(false);
        setPutarIcon(false);
      }
    };

    document.addEventListener("keydown", klikEsc);

    return () => {
      document.removeEventListener("keydown", klikEsc);
    };
  }, [bukaMenu]);

  const bukaSidbar = `fixed flex flex-col top-0 left-0 h-full w-56 bg-gray-200 px-4 transform transition-transform duration-300 ease-in-out z-50 border-r-2 border-blue-500${
    bukaMenu ? " translate-x-0" : " -translate-x-full"
  }`;

  return (
    <header className="border-b-2 border-blue-500 bg-gray-100 p-4 sticky top-0 left-0 right-0 z-10">
      <div className="max-w-7xl relative mx-auto flex justify-center items-center">
      <div className="flex items-center">
          <div className="hidden md:block">
            <MenuNavbar pilihMenu={pilihMenu} />
          </div>

          <div className="absolute right-0 hidden md:block">
            <SearchButton/>
          </div>
      </div>
        
        <div className="block md:hidden">
          <div className="flex items-center justify-center gap-6">
            <div className="z-10">
              <SearchButton />
            </div>

            <div>
              <Link href="/" className="font-opsi text-4xl">
                Rizky Putra
              </Link>
            </div>

            <button
              onClick={klikMenuIcon}
              className={`transform ${
                putarIcon ? "rotate-180" : ""
              } transition duration-300`}
            >
              {bukaMenu ? <IconX /> : <IconMenu2 />}
            </button>
          </div>
        </div>

        {bukaMenu && (
          <div
            className="fixed inset-0 bg-black bg-opacity-70 z-40  "
            onClick={klikMenuIcon}
          />
        )}

        <div className={bukaSidbar}>
          <div className="min-h-screen flex flex-col items-center justify-center">
            <MenuNavbar pilihMenu={pilihMenu} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
