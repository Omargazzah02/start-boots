
'use client';
import React, { useState, useRef } from 'react';
import Link from 'next/link';

function Nav() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(prevState => !prevState);
  };

  const menuRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <nav className="flex flex-col bg-white fixed top-0 left-0 w-full z-50">
        <div className="w-full justify-between flex flex-row">
          <div className="flex justify-around items-center w-[50%]">
            <Link href="/" className="ml-7">
              <img src="/images/logo.png" alt="Logo" className="w-60" />
            </Link>

            <div className="hidden lg:w-[80%] lg:flex lg:justify-between">
              <a href="#" className="text-gray-600 no-underline">Themes</a>
              <a href="#" className="text-gray-600 no-underline">Templates</a>
              <a href="#" className="text-gray-600 no-underline">Bundles</a>
              <a href="#" className="text-gray-600 no-underline">Forms</a>
              <a href="#" className="text-gray-600 no-underline">Last version</a>
            </div>
          </div>

          <img
            src="/images/barre-nav-mob.svg"
            alt="Menu icon"
            className="w-5 lg:hidden mr-7 cursor-pointer"
            onClick={toggleMenu} // Appel à toggleMenu quand l'icône est cliquée
          />

          <div className="lg:flex justify-between items-center w-[15%] pr-11 text-gray-600 hidden">
            <a href="#" className="no-underline text-gray-600">Blog</a>
            <button className="bg-[#DD3D31] w-20 h-10 rounded-md text-white hover:bg-[#BB3026]">Login</button>
          </div>
        </div>

        {/* Menu mobile affiché uniquement si menuVisible est true */}
        <div
          className={`w-full h-80 flex flex-col p-3 lg:hidden ${menuVisible ? '' : 'hidden'}`}
          ref={menuRef} // Utilisation de useRef si besoin d'une référence
        >
          <a href="#" className="text-gray-600 no-underline p-1">Themes</a>
          <a href="#" className="text-gray-600 no-underline p-1">Templates</a>
          <a href="#" className="text-gray-600 no-underline p-1">Bundles</a>
          <a href="#" className="text-gray-600 no-underline p-1">Fm</a>
          <a href="#" className="text-gray-600 no-underline p-1">Modified</a>

          <br />

          <a href="#" className="no-underline text-gray-600 p-1">Blog</a>
          <button className="bg-[#DD3D31] w-20 h-10 rounded-md text-white hover:bg-[#BB3026] p-1">Login</button>
        </div>
      </nav>
    </>
  );
}

export default Nav;
