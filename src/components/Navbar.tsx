'use client'
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="wrapper py-4 px-4 md:px-10 bg-white shadow-md">
        {/* Navbar container */}
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <h1 className="text-xl font-bold text-gray-800">Bandage</h1>

          {/* Mobile Hamburger Menu */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} aria-label="Toggle menu">
              <Image src={"/vector (11).png"} alt="Menu" width={24} height={24} />
            </button>
            
              <Image src={"/icn shopping-cart .icn-xs.png"} alt="Cart" width={24} height={24} />
              <Image src={"/vector (12).png"} alt="User" width={24} height={24} />
          
          </div>

          {/* Desktop Links */}
          <nav className="hidden md:flex space-x-6 items-center">
            <Link href="/" className="text-gray-700 hover:text-gray-900">
              Home
            </Link>
            <Link href="/product" className="text-gray-700 hover:text-gray-900">
              Product
            </Link>
            <Link href="/pricing" className="text-gray-700 hover:text-gray-900">
              Pricing
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-gray-900">
              Contact
            </Link>
            
          </nav>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="mt-4 space-y-4 md:hidden">
            <Link href="/" className="block text-gray-700 hover:text-gray-900">
              Home
            </Link>
            <Link href="/product" className="block text-gray-700 hover:text-gray-900">
              Product
            </Link>
            <Link href="/pricing" className="block text-gray-700 hover:text-gray-900">
              Pricing
            </Link>
            <Link href="/contact" className="block text-gray-700 hover:text-gray-900">
              Contact
            </Link>
            
          </nav>
        )}
      </header>

      <hr className="mt-6" />
    </>
  );
};


export default Navbar;
