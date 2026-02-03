"use client";
import React from "react";
import Image from "next/image";
import img1 from "../../../../public/images/founders2.png";
import img2 from "../../../../public/images/founders1.png";
import dotarrow from "../../../../public/images/dotarrow.png";

const VisionaryLeadership = () => {
  return (
    <section className="w-full bg-black py-16 md:py-24 lg:py-32 px-6 lg:px-40 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
        {/* LEFT CONTENT */}
        <div className="space-y-8 order-2 lg:order-1 relative z-30">
          <div className="space-y-4">
            <h2 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
              Visionary <br />
              <span className="text-[#2FADE6]">Leadership</span>
            </h2>

            <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-xl">
              Led by visionary directors{" "}
              <span className="text-[#2FADE6] font-medium">Zahid Imran</span>{" "}
              and
              <span className="text-[#2FADE6] font-medium">
                {" "}
                Junaid Hussaini
              </span>
              , whose foresight and commitment redefined reliable internet
              services in J&K. Their strategic leadership transformed an
              ambitious vision into a robust, future ready infrastructure,
              delivering dependable connectivity to businesses, institutions,
              and critical users across the region.
            </p>
          </div>

          {/* Action Row */}
          <div className="flex flex-row items-center md:gap-[104px]">
        

            <div className="hidden sm:flex items-center">
              <div className="relative w-[313px] h-[80px]">
                <Image
                  src={dotarrow}
                  alt="Navigation arrow"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGES */}
        <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
          <div className="relative w-[320px] h-[380px] sm:w-[520px] sm:h-[580px]">
            {/* 1. BLUE BOX (Rectangle 33) - Now visible on mobile */}
            {/* Mobile: 280x300 | Desktop: 456x475 */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[300px] sm:w-[456px] sm:h-[475px] border-[3px] sm:border-[5px] border-[#2FADE6] rounded-[20px] z-0" />

            {/* 2. BACKGROUND IMAGE */}
            <div className="absolute top-0 right-0 w-[190px] h-[233px] sm:w-[300px] sm:h-[368px] rounded-[20px] overflow-hidden shadow-2xl z-10 border border-white/5">
              <Image
                src={img2}
                alt="Leadership Background"
                fill
                className="object-cover"
              />
            </div>

            {/* 3. FOREGROUND IMAGE */}
            <div className="absolute bottom-0 left-0 w-[190px] h-[233px] sm:w-[300px] sm:h-[368px] rounded-[20px] overflow-hidden shadow-2xl z-20 border-2 border-black/40">
              <Image
                src={img1}
                alt="Leadership Foreground"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionaryLeadership;
