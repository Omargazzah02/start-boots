'use client';
import React from 'react';
import Link from 'next/link';

function Nav() {
  return (
    <nav className="bg-white shadow-md py-4 w-full">
      {/* Conteneur principal pour centrer les éléments à 100% */}
      <div className="flex justify-center items-center w-full px-4">
        <div className="flex items-center justify-between w-full max-w-screen-xl">

          {/* Logo avec effet hover */}
          <div className="flex items-center cursor-pointer hover:scale-110 transition-transform duration-300">
            <Link href="/">
              <img src="/images/logo.png" alt="Logo" className="w-20" />
            </Link>
          </div>

          {/* Liens de navigation avec effet hover */}
          <ul className="flex space-x-8 text-black font-semibold text-lg">
            <li><Link href="/explore" className="no-underline text-black  hover:text-gray-600">Explore</Link></li>
            <li><Link href="/hire" className="no-underline  text-black  hover:text-gray-600">Hire a Designer</Link></li>
            <li><Link href="/jobs" className="no-underline  text-black  hover:text-gray-600">Find Jobs</Link></li>
            <li><Link href="/shots" className="no-underline  text-black  hover:text-gray-600">Shots</Link></li>
            <li><Link href="/blog" className="no-underline text-black  hover:text-gray-600">Blog</Link></li>
          </ul>

          {/* Barre de recherche avec effet hover */}
          <div className="relative max-w-sm">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 hover:border-blue-500"
            />
            <img
              src="images/search.png"
              className="absolute left-3 top-2.5 w-5 h-5 text-gray-500"
              alt="Search Icon"
            />
          </div>

          {/* Boutons avec effet hover */}
          <div className="flex items-center space-x-6">
            <Link href="/login">
              <button className="px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors duration-300 ease-in-out">
                Log In
              </button>
            </Link>
            <Link href="/signup">
              <button className="px-6 py-2 border border-black text-black bg-white rounded-full hover:bg-gray-100 transition-colors duration-300 ease-in-out">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
