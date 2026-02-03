import React from "react";
import Navbar from "../../layouts/Navbar";
import Image from "next/image";
import heroImg from "../../../../../public/images/serviceshero.png";

const ServicesHero = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden ">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImg}
          alt="Services Hero Background"
          fill
          className="object-cover " // Adjust opacity to match the dark aesthetic
          priority
        />
        {/* Optional overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow flex flex-col items-center justify-center text-center px-4">
          <div className="max-w-[1215px] w-full mx-auto">
            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Our <span className="text-sky-500">Services</span>
            </h1>

            {/* Subtext */}
            <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed">
              We run all kinds of services in form of Information{" "}
              <br className="hidden md:block" />& Technologies.
            </p>

            {/* Call to Action Button */}
            <button className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-sky-500 hover:text-white transition-all duration-300 shadow-lg">
              Get Started
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ServicesHero;
