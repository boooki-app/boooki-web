import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

import Logo from '../../assets/logo.webp';

export default function AppHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-b border-gray-300">
      <nav className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div>
              <h1>
                <Image src={Logo} alt="Logo de Boooki" />
              </h1>
            </div>
            <div className="hidden md:block">
              <ul className="ml-10 flex items-baseline space-x-4">
                <li className="mr-6">
                  <Link
                    href="/"
                    className="border-none text-gray-700 hover:text-gray-900"
                  >
                    Home
                  </Link>
                </li>
                <li className="mr-6">
                  <Link
                    href="/about/"
                    className="border-none text-gray-700 hover:text-gray-900"
                  >
                    About
                  </Link>
                </li>
                <li className="mr-6">
                  <a
                    className="border-none text-gray-700 hover:text-gray-900"
                    href="https://github.com/ixartz/Next-js-Boilerplate"
                  >
                    GitHub
                  </a>
                </li>
                <li className="mr-6">
                  <Link
                    href="/blog/"
                    className="border-none text-gray-700 hover:text-gray-900"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-800 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none"
              >
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
          <ul className="space-y-1 px-2 pb-3 pt-2">
            {/* Add the list items and links here for the mobile view */}
            <li className="mr-6">
              <Link
                href="/"
                className="border-none text-gray-700 hover:text-gray-900"
              >
                Home
              </Link>
            </li>
            <li className="mr-6">
              <Link
                href="/about/"
                className="border-none text-gray-700 hover:text-gray-900"
              >
                About
              </Link>
            </li>
            <li className="mr-6">
              <a
                className="border-none text-gray-700 hover:text-gray-900"
                href="https://github.com/ixartz/Next-js-Boilerplate"
              >
                GitHub
              </a>
            </li>
            <li className="mr-6">
              <Link
                href="/blog/"
                className="border-none text-gray-700 hover:text-gray-900"
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export function AppHeaderSimple() {
  return (
    <header className="flex items-center justify-center py-2 md:py-16">
      <Image src={Logo} width={124} height={124} alt="Logo de Boooki" />
    </header>
  );
}
