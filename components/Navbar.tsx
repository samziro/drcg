"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Programs", href: "/programs" },
  { name: "Blogs", href: "/blogs" },
  { name: "Donate", href: "/donate" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-green/10 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="flex h-20 items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3"
            onClick={closeMenu}
          >
            
            <Image
              src="/logo.png"
              alt="Dabaso Rock Conservation Group"
              width={52}
              height={52}
              priority
              className="object-contain"
            />

            <div className="hidden sm:block">
              <h1 className="font-heading text-lg font-bold text-green leading-tight">
                Dabaso Rock
              </h1>

              <p className="text-xs text-gray-600 leading-none">
                Conservation Group
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">

            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200
                    ${
                      isActive
                        ? "bg-green text-white shadow-sm"
                        : "text-gray-700 hover:text-green hover:bg-green/10"
                    }`}
                >
                  {link.name}
                </Link>
              );
            })}

          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-green/10 transition"
            aria-label="Toggle Menu"
          >
            {menuOpen ? (
              <i className="ri-close-large-line 2xl text-green"></i>
            ) : (
              <i className="ri-menu-3-line text-2xl text-green"></i>
            )}
          </button>

        </div>

      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out
        ${
          menuOpen
            ? "max-h-screen border-t border-green/10"
            : "max-h-0"
        }`}
      >
        <nav className="bg-white/95 backdrop-blur-md px-4 py-5">

          <div className="flex flex-col space-y-2">

            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  className={`rounded-lg px-4 py-3 text-sm font-medium transition-all duration-200
                    ${
                      isActive
                        ? "bg-green text-white"
                        : "text-gray-700 hover:bg-green/10 hover:text-green"
                    }`}
                >
                  {link.name}
                </Link>
              );
            })}

          </div>

        </nav>
      </div>

    </header>
  );
};

export default Header;