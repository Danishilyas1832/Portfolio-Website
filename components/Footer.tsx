"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-20 ">
      <div className=" w-auto px-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand / Logo */}
        <div>
          <h2 className="text-2xl font-bold text-white">My Portfolio</h2>
          <p className="mt-3 text-sm text-gray-400">
            Designing and building modern web experiences with passion and precision.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="mt-3 space-y-2">
            <li>
              <Link href="/" className="hover:text-emerald-400 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-emerald-400 transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-emerald-400 transition-colors">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-emerald-400 transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold text-white">Connect</h3>
          <div className="mt-3 flex gap-4">
            <a
              href="https://github.com/Danishilyas1832"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/danish-ilyas-0bb2a822a"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com/dani_butt"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition-colors"
            >
              Gmail
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} My Portfolio. All rights reserved.
      </div>
    </footer>
  );
}
