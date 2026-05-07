import Link from "next/link";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-green/10 backdrop-blur-xl shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2"
          >
            <Image
              src="/favicon.png"
              alt="Dabaso Rock Conservation Group"
              width={64}
              height={64}
            />

            <div className="font-heading text-lg font-bold text-green leading-tight">
               Dabaso Rock Conservation
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">

            <Link
              href="/"
              className="px-3 py-2 text-sm transition-colors hover:text-nature text-nature font-semibold"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="px-3 py-2 text-sm transition-colors hover:text-nature text-muted-foreground"
            >
              About Us
            </Link>

            <Link
              href="/programs"
              className="px-3 py-2 text-sm transition-colors hover:text-nature text-muted-foreground"
            >
              Programs
            </Link>

            <Link
              href="/projects"
              className="px-3 py-2 text-sm transition-colors hover:text-nature text-muted-foreground"
            >
              Projects
            </Link>

            <Link
              href="/eco-tourism"
              className="px-3 py-2 text-sm transition-colors hover:text-nature text-muted-foreground"
            >
              Eco-Tourism
            </Link>

            <Link
              href="/gallery"
              className="px-3 py-2 text-sm transition-colors hover:text-nature text-muted-foreground"
            >
              Gallery
            </Link>

            <Link
              href="/membership"
              className="px-3 py-2 text-sm transition-colors hover:text-nature text-muted-foreground"
            >
              Membership
            </Link>

            <Link
              href="/partnerships"
              className="px-3 py-2 text-sm transition-colors hover:text-nature text-muted-foreground"
            >
              Partnerships
            </Link>

            <Link
              href="/contact"
              className="px-3 py-2 text-sm transition-colors hover:text-nature text-muted-foreground"
            >
              Contact
            </Link>

          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-menu h-6 w-6"
            >
              <path d="M4 5h16" />
              <path d="M4 12h16" />
              <path d="M4 19h16" />
            </svg>
          </button>

        </div>
      </div>
    </header>
  );
};

export default Header;