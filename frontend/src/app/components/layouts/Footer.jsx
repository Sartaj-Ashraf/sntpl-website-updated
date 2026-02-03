import React from "react";
import Image from "next/image";
import logo from "../../../../public/images/footer_logo.png";
import { Instagram, Twitter, Facebook, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 px-6 md:px-20 font-sans">
      {/* Main Content Container - Fixed to 1215px to match your Navbar */}
      <div className="max-w-[1215px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Company Info */}
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
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
          </div>

          <p className="text-sm text-gray-300 leading-relaxed max-w-xs">
            Srinagar Net Tech Pvt. Ltd. delivers dependable internet and network
            solutions, powered by robust infrastructure and deep local expertise
            across Jammu & Kashmir and beyond.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-medium border-b-2 border-white pb-1 mb-8 inline-block">
            Quick Links
          </h3>
          <ul className="space-y-4 text-sm text-gray-200">
            {["Home", "About Us", "Services", "Pricing", "Contact Us"].map(
              (item) => (
                <li key={item}>
                  <a
                    href={`/${item.toLowerCase().replace(" ", "")}`}
                    className="hover:text-white transition"
                  >
                    {item}
                  </a>
                </li>
              ),
            )}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-medium border-b-2 border-white pb-1 mb-8 inline-block">
            Others
          </h3>
          <ul className="space-y-4 text-sm text-gray-200">
            <li>Privacy Policy</li>
            <li>Disclaimers</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-medium border-b-2 border-white pb-1 mb-8 inline-block">
            Contact Info
          </h3>
          <div className="space-y-4 text-sm text-gray-200">
            <p className="leading-relaxed">
              <span className="block font-semibold">
                Address: Hyderpora By pass
              </span>
              Srinagar 190014
            </p>
            <p>
              <span className="font-semibold">Phone:</span> +91 9018 31 2121
            </p>
            <p>
              <span className="font-semibold">Email:</span> support@kvnisp.com
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Section - Also fixed to 1215px */}
      <div className="max-w-[1215px] mx-auto mt-20 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 border-t border-gray-800 pt-8">
        <p>© 2026 Oasis Ascend Srinagar.</p>
        <p>All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
