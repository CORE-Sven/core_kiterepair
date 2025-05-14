'use client';

import { useState } from 'react';

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black text-white py-4 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-xl font-bold tracking-tight">KITEREPAIR</div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-none"
          onClick={toggleMobileMenu}
          aria-label="Menu öffnen"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-sm">
          <a
            href="#benefits"
            className="uppercase hover:text-gray-300 transition-colors"
          >
            VORTEILE
          </a>
          <a
            href="#process"
            className="uppercase hover:text-gray-300 transition-colors"
          >
            Vorgehensweise
          </a>
          <a
            href="#location"
            className="uppercase hover:text-gray-300 transition-colors"
          >
            LOCATION
          </a>
          <a
            href="#about"
            className="uppercase hover:text-gray-300 transition-colors"
          >
            Unsere Segelmacherin
          </a>
          <a
            href="#services"
            className="uppercase hover:text-gray-300 transition-colors"
          >
            SERVICES
          </a>
          <a
            href="#faq"
            className="uppercase hover:text-gray-300 transition-colors"
          >
            FAQ
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} absolute left-0 right-0 bg-black mt-4 py-4 px-6 border-t border-gray-800`}
      >
        <div className="flex flex-col space-y-4">
          <a
            href="#benefits"
            className="hover:text-gray-300 transition-colors"
            onClick={toggleMobileMenu}
          >
            VORTEILE
          </a>
          <a
            href="#process"
            className="uppercase hover:text-gray-300 transition-colors"
            onClick={toggleMobileMenu}
          >
            Vorgehensweise
          </a>
          <a
            href="#location"
            className="uppercase hover:text-gray-300 transition-colors"
            onClick={toggleMobileMenu}
          >
            LOCATION
          </a>
          <a
            href="#about"
            className="uppercase hover:text-gray-300 transition-colors"
            onClick={toggleMobileMenu}
          >
            Unsere Segelmacherin
          </a>
          <a
            href="#services"
            className="uppercase hover:text-gray-300 transition-colors"
            onClick={toggleMobileMenu}
          >
            SERVICES
          </a>
          <a
            href="#faq"
            className="hover:text-gray-300 transition-colors"
            onClick={toggleMobileMenu}
          >
            FAQ
          </a>
        </div>
      </div>
    </nav>
  );
} 