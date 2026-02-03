import React from "react";
import Image from "next/image";
import Navbar from "../../layouts/Navbar";
import heroImg from "../../../../../public/images/contacthero.png";
import gmail from "../../../../../public/images/gmail.png";
import instagram from "../../../../../public/images/instagram.png";
import whatsapp from "../../../../../public/images/whatsapp.png";

const ContactHero = () => {
  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden">
      <Navbar />

      {/* Increased pt-32 to push content below the fixed Navbar */}
      <section className="relative pt-32 pb-20">
        {/* Main Container: matches Navbar's "mx-auto max-w-7xl px-4" 
          This forces the left side of the text and right side of the image 
          to stay within the same vertical alignment as the Navbar pill.
        */}
        <div className="mx-auto max-w-7xl px-4 relative min-h-[600px]">
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-end">
            {/* Left Content Area - Positioned to start at the left edge of the container */}
            <div className="z-20 w-full lg:w-auto lg:absolute lg:left-4 lg:top-10 flex flex-col gap-8">
              {/* Black Contact Card - Matches Figma Size: 501px x 272px */}
              <div className="bg-black rounded-[40px] p-8 md:p-12 shadow-xl w-full lg:w-[501px] lg:h-[272px] flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-white text-sm md:text-base font-medium tracking-widest">
                    CONTACT_______
                  </span>
                </div>

                <h2 className="text-white text-4xl md:text-6xl font-bold mb-3 leading-tight">
                  Get in Touch
                </h2>

                <p className="text-gray-300 text-sm md:text-base font-light leading-snug max-w-[400px]">
                  Let's connect and discuss your connectivity needs so we can
                  provide the right solutions tailored to your requirements.
                </p>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-6 pl-4">
                <a
                  href="mailto:example@gmail.com"
                  className="hover:scale-110 transition-transform"
                >
                  <Image
                    src={gmail}
                    alt="Gmail"
                    width={80}
                    height={80}
                    className="w-14 h-14 md:w-16 md:h-16"
                  />
                </a>
                <a href="#" className="hover:scale-110 transition-transform">
                  <Image
                    src={instagram}
                    alt="Instagram"
                    width={80}
                    height={80}
                    className="w-14 h-14 md:w-16 md:h-16"
                  />
                </a>
                <a href="#" className="hover:scale-110 transition-transform">
                  <Image
                    src={whatsapp}
                    alt="WhatsApp"
                    width={100}
                    height={100}
                    className="w-16 h-16 md:w-20 md:h-20"
                  />
                </a>
              </div>
            </div>

            {/* Right Hero Image - Ends at the right edge of the container */}
            <div className="z-10 mt-10 lg:mt-0 w-full lg:w-auto">
              <div className="relative w-full lg:w-[840px] aspect-[840/564] rounded-[40px] overflow-hidden shadow-sm">
                <Image
                  src={heroImg}
                  alt="Contact Us"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactHero;
