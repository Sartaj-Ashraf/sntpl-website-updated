"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import logo from "../../../../public/images/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // --- Logic to handle scroll to top if already on the page ---
  const handleNavLinkClick = (e, href) => {
    if (pathname === href) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      setIsOpen(false); // Close mobile menu if open
    }
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact Us", href: "/contact" },
    { name: "My Account", href: "/my-account" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full py-4 md:py-6 z-[100] transition-all duration-300 ${
        scrolled ? " py-3" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4">
        {/* Main Pill Container */}
        <div
          className={`flex items-center justify-between rounded-full bg-black px-6 md:px-10 h-16 md:h-20 text-white shadow-lg border border-white/5 transition-all duration-300 ${
            scrolled ? "border-transparent" : "border-white/10"
          }`}
        >
          {/* Logo - Added onClick handler */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
            onClick={(e) => handleNavLinkClick(e, "/")}
          >
            <div className="relative h-9 w-9 md:h-11 md:w-11 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
              <Image
                src={logo}
                alt="SNTPL logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-lg md:text-xl font-bold tracking-wide transition-colors duration-300 group-hover:text-[#2FADE6]">
              SNTPL
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6 text-base font-medium">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavLinkClick(e, link.href)}
                  className={`transition-all duration-300 ${
                    isActive
                      ? "rounded-full bg-white px-5 py-2 text-black transform scale-105"
                      : "hover:text-[#2FADE6] hover:scale-110"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Mobile Toggle Button */}
          <button
            className="md:hidden p-2 text-white focus:outline-none transition-transform duration-300 active:scale-90"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <div
              className={`transition-transform duration-300 ${isOpen ? "rotate-90" : ""}`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </div>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`absolute left-4 right-4 top-24 rounded-3xl bg-black text-white md:hidden shadow-2xl border border-gray-800 overflow-hidden transition-all duration-500 ease-out ${
            isOpen
              ? "max-h-[500px] opacity-100 translate-y-0"
              : "max-h-0 opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <div className="p-6 flex flex-col gap-1">
            {navLinks.map((link, index) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavLinkClick(e, link.href)}
                  className={`text-lg font-medium py-3 px-4 rounded-2xl transition-all duration-300 hover:bg-white/10 active:scale-95 border-b border-gray-800 last:border-0 ${
                    isActive ? "bg-white text-black" : "hover:translate-x-2"
                  }`}
                  style={{
                    animation: isOpen
                      ? `slideInLeft 0.4s ease-out ${index * 0.08}s both`
                      : "none",
                  }}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
