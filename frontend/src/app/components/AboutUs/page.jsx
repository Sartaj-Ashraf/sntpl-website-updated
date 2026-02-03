import React from "react";
import Image from "next/image";
import aboutImg from "../../../../public/images/aboutus.png";
import greenTick from "../../../../public/images/greentick.png"; // Corrected path typo

const AboutUs = () => {
  return (
    <section className="bg-[#E5E7EB] py-16 px-6 md:px-16 lg:px-32 w-full lg:px-[180px]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Left Side: Image with specific size */}
        <div className="relative">
          <div
            className="relative mx-auto lg:mx-0
            w-[280px] h-[370px]
            sm:w-[368px] sm:h-[450px]
            md:w-[650px] md:h-auto
            lg:w-[373px] lg:h-[497px]
            rounded-[2.5rem] overflow-hidden shadow-xl"
          >
            <Image
              src={aboutImg}
              alt="Building Strong Connections"
              width={373}
              height={497}
              className="w-full h-full object-cover"
              priority
            />
          </div>

          {/* "Who We Are" Blue Badge */}
          <div
            className="absolute -bottom-6 -left-2 sm:-left-4 md:-left-8 bg-[#2FADE6] 
                w-[140px] h-[100px] 
                sm:w-[200px] sm:h-[140px]
                md:w-[269px] md:h-[181px] 
                max-sm:left-0
                text-white p-4 md:p-8 rounded-2xl shadow-lg flex items-center justify-center md:block"
          >
            <h3 className="text-lg sm:text-2xl md:text-5xl font-bold leading-tight">
              Who <br /> We Are
            </h3>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="w-full lg:flex-1 space-y-6">
          <div className="space-y-2">
            <span className="text-[#2FADE6] uppercase tracking-wider font-semibold text-[22px]">
              INTRODUCTION
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-[72px] font-bold text-black leading-[1.1]">
              Building Strong <br /> Connections Across <br />
              <span className="text-[#2FADE6]">Jammu & Kashmir</span>
            </h2>
          </div>

          <p className="text-gray-700 text-lg md:text-xl leading-relaxed max-w-2xl">
            We deliver reliable, high performance internet solutions through
            robust infrastructure and deep local expertise, connecting homes and
            businesses across the region.
          </p>

          {/* Features Grid with Green Tick Image */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 pt-4">
            {[
              "Problem Solvers",
              "Connectivity Experts",
              "Network Builders",
              "Ground Teams",
              "Network Operators",
              "Support Specialists",
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="flex-shrink-0 w-5 h-5 relative">
                  <Image
                    src={greenTick}
                    alt="tick"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-black font-semibold text-lg border-b border-black/10 pb-1 w-full">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
