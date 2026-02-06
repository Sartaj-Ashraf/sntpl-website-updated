"use client";
import React from "react";
import Image from "next/image";
import ourmission1 from "../../../../public/images/ourmission.png";
import ourmission2 from "../../../../public/images/ourmissionrect.png";
import ourmission3 from "../../../../public/images/ourmission2.png";

const OurMission = () => {
  return (
    <section className="w-full bg-white py-16 md:py-24 lg:py-32 px-6 lg:px-40 overflow-hidden">
      {/* Changed items-center to items-start to align tops */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        {/* LEFT SIDE: IMAGE COMPOSITION */}
        <div className="relative flex justify-center lg:justify-start">
          <div className="relative w-full max-w-[500px] aspect-[4/3]">
            {/* Background Decorative Rectangle (ourmission2) */}
            <div className="absolute -top-6 -left-6 w-full h-full z-0">
              <Image
                src={ourmission2}
                alt="Decorative background"
                fill
                className="object-contain"
              />
            </div>

            {/* Main Mission Image (ourmission1) */}
            <div className="relative w-full h-full z-10 rounded-2xl overflow-hidden shadow-lg border border-gray-100">
              <Image
                src={ourmission1}
                alt="Our Mission Teamwork"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: CONTENT */}
        {/* -mt-6 compensates for the absolute top-6 of the left decorative image */}
        <div className="flex flex-col items-center text-center lg:text-left space-y-4 lg:-mt-6">
          {/* Made target icon shorter to pull text upward */}
          <div className="relative w-[110px] h-[120px] md:w-[130px] md:h-[142px]">
            <Image
              src={ourmission3}
              alt="Mission Icon"
              fill
              className="object-contain lg:object-left"
              priority
            />
          </div>

          <div className="space-y-4">
            <h2 className="text-5xl md:text-7xl font-bold text-black tracking-tight">
              Our <span className="text-[#2FADE6]">Mission</span>
            </h2>

            <p className="text-gray-500 text-lg md:text-xl leading-relaxed max-w-md">
              Designing and delivering resilient network solutions that enable
              sustainable growth, dependable performance, and effortless digital
              connectivity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
