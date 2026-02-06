"use client";
import React from "react";
import Image from "next/image";
import ourvisionEye from "../../../../public/images/ourvisioneye.png";
import ourvisionMain from "../../../../public/images/ourvision.png";

const OurVision = () => {
  return (
    <section className="w-full bg-black py-16 md:py-32 px-6 md:px-16 lg:px-35 overflow-hidden">
      {/* CONTAINER: 
          Uses px-6/md:px-16/lg:px-35 to match your Hero and Navbar padding precisely.
      */}
      <div className="max-w-[1440px] mx-auto relative">
        {/* RIGHT SIDE: IMAGE
            Alinged to the right edge of the container (end of navbar)
        */}
        <div className="flex justify-end w-full">
          <div className="relative w-full max-w-[867px] aspect-[867/529] rounded-[40px] overflow-hidden border-4 border-[#2FADE6] shadow-[0_0_30px_rgba(47,173,230,0.3)]">
            <Image
              src={ourvisionMain}
              alt="Our Vision Connectivity"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* LEFT SIDE: OVERLAPPING CONTENT BOX
            Aligned to the left edge of the container (start of navbar)
        */}
        <div className="relative lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2 mt-[-80px] lg:mt-0 w-full max-w-[520px] z-20">
          {/* Eye Icon */}
          {/* Eye Icon */}
          <div className="relative w-[140px] h-[140px] mx-auto mb-[-40px] z-30">
            <Image
              src={ourvisionEye}
              alt="Vision Eye Icon"
              width={140}
              height={140}
              className="object-contain"
            />
          </div>

          {/* Blue Content Box */}
          <div className="bg-[#2FADE6] rounded-[32px] p-10 md:p-12 shadow-2xl">
            <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
              Our Vision
            </h2>
            <p className="text-black text-lg md:text-xl font-semibold leading-snug">
              To bridge digital gaps and enable seamless, high-speed
              connectivity for communities, businesses, and institutions
              delivering reliable internet services that power communication,
              growth, and opportunity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurVision;
