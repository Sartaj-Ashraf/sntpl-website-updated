"use client";
import React from "react";
import Image from "next/image";
import img1 from "../../../../public/images/whychooseus1.png";
import img2 from "../../../../public/images/whychooseus2.png";
import img3 from "../../../../public/images/whychooseus3.png";
import img4 from "../../../../public/images/whychooseus4.png";

const WhyChooseUs = () => {
  const cards = [
    {
      title: (
        <>
          Blazing <span className="text-[#2FADE6]">high speed internet</span> to
          keep you always connected
        </>
      ),
      desc: "Enjoy ultra fast fiber broadband with seamless browsing, streaming, and gaming.",
      img: img1,
      isDark: false,
    },
    {
      title: "Always on reliable connectivity you can count on.",
      desc: "With robust infrastructure and redundant links, downtime is minimized.",
      img: img2,
      isDark: true,
    },
    {
      title: (
        <>
          Driving growth with{" "}
          <span className="text-[#2FADE6]">innovative solutions</span>.
        </>
      ),
      desc: "Tailored networking, enterprise grade services, and smart IT integration.",
      img: img3,
      isDark: false,
    },
    {
      title: "Dedicated customer support at your service.",
      desc: "24/7 assistance from our expert team to solve issues quickly and efficiently.",
      img: img4,
      isDark: true,
    },
  ];

  return (
    <section className="w-full bg-white flex flex-col items-center">
      {/* 1. HEADER SECTION: Exact Figma Height 447px */}
      <div className="w-full h-[447px] flex flex-col items-center justify-center px-6 bg-[#E5F5FB] relative z-0">
        <div className="max-w-[1440px] w-full text-center space-y-6 pb-20">
          <h2 className="text-5xl md:text-7xl font-bold text-black tracking-tight">
            Why <span className="text-gray-500">Choose Us</span>
          </h2>
          <p className="text-gray-700 text-lg md:text-2xl font-medium max-w-2xl mx-auto leading-snug">
            Discover why thousands trust SNTPL for fast, reliable, and
            innovative internet solutions.
          </p>
        </div>
      </div>

      {/* 2. CARDS SECTION: Under the header div, positioned with negative margin */}
      <div className="max-w-[1440px] w-full px-6 lg:px-10 mt-20 mb-24 relative z-10">
        <div className="flex flex-wrap justify-center gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              style={{ width: "311px", height: "393px" }}
              className={`flex flex-col items-center p-8 rounded-[40px] shadow-xl border-2 transition-all duration-300 hover:scale-[1.02] shrink-0 ${
                card.isDark
                  ? "bg-[#2FADE6] text-white border-[#2FADE6]"
                  : "bg-white text-black border-[#2FADE6]"
              }`}
            >
              {/* Icon Image: Fixed 112x112 per spec */}
              <div className="relative w-[112px] h-[112px] mb-8 rounded-3xl overflow-hidden bg-white shadow-sm shrink-0">
                <Image
                  src={card.img}
                  alt="Feature Icon"
                  fill
                  className="object-contain p-4"
                />
              </div>

              {/* Text Content */}
              <div className="text-center space-y-4 flex flex-col items-center flex-grow">
                <h3 className="text-xl font-bold leading-tight px-2">
                  {card.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed px-2 ${
                    card.isDark ? "text-white/90" : "text-gray-600"
                  }`}
                >
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
