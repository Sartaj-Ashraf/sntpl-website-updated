"use client";

import React from "react";
import Image from "next/image";
import logo from "../../../../public/images/footer_logo.png";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Footer = () => {
  const pathname = usePathname();

  // Synchronized with Navbar links
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact Us", href: "/contact" },
    { name: "My Account", href: "/my-account" },
  ];

  // Logic to handle scroll to top if already on the page
  const handleScrollToTop = (e, href) => {
    if (pathname === href) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="bg-black text-white py-16 px-6 md:px-20 font-sans">
      {/* Main Content Container */}
      <div className="max-w-[1215px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Company Info */}
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            {/* Added scroll logic to footer logo as well */}
            <Link
              href="/"
              onClick={(e) => handleScrollToTop(e, "/")}
              className="flex items-center space-x-4"
            >
              <Image
                src={logo}
                alt="SNTPL Logo"
                width={60}
                height={60}
                priority
              />
              <div>
                <h2 className="text-[22px] lg:text-4xl font-bold tracking-tight leading-none">
                  SNTPL
                </h2>
                <p className="text-[10px] uppercase tracking-widest text-gray-400">
                  Srinagar Net Tech Pvt. Ltd.
                </p>
              </div>
            </Link>
          </div>

          <p className="text-sm text-gray-300 leading-relaxed max-w-xs">
            Srinagar Net Tech Pvt. Ltd. delivers dependable internet and network
            solutions, powered by robust infrastructure and deep local expertise
            across Jammu & Kashmir and beyond.
          </p>
        </div>

        {/* Quick Links - With Scroll-to-Top Logic */}
        <div>
          <h3 className="text-xl font-medium border-b-2 border-white pb-1 mb-8 inline-block">
            Quick Links
          </h3>
          <ul className="space-y-4 text-sm text-gray-200">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={(e) => handleScrollToTop(e, link.href)}
                  className="hover:text-[#147CAA] transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Others / Legal Section */}
        <div>
          <h3 className="text-xl font-medium border-b-2 border-white pb-1 mb-8 inline-block">
            Others
          </h3>
          <ul className="space-y-4 text-sm text-gray-200">
            <li>
              <Link
                href="/privacy-policy"
                onClick={(e) => handleScrollToTop(e, "/privacy-policy")}
                className="hover:text-[#147CAA] transition-colors"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/disclaimers"
                onClick={(e) => handleScrollToTop(e, "/disclaimers")}
                className="hover:text-[#147CAA] transition-colors"
              >
                Disclaimers
              </Link>
            </li>
            <li>
              <Link
                href="/terms-and-conditions"
                onClick={(e) => handleScrollToTop(e, "/terms-and-conditions")}
                className="hover:text-[#147CAA] transition-colors"
              >
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-medium border-b-2 border-white pb-1 mb-8 inline-block">
            Contact Info
          </h3>
          <div className="space-y-4 text-sm text-gray-200">
            <p className="leading-relaxed">
              <span className="block font-semibold text-white">Address:</span>
              First Floor Al-Hyder Shopping Complex,
              <br />
              Hyderpora-190018, Srinagar,
              <br />
              Jammu and Kashmir
            </p>

            <p>
              <span className="font-semibold text-white">Phone:</span> +91 9018
              31 2121
            </p>
            <p>
              <span className="font-semibold text-white">Email:</span>{" "}
              support@kvnisp.com
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="max-w-[1215px] mx-auto mt-20 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 border-t border-gray-800 pt-8">
        <p>© 2026 Srinagar Net Tech Pvt. Ltd.</p>
        <p>All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
