'use client';
import React from 'react';
import Link from 'next/link';

function Footer() {
  return (
    <footer className="bg-white py-10 mt-auto">
      <div className="max-w-screen-xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        {/* Logo */}
        <div className="flex items-center mb-6 md:mb-0">
          <img src="/images/logo.svg" alt="Logo" className="w-24 h-auto" />
        </div>

        {/* Liens du footer */}
        <div className="flex flex-wrap justify-center space-x-12 text-sm font-bold mb-6 md:mb-0">
          <Link href="/for-designers" className="no-underline text-black hover:text-gray-600">For Designers</Link>
          <Link href="/hire-talent" className="no-underline text-black hover:text-gray-600">Hire Talent</Link>
          <Link href="/inspiration" className="no-underline text-black hover:text-gray-600">Inspiration</Link>
          <Link href="/advertising" className="no-underline text-black hover:text-gray-600">Advertising</Link>
          <Link href="/blog" className="no-underline text-black hover:text-gray-600">Blog</Link>
          <Link href="/about" className="no-underline text-black hover:text-gray-600">About</Link>
          <Link href="/careers" className="no-underline text-black hover:text-gray-600">Careers</Link>
          <Link href="/support" className="no-underline text-black hover:text-gray-600">Support</Link>
        </div>

        {/* Réseaux sociaux avec images .jpg */}
        <div className="flex space-x-6">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="/images/twitter.jpg" alt="Twitter" className="w-8 h-8 hover:opacity-80" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="/images/facebook.jpg" alt="Facebook" className="w-8 h-8 hover:opacity-80" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="/images/instagram.jpg" alt="Instagram" className="w-8 h-8 hover:opacity-80" />
          </a>
          <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer">
            <img src="/images/dribbble.jpg" alt="Dribbble" className="w-8 h-8 hover:opacity-80" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
