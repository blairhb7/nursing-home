"use client";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { RxChevronDown } from "react-icons/rx";

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileOpen((prev) => !prev);
  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  return (
    <nav className=" bg-[#1D3038] text-white  border-b border-gray-100 fixed top-0 z-50 w-screen">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-5 md:px-10 h-16 lg:h-20">
        {/* Logo */}
        <Link href="/">
          <img
            src="/logo.png"
            alt="Logo"
            className="h-10 md:h-12"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6">
          <Link href="/" className="hover:text-[#80A1AE]">Home</Link>
          <Link href="/nursing/about-us" className="hover:text-[#80A1AE]">About Us</Link>
          <Link href="/nursing/amenities" className="hover:text-[#80A1AE]">Amenities</Link>
          <Link href="/nursing/services" className="hover:text-[#80A1AE]">Services</Link>
          <Link href="/nursing/gallery" className="hover:text-[#80A1AE]">Gallery</Link>
          <Link href="/nursing/contact-us" className="hover:text-[#80A1AE]">Contact Us</Link>
          {/* Dropdown */}
          
        </div>

        {/* Contact Button Desktop */}
        <div className="hidden lg:block">
        <Link href='/nursing/contact-us'><button className="bg-[#80A1AE] cursor-pointer text-white px-10 shadow-md shadow-[#ECF1F3] py-2 rounded-full">

            Schedule a tour
          </button></Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="flex flex-col gap-1 lg:hidden"
          onClick={toggleMobileMenu}
        >
          <span className={`block h-0.5 w-6 bg-white transform ${isMobileOpen ? "rotate-45 translate-y-1.5" : ""}`}></span>
          <span className={`block h-0.5 w-6 bg-white ${isMobileOpen ? "opacity-0" : ""}`}></span>
          <span className={`block h-0.5 w-6 bg-white transform ${isMobileOpen ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-[#1D3038] text-white border-t border-gray-200 overflow-hidden"
          >
            <div className="flex flex-col px-5 py-4 gap-2">
            <Link href="/" className="hover:text-[#80A1AE]">Home</Link>
          <Link href="/nursing/about-us" className="hover:text-[#80A1AE]">About Us</Link>
          <Link href="/nursing/amenities" className="hover:text-[#80A1AE]">Amenities</Link>
          <Link href="/nursing/services" className="hover:text-[#80A1AE]">Services</Link>
          <Link href="/nursing/gallery" className="hover:text-[#80A1AE]">Gallery</Link>
          <Link href="/nursing/contact-us" className="hover:text-[#80A1AE]">Contact Us</Link>
              
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
