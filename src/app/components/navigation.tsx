"use client"

import Link from "next/link";
import React from "react";
import { useState } from "react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    console.log('clickskss')
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  console.log('eh')

  // Navigation items array
  const navItems = [
    { name: "About", href: "#about" },
    { name: "Menu", href: "#menu" },
    { name: "Functions", href: "#functions" },
    { name: "What's on", href: "#whats-on" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div>
      <nav className="lg:mix-blend-difference text-primary block w-full max-w-screen px-4 py-4 mx-auto sticky top-3 lg:px-8 z-[9999] ">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <div className="lg:hidden">
            <button
              className="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              onClick={toggleMobileMenu}
              type="button"
            >
              <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </span>
            </button>
          </div>
          <div
            className={`fixed top-0 left-0 min-h-screen w-64 bg-slate-100 shadow-lg transform transition-transform duration-300 ease-in-out ${
              isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
            } lg:hidden z-50`}
          >
            <div className="flex flex-row items-center border-b pb-4">
              <button
                onClick={toggleMobileMenu}
                className="absolute top-4 right-4 hover:text-red-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <ul className="flex flex-col h-full gap-4 p-4">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center p-1 gap-x-2 hover:text-red-500"
                >
                  <Link href={item.href} className="flex items-center">
                    {item.name}
                  </Link>
                </li>
              ))}
                <li className="flex items-center">
                <Link
                  href={"#"}
                  className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-200"
                >
                  Book
                </Link>
                </li>
            </ul>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center p-1 gap-x-2 hover:text-red-500"
                >
                  <Link href={item.href} className="flex items-center">
                    {item.name}
                  </Link>
                </li>
              ))}
              <li className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-200">
                <Link href={"#"}>Book</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

// "use client"

// export default function Navigation() {

//   const testButton = () => {
//     console.log('test button');
//     alert('Button clicked');
//   }

//   return (
//     <div>
//       <div className="m-4">

//       <button onClick={testButton}>test button func</button>
//       </div>
//       <div className="m-4">

//       <button onClick={() => console.log('console log click')}>console log direct</button>
//       </div>
//     </div>
//   )
// }