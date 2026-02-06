"use client";
import React, { useState } from "react";
import Image from "next/image";
import whoweserve from "../../../../public/images/whoweserve.png";
import doublechevron from "../../../../public/images/doublechevron.png";
import telecom from "../../../../public/images/telecom.png";
import corporates from "../../../../public/images/corporates2.png";
import media from "../../../../public/images/media.png";
import banking from "../../../../public/images/banking.png";
import medical from "../../../../public/images/medical.png";
import automotive from "../../../../public/images/automotive.jpg";

const WhoWeServe = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const sectorImages = {
    telecom: telecom,
    corporates: corporates,
    media: media,
    banking: banking,
    medical: medical,
    automotive: automotive,
  };

  const sectors = [
    { title: "Telecom", id: "telecom" },
    { title: "Corporates", id: "corporates" },
    { title: "Media", id: "media" },
    { title: "Banking", id: "banking" },
    { title: "Medical", id: "medical" },
    { title: "Automotive", id: "automotive" },
  ];

  const rows = [
    [sectors[0], sectors[1]],
    [sectors[2], sectors[3]],
    [sectors[4], sectors[5]],
  ];

  const description =
    "SNTPL delivers next generation solutions that power connectivity across networks. We specialize in building robust infrastructure.";

  const smoothTransition =
    "transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]";

  return (
    <section className="bg-black py-16 md:py-24 px-4 md:px-8 lg:px-10 overflow-hidden font-sans">
      <div className="max-w-[1215px] mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Who We Serve
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base opacity-80 leading-relaxed px-4">
            At Srinagar Net Tech Pvt. Ltd., we provide reliable and high speed
            internet services tailored for businesses, enterprises, and
            institutions.
          </p>
        </div>

        {/* Rows of Accordions */}
        <div className="flex flex-col gap-6 max-w-6xl mx-auto">
          {rows.map((row, rowIndex) => {
            const rowIndices = [rowIndex * 2, rowIndex * 2 + 1];
            const isAnyInRowHovered = rowIndices.includes(hoveredIndex);

            return (
              <div
                key={rowIndex}
                className="flex flex-col lg:flex-row gap-5 lg:h-[408px]"
              >
                {row.map((sector, colIndex) => {
                  const globalIndex = rowIndex * 2 + colIndex;
                  const isHovered = hoveredIndex === globalIndex;
                  const isAdjacent = isAnyInRowHovered && !isHovered;

                  return (
                    <div
                      key={sector.id}
                      onMouseEnter={() => setHoveredIndex(globalIndex)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      onClick={() =>
                        setHoveredIndex(isHovered ? null : globalIndex)
                      }
                      className={`relative overflow-hidden rounded-[32px] md:rounded-[40px] cursor-pointer p-6 md:p-10 flex flex-col ${smoothTransition}
                        ${isHovered ? "lg:flex-[3.5] bg-[#2FADE6]" : "lg:flex-[1] bg-[#111111] hover:bg-[#1a1a1a]"}
                        ${isHovered ? "min-h-[450px] lg:min-h-0" : "min-h-[280px] md:min-h-[320px] lg:min-h-0"}
                      `}
                      style={{ transform: "translateZ(0)" }}
                    >
                      {/* 1. Header Area */}
                      <div className="flex justify-between items-center w-full mb-4 z-10">
                        <h3
                          className={`font-bold leading-tight ${smoothTransition}
                          ${
                            isHovered
                              ? "text-black text-2xl md:text-3xl lg:text-[44px]"
                              : isAdjacent
                                ? "lg:text-white/40 text-lg lg:text-xl"
                                : "text-white text-xl md:text-2xl lg:text-[40px]"
                          }
                        `}
                        >
                          {sector.title}
                        </h3>

                        <div
                          className={`shrink-0 transition-all duration-500 ${isAdjacent ? "lg:opacity-0 lg:scale-50" : "opacity-100 scale-100"}`}
                        >
                          <Image
                            src={doublechevron}
                            alt="chevron"
                            width={24}
                            height={24}
                            className={`${smoothTransition} ${isHovered ? "brightness-0" : "invert"} ${isHovered ? "rotate-90 lg:rotate-0" : ""}`}
                          />
                        </div>
                      </div>

                      {/* 2. Content Area */}
                      <div
                        className={`relative flex flex-col h-full w-full ${smoothTransition} 
                        ${isHovered ? "md:flex-row items-center justify-between gap-6 lg:gap-10" : "items-center justify-center lg:justify-start"}
                      `}
                      >
                        {/* Description */}
                        <div
                          className={`transition-all duration-700 ease-in-out order-2 md:order-1 w-full md:w-[450px]
                            ${isHovered ? "opacity-100 translate-y-0 delay-300 relative" : "opacity-0 translate-y-4 pointer-events-none absolute"}
                          `}
                        >
                          <p className="text-black/80 text-base md:text-lg font-medium leading-relaxed">
                            {description}
                          </p>
                        </div>

                        {/* Image Container */}
                        <div
                          className={`relative shrink-0 rounded-[24px] md:rounded-[30px] overflow-hidden ${smoothTransition} order-1 md:order-2
                          ${
                            isHovered
                              ? "opacity-100 scale-100 translate-y-0"
                              : isAdjacent
                                ? "opacity-20 scale-90 grayscale lg:absolute lg:right-0"
                                : "opacity-60 scale-95 translate-y-0"
                          } 
                          `}
                          style={{
                            width: "100%",
                            maxWidth: "347px",
                            height: "211px",
                          }}
                        >
                          <Image
                            // Use the mapped sector image based on ID
                            src={sectorImages[sector.id]}
                            alt={sector.title}
                            fill
                            className={`object-cover ${!isHovered ? "grayscale-[0.5]" : ""}`}
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhoWeServe;
