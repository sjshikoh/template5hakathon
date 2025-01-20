"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import ShoppingCart from "@/components/ShoppingCart"; // Import ShoppingCart component

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showCart, setShowCart] = useState(false); // State to toggle cart visibility

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleCart = () => {
    setShowCart(!showCart); // Toggle cart visibility
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
              <Image
                src={"/vector (11).png"}
                alt="Menu"
                width={24}
                height={24}
              />
            </button>
          </div>

          {/* Desktop Links */}
          <nav className="hidden md:flex space-x-6 items-center">
            <Link href="/" className="text-gray-700 hover:text-gray-900">
              Home
            </Link>
            <Link href="/shop" className="text-gray-700 hover:text-gray-900">
              Shop
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-gray-900">
              About
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-gray-900">
              Blog
            </Link>
            <Link href="/pricing" className="text-gray-700 hover:text-gray-900">
              Pricing
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-gray-900">
              Contact
            </Link>
            <Link href="/pages" className="text-gray-700 hover:text-gray-900">
              Pages
            </Link>

            {/* Cart Button */}
            <button onClick={toggleCart} className="relative">
              <Image
                src={"/icn shopping-cart .icn-xs.png"}
                alt="Cart"
                width={24}
                height={24}
              />
              {/* Cart Badge */}
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </button>
          </nav>
        </div>
      </header>

      {/* Cart Display */}
      {showCart && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg max-w-sm w-full relative">
            <ShoppingCart />
            <button
              className="absolute top-2 right-2 text-xl text-gray-600"
              onClick={toggleCart}
            >
              &times;
            </button>
          </div>
        </div>
      )}

      <hr className="mt-6" />
    </>
  );
};

export default Navbar;
