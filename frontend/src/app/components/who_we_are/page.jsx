"use client";
import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import whoweare from "../../../../public/images/who_we_are.png";

const AboutIntroduction = () => {
  const features = [
    "Legacy",
    "Evolution",
    "Commitment",
    "Impact",
    "Progress",
    "Foresight",
  ];

  return (
    <section className="w-full bg-white py-12 md:py-20 px-4 sm:px-36 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* LEFT CONTENT */}
        <div className="space-y-6 md:space-y-8">
          <div className="space-y-3 md:space-y-4">
            <p className="text-[#2FADE6] text-[10px] xs:text-xs md:text-sm font-bold tracking-[0.3em] uppercase">
              Our Story
            </p>

            {/* FIX: Using 'to\u00a0a' (non-breaking space) ensures 'a' never hangs alone */}
            <h2 className="text-[26px] xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-[1.15] md:leading-tight">
              From Kashmir Valley Networks{" "}
              {/* Add a standard space after the span to ensure separation */}
              <span className="inline-block">to&nbsp;a</span>{" "}
              <br className="hidden sm:block" />
              <span className="text-[#2FADE6] drop-shadow-[0_0_15px_rgba(47,173,230,0.3)]">
                Connected Future
              </span>
            </h2>

            <p className="text-gray-600 text-sm md:text-lg leading-relaxed max-w-xl">
              Srinagar Net Tech Pvt. Ltd., formerly known as Kashmir Valley
              Networks, was established in{" "}
              <span className="text-[#2FADE6] font-semibold">2002</span> with a
              vision to bridge the digital divide in Jammu & Kashmir. Formally
              registered in{" "}
              <span className="text-[#2FADE6] font-semibold">2012</span>, we've
              been pioneering internet connectivity in one of India's most
              challenging landscapes.
            </p>
          </div>

          {/* Checklist Grid - Fixed hover jumping issue */}
          <div className="grid grid-cols-2 gap-y-3 md:gap-y-4 gap-x-2 md:gap-x-8">
            {features.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 md:gap-3 group"
              >
                <div className="flex-shrink-0 w-4 h-4 md:w-6 md:h-6 rounded-full bg-[#2FADE6]/10 flex items-center justify-center group-hover:bg-[#2FADE6] transition-colors duration-300">
                  <Check
                    size={10}
                    className="text-[#2FADE6] group-hover:text-white"
                    strokeWidth={3}
                  />
                </div>
                <span className="text-gray-800 text-[13px] md:text-base font-medium border-b border-transparent group-hover:border-[#2FADE6] transition-all cursor-default pb-[1px]">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE CONTAINER */}
        <div className="relative flex justify-center lg:justify-end mt-16 lg:mt-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-[#2FADE6]/5 rounded-full blur-3xl -z-10" />

          {/* Image Box - Scaled for Tablet */}
          <div className="relative w-full max-w-[400px] sm:max-w-[550px] aspect-square rounded-[2rem] md:rounded-[3rem] overflow-hidden border-2 border-[#2FADE6]/20 shadow-2xl group/image">
            <Image
              src={whoweare}
              alt="Who we are"
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover/image:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#2FADE6]/10 to-transparent transition-opacity duration-700 group-hover/image:opacity-80" />
          </div>

          {/* Foundation & Vision - Blue Box Update */}
          <div className="absolute -bottom-10 left-0 sm:left-4 lg:-left-20 z-20 pointer-events-none min-w-max">
            {/* The Blue Box Container */}
            <div className="bg-[#147CAA] p-6 md:p-8 lg:p-10 rounded-[24px] shadow-2xl">
              <h3 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white leading-tight tracking-tighter">
                Foundation <br className="lg:hidden" />
                <span className="hidden lg:inline">&</span>
                <br className="hidden lg:block" />
                <span className="lg:hidden">& </span>
                <span className="text-white">Vision</span>
              </h3>
            </div>
          </div>

          <div className="absolute -inset-2 md:-inset-4 border border-[#2FADE6]/10 rounded-[2.5rem] md:rounded-[4rem] -z-10 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default AboutIntroduction;
