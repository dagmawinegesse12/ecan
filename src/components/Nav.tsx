// components/Nav.tsx
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const Nav: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav
      id="navbar"
      className="sticky top-0 z-50 w-full bg-white shadow-sm transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image

            src="/ECAN_Logo_2.svg"
            alt="ECAN logo"
            width={150}
            height={150}
            className="object-contain"
          />
        </Link>

        {/* Desktop Links */}
        <ul className="hidden lg:flex space-x-6 items-center">
          <li><Link href="/" className="hover:text-green-700">Home</Link></li>
          <li><Link href="/about" className="hover:text-green-700">About Us</Link></li>
          <li><Link href="/events" className="hover:text-green-700">Events</Link></li>
          <li><Link href="/gallery" className="hover:text-green-700">Gallery</Link></li>
          <li><Link href="/contact" className="hover:text-green-700">Contact Us</Link></li>
          <li><Link href="/register" className="hover:text-green-700">Register</Link></li>
          <li><Link href="/bylaws" className="hover:text-green-700">Bylaws</Link></li>
          <li>
            <Link
              href="/donate"
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Donation
            </Link>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen((o) => !o)}
          className="lg:hidden text-2xl"
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          lg:hidden
          bg-white
          overflow-hidden
          transition-[max-height]
          duration-300
          ease-in-out
          ${open ? "max-h-screen" : "max-h-0"}
        `}
      >
        <ul className="flex flex-col space-y-1 px-6 pb-6">
          <li>
            <Link href="/" onClick={() => setOpen(false)} className="block py-2 hover:text-green-700">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" onClick={() => setOpen(false)} className="block py-2 hover:text-green-700">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/events" onClick={() => setOpen(false)} className="block py-2 hover:text-green-700">
              Events
            </Link>
          </li>
          <li>
            <Link href="/gallery" onClick={() => setOpen(false)} className="block py-2 hover:text-green-700">
              Gallery
            </Link>
          </li>
          <li>
            <Link href="/contact" onClick={() => setOpen(false)} className="block py-2 hover:text-green-700">
              Contact Us
            </Link>
          </li>
          <li>
            <Link href="/register" onClick={() => setOpen(false)} className="block py-2 hover:text-green-700">
              Register
            </Link>
          </li>
          <li>
            <Link href="/bylaws" onClick={() => setOpen(false)} className="block py-2 hover:text-green-700">
              Bylaws
            </Link>
          </li>
          <li>
            <Link
              href="/donate"
              onClick={() => setOpen(false)}
              className="block bg-green-600 text-white text-center px-4 py-2 rounded hover:bg-green-700"
            >
              Donation
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
