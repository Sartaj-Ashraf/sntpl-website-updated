import React from "react";
import Image from "next/image";
import heroImg from "../../../../../public/images/pricing.png";
import Navbar from "../../layouts/Navbar";

const PricingHero = () => {
  return (
    <main className="bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full min-h-[500px] lg:h-[603px] flex items-center justify-center overflow-hidden pt-20">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImg}
            alt="Pricing Hero"
            fill
            priority
            className="object-cover opacity-60"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-black" />
        </div>

        {/* Hero Content - Standardized max-width to match the Navbar's container */}
        <div className="relative z-10 text-center px-4 sm:px-6 md:px-12 max-w-7xl mx-auto w-full">
          {/* Inner constraint for the text to keep it readable */}
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
              Our Pricing
            </h1>

            <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Flexible plans designed to match your connectivity needs, offering
              the right balance of speed, reliability, and value.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="w-full sm:w-auto bg-[#2FADE6] hover:bg-[#258ab8] text-black font-bold py-3.5 px-10 rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95">
                View Plans
              </button>
              <button className="w-full sm:w-auto border border-white/30 hover:bg-white/10 text-white font-bold py-3.5 px-10 rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PricingHero;
