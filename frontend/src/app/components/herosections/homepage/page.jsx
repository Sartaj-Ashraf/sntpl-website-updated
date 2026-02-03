"use client";
import React, { useState } from "react"; // Added useState
import Image from "next/image";
import Navbar from "../../layouts/Navbar";
import ConnectionModal from "../../connectionmodal/page";
import heroImg from "../../../../../public/images/herosection.png";
import mobileImg from "../../../../../public/images/herosection_mobile.png";

const Hero = () => {
  // State to control modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Responsive fixed heights to prevent vertical stretching */}
      <div className="relative h-[650px] sm:h-[750px] lg:h-[850px] w-full flex flex-col text-white overflow-hidden bg-black">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImg}
            alt="Hero Background"
            fill
            priority
            className="hidden sm:block object-cover object-top"
          />
          <Image
            src={mobileImg}
            alt="Hero Background Mobile"
            fill
            priority
            className="block sm:hidden object-cover opacity-60"
          />
          {/* Subtle bottom gradient to blend into the next section */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />
        </div>

        {/* Navbar inside background image */}
        <div className="relative z-10 flex flex-col h-full">
          <Navbar />

          {/* Main Content Area */}
          <div className="flex-1 flex flex-col justify-center px-6 md:px-16 lg:px-35">
            <div className="max-w-5xl space-y-6 md:space-y-8">
              {/* Heading Section */}
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-[72px] font-bold leading-[1.1] tracking-tight">
                  Next Gen Internet Solutions <br />
                  <span className="text-[#2FADE6] drop-shadow-[0_0_20px_rgba(47,173,230,0.4)] inline-block mt-2">
                    for Jammu & Kashmir.
                  </span>
                </h1>

                <p className="text-gray-200 text-sm md:text-lg lg:text-xl max-w-2xl leading-relaxed font-medium">
                  High performance connectivity powered by robust network
                  infrastructure and deep local expertise, ensuring speed,
                  stability, and uninterrupted access across Jammu & Kashmir.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-row gap-4 pt-2">
                <button
                  className="h-[48px] bg-white text-black px-8 py-2 rounded-lg font-bold text-sm
             transition-all duration-300
              hover:text-white"
                >
                  About Us
                </button>

                <button
                  className="h-[48px] bg-[#40B4E8] text-white px-8 py-2 rounded-lg font-bold text-sm
             transition-all duration-300
             hover:bg-[#2FADE6]"
                >
                  Contact Us
                </button>
              </div>

              {/* New Connection Button - Now triggers state */}
              <button
                onClick={() => setIsModalOpen(true)}
                className="group flex flex-col items-center absolute bottom-6 left-1/2 -translate-x-1/2 sm:left-auto sm:translate-x-0 sm:right-16 lg:right-32 z-20 w-max"
              >
                <div className="mb-1 animate-bounce text-[#2FADE6]">
                  <svg
                    width="18"
                    height="18"
                    className="md:w-6 md:h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
                  </svg>
                </div>
                <div className="border border-white/20 bg-black/60 backdrop-blur-md text-white px-5 py-2.5 md:px-10 md:py-4 rounded-full font-bold text-xs md:text-lg hover:border-[#2FADE6] hover:text-[#2FADE6] transition-all shadow-lg">
                  New Connection
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Connection Modal Component */}
      <ConnectionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default Hero;
