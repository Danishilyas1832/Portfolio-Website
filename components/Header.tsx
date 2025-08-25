"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-900 text-white shadow-md w-full">
      <nav className="w-full flex items-center justify-between p-4">
        {/* Logo */}
    <a href="/">   <img src="/images/logo.png" className="w-15 h-15 ml-40"/></a>

        {/* Navigation Links */}
        <ul className="flex gap-8 mr-20">
          <li>
            <Link
              href="/"
              className="hover:text-emerald-400 transition-colors duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="hover:text-emerald-400 transition-colors duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className="hover:text-emerald-400 transition-colors duration-300"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="hover:text-emerald-400 transition-colors duration-300"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
