"use client";
import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import Link from "next/link";
import CartDropdown from "./CartDropdown";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const { totalItems } = useCart();
  return (
    <div className=" fixed top-0 left-0 w-full bg-[#101010] flex justify-between lg:justify-around items-center p-7 z-50 ">
      <div className="block md:hidden ">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <img src="/assets/hamburger.svg" alt="hamburger menu" />
        </button>
      </div>
      <div className=" block md:hidden lg:block  ">
        <Link href="/">
          <img src="/assets/logo.svg" alt="logo" />
        </Link>
      </div>

      <div className="hidden md:flex gap-10 lg:hidden ">
        <div className="block lg:hidden ">
          <button>
            <img
              src="/assets/hamburger.svg"
              alt="hamburger menu"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          </button>
        </div>
        <div>
          <Link href="/" className="   ">
            <img src="/assets/logo.svg" alt="logo" />
          </Link>
        </div>
      </div>
      {/* Desktop Navigation */}
      <nav className="text-[#FAFAFA] hidden lg:flex gap-8 uppercase ">
        <Link
          href="/"
          className="hover:text-[#D87D4A]"
          onClick={() => setIsMenuOpen(false)}
        >
          Home
        </Link>
        <Link
          href="/headphones"
          className="hover:text-[#D87D4A]"
          onClick={() => setIsMenuOpen(false)}
        >
          Headphones
        </Link>
        <Link
          href="/speakers"
          className="hover:text-[#D87D4A]"
          onClick={() => setIsMenuOpen(false)}
        >
          Speakers
        </Link>
        <Link
          href="/earphones"
          className="hover:text-[#D87D4A]"
          onClick={() => setIsMenuOpen(false)}
        >
          Earphones
        </Link>
      </nav>
      <div>
        <button onClick={() => setOpen((open) => !open)} className="relative">
          <img src="/assets/carts.svg" alt="cart-button" />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-[#D87D4A] text-white text-xs rounded-full px-2">
              {totalItems}
            </span>
          )}
        </button>
        {open && <CartDropdown closeCart={() => setOpen(false)} />}
        {open && (
          <div
            className="fixed inset-0 bg-black/50 z-30"
            onClick={() => setOpen(false)}
          ></div>
        )}
      </div>
      {/* mobile & tablet navigation */}
      {isMenuOpen && (
        <div className="flex fixed top-0 left-0 h-[50%] w-full bg-[#101010] opacity-85 backdrop-blur-xs text-[#F1F1F1]   flex-col items-center  justify-center z-2  uppercase lg:hidden  border-t">
          <button aria-label="close-button">
            <img
              src="/assets/icon-close.svg"
              alt="close"
              className="absolute top-6 right-5 hover:scale-110"
              onClick={() => setIsMenuOpen(false)}
            />
          </button>

          <nav className="text-xl flex flex-col space-y-7 uppercase md:font-bold ">
            <Link
              href="/"
              className="cursor-pointer hover:text-[#D87D4A]"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/headphones"
              className="cursor-pointer  hover:text-[#D87D4A]"
              onClick={() => setIsMenuOpen(false)}
            >
              Headphones
            </Link>
            <Link
              href="/speakers"
              className="cursor-pointer  hover:text-[#D87D4A]"
              onClick={() => setIsMenuOpen(false)}
            >
              Speakers
            </Link>
            <Link
              href="/earphones"
              className="cursor-pointer  hover:text-[#D87D4A]"
              onClick={() => setIsMenuOpen(false)}
            >
              Earphones
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Navbar;
