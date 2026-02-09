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

  const handleNavLinkClick = (e, href) => {
    if (pathname === href) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact Us", href: "/contact" },
    { name: "My Account", href: "/my-account" },
  ];

  const smoothBezier = "cubic-bezier(0.34, 1.56, 0.64, 1)";

  return (
    <>
      {/* Background Overlay for Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-[90] md:hidden transition-opacity duration-500 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      <nav
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
          scrolled ? "py-2" : "py-4 md:py-6 bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4">
          <div
            className={`flex items-center justify-between rounded-full bg-black/95 backdrop-blur-md px-6 md:px-10 h-16 md:h-20 text-white shadow-2xl border transition-all duration-500 ${
              scrolled ? "border-white/5" : "border-white/10"
            }`}
          >
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group"
              onClick={(e) => handleNavLinkClick(e, "/")}
            >
              <div className="relative h-9 w-9 md:h-11 md:w-11 transition-transform duration-500 group-hover:scale-110">
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
                    className={`transition-all duration-500 px-5 py-2 rounded-full ${
                      isActive
                        ? "bg-white text-black scale-105"
                        : "hover:text-[#2FADE6] hover:bg-white/5"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            {/* Mobile Toggle Button */}
            <button
              className="md:hidden p-2 text-white focus:outline-none z-[110]"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <div className="relative w-7 h-7 flex items-center justify-center">
                <X
                  className={`absolute transition-all duration-500 ${isOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50"}`}
                  size={28}
                />
                <Menu
                  className={`absolute transition-all duration-500 ${!isOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 rotate-90 scale-50"}`}
                  size={28}
                />
              </div>
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          <div
            className={`absolute left-4 right-4 top-24 rounded-[2.5rem] bg-black border border-white/10 text-white md:hidden shadow-2xl overflow-hidden transition-all duration-500 ${
              isOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-8 pointer-events-none"
            }`}
            style={{
              transitionTimingFunction: smoothBezier,
              maxHeight: isOpen ? "500px" : "0px",
            }}
          >
            <div className="p-4 flex flex-col gap-2">
              {navLinks.map((link, index) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavLinkClick(e, link.href)}
                    className={`text-lg font-medium py-4 px-6 rounded-3xl transition-all duration-300 ${
                      isActive
                        ? "bg-white text-black"
                        : "bg-white/5 hover:bg-white/10"
                    }`}
                    style={{
                      transform: isOpen
                        ? "scale(1) translateY(0)"
                        : "scale(0.9) translateY(20px)",
                      opacity: isOpen ? 1 : 0,
                      transition: `all 0.5s ${smoothBezier} ${index * 0.05}s`,
                    }}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
