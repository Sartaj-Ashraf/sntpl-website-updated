"use client";
import React, { useState } from "react";
import Image from "next/image";

const AllServices = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const services = [
    {
      title: "Enterprise Solutions",
      desc: "Reliable last mile connectivity and complete system integration services for seamless IT infrastructure.",
      icon: "/images/enterprise_solutions.png",
      variant: "blue",
      hoverImage: "/images/enterprise_solutions2.png",
    },
    {
      title: "Lease Line",
      desc: "Dedicated internet lease line ensuring uninterrupted connectivity with symmetrical upload and download speeds.",
      icon: "/images/leaseline.png",
      variant: "white",
      hoverImage: "/images/leaseline2.png",
    },
    {
      title: "Dark Fibre",
      desc: "Secure and scalable dark fibre solutions for enterprises requiring high capacity private networks.",
      icon: "/images/dark_fibre.png",
      variant: "blue",
      hoverImage: "/images/dark_fibre2.png",
    },
    {
      title: "SD WAN",
      desc: "Modern SD WAN solutions for intelligent routing, cost optimization, and enhanced network security.",
      icon: "/images/sd_wan.png",
      variant: "white",
      hoverImage: "/images/sd_wan2.png",
    },
    {
      title: "Broadband",
      desc: "High speed broadband services designed for reliable internet access across homes and businesses.",
      icon: "/images/broadband.png",
      variant: "blue",
      hoverImage: "/images/broadband2.png",
    },
    {
      title: "Telecom",
      desc: "We help telecom operators, ISPs, and network providers transform their infrastructure with cutting edge technology.",
      icon: "/images/telecommunication.png",
      variant: "white",
      hoverImage: "/images/telecommunication2.png",
    },
  ];

  const columns = [
    [services[0], services[3]],
    [services[1], services[4]],
    [services[2], services[5]],
  ];

  // Animation Constant to keep things consistent
  const transitionStyle = "0.45s cubic-bezier(0.34, 1.56, 0.64, 1)";

  return (
    <section className="relative w-full bg-white overflow-hidden font-sans">
      <div className="max-w-[1215px] mx-auto pt-20 pb-24 px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-black leading-tight">
          We run all kinds of services in form of{" "}
          <br className="hidden md:block" />
          Information & Technologies
        </h2>
      </div>

      <div className="relative bg-white pb-20">
        <div className="max-w-[1215px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 lg:gap-8">
            {columns.map((column, colIdx) => (
              <div
                key={colIdx}
                className="flex flex-col gap-5 md:gap-6 h-auto md:h-[860px]"
              >
                {column.map((service, rowIdx) => {
                  const globalIndex = colIdx * 2 + rowIdx;
                  const isHovered = hoveredIndex === globalIndex;
                  const otherInColIndex = colIdx * 2 + (rowIdx === 0 ? 1 : 0);
                  const isNeighbor = hoveredIndex === otherInColIndex;

                  return (
                    <div
                      key={globalIndex}
                      onMouseEnter={() => setHoveredIndex(globalIndex)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      className={`relative p-5 sm:p-8 rounded-3xl flex flex-col items-center text-center overflow-hidden cursor-pointer border 
                        ${
                          isHovered
                            ? "h-[320px] max-sm:h-[370px] md:h-[570px] md:hover:h-[530px]"
                            : isNeighbor
                              ? "h-[160px] sm:h-[200px] md:h-[260px]"
                              : "h-[180px] sm:h-[240px] md:h-[330px]"
                        }
                        ${
                          service.variant === "blue"
                            ? "bg-[#2FADE6] text-black border-transparent"
                            : "bg-white text-black border-[#2FADE6]/30 shadow-sm"
                        }`}
                      style={{
                        transition: `height ${transitionStyle}`,
                        willChange: "height",
                        transform: "translate3d(0, 0, 0)",
                        WebkitBackfaceVisibility: "hidden",
                      }}
                    >
                      <div
                        className={`relative flex flex-col items-center flex-grow
                          ${isHovered ? "pb-4 md:pb-32" : "pb-8 md:pb-48"}
                          ${isNeighbor ? "scale-90 opacity-50" : ""}
                        `}
                        style={{
                          transition: `padding ${transitionStyle}, transform ${transitionStyle}, opacity ${transitionStyle}`,
                          transform: isNeighbor
                            ? "scale(0.9) translate3d(0, 0, 0)"
                            : "translate3d(0, 0, 0)",
                        }}
                      >
                        <div className="mb-3 md:mb-6">
                          <Image
                            src={service.icon}
                            alt={`${service.title} icon`}
                            width={70}
                            height={70}
                            className={`object-contain transition-all duration-500 ${
                              service.variant === "blue"
                                ? "brightness-0 invert"
                                : ""
                            }`}
                          />
                        </div>

                        <h4
                          className={`text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-5 leading-tight break-words ${
                            service.variant === "white"
                              ? "text-[#2FADE6]"
                              : "text-black"
                          }`}
                        >
                          {service.title}
                        </h4>

                        <div
                          className={`px-2 sm:px-3 ${isNeighbor ? "opacity-0 h-0" : "opacity-100"}`}
                          style={{
                            transition: `opacity 0.4s ease, height 0.4s ease`,
                          }}
                        >
                          <p className="text-xs sm:text-base leading-snug md:leading-relaxed text-center text-black/80 font-medium">
                            {service.desc}
                          </p>
                        </div>
                      </div>

                      {service.hoverImage && (
                        <div
                          className={`absolute left-1/2 w-[92%] sm:w-[88%] rounded-xl sm:rounded-2xl overflow-hidden ${
                            isHovered ? "opacity-100" : "opacity-0"
                          }`}
                          style={{
                            bottom: isHovered ? "12px" : "0px",
                            transform: isHovered
                              ? "translate(-50%, 0)"
                              : "translate(-50%, 40px)",
                            transition: `transform ${transitionStyle}, opacity ${transitionStyle}, bottom ${transitionStyle}`,
                            willChange: "transform, opacity",
                          }}
                        >
                          <Image
                            src={service.hoverImage}
                            alt={service.title}
                            width={520}
                            height={320}
                            className="object-cover object-bottom w-full h-auto"
                          />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllServices;
