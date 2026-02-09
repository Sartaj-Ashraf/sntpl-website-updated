"use client";
import React, { useState } from "react";
import Image from "next/image";
import serviceImg from "../../../../public/images/services.png";

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Stats and Services data remain the same as your original code
  const stats = [
    { number: "23+", label: "YEARS EXPERIENCE" },
    { number: "2012", label: "ESTABLISHED" },
    { number: "J&K", label: "COVERAGE AREA" },
    { number: "24/7", label: "RELIABLE SERVICE" },
  ];

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
      variant: "black",
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
      variant: "black",
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
      variant: "black",
      hoverImage: "/images/telecommunication2.png",
    },
  ];

  const columns = [
    [services[0], services[3]],
    [services[1], services[4]],
    [services[2], services[5]],
  ];

  // SLOWER TIMING CONFIGURATION
  // duration: 0.8s for a more cinematic feel
  // easing: a more "sophisticated" curve that slows down the end-stretch
  const slowerDuration = "0.7s";
  const elegantBezier = "cubic-bezier(0.5, 0, 0.2, 1)";

  return (
    <section className="relative w-full bg-black text-white overflow-hidden">
      {/* Hero section */}
      <div className="relative w-full h-[500px] md:h-[620px] lg:h-[720px]">
        <Image
          src={serviceImg}
          alt="Global network background"
          fill
          className="object-cover !h-auto brightness-[0.45] contrast-[1.1] saturate-[0.85]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/80" />

        <div className="absolute top-[10%] md:top-[15%] left-1/2 -translate-x-1/2 w-full max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 text-center">
            {stats.map((stat, idx) => (
              <div key={idx}>
                <h3 className="text-[#2FADE6] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight drop-shadow-xl">
                  {stat.number}
                </h3>
                <p className="text-[10px] md:text-xs lg:text-sm font-bold text-white/70 mt-3 uppercase tracking-[0.25em]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-[5%] md:bottom-[8%] lg:bottom-[-2%] left-8 max-sm:left-[unset] w-full px-4 sm:px-6">
          <div className="max-w-7xl mx-auto flex justify-start">
            <div className="bg-black/75 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-[#2FADE6]/30 shadow-2xl w-full sm:max-w-[514px] min-h-[255px] flex flex-col justify-center z-[1]">
              <p className="text-[#2FADE6] text-xs sm:text-sm uppercase font-semibold tracking-widest mb-2">
                WHAT WE DO
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3">
                Our <span className="text-[#2FADE6]">Services</span>
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed">
                Delivering reliable, high speed internet services built on
                robust infrastructure.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Cards section with SLOWER animations */}
      <div className="relative bg-black pt-10 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
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
                         ${isHovered ? "h-[320px] max-sm:h-[370px] md:h-[570px]" : isNeighbor ? "h-[160px] md:h-[260px]" : "h-[180px] md:h-[330px]"}
                         ${service.variant === "blue" ? "bg-[#2FADE6] text-black border-transparent" : "bg-black text-white border-white/20"}`}
                      style={{
                        transition: `height ${slowerDuration} ${elegantBezier}`,
                        willChange: "height",
                        transform: "translateZ(0)",
                      }}
                    >
                      <div
                        className={`relative flex flex-col items-center flex-grow ${isHovered ? "pb-4 md:pb-32" : "pb-8 md:pb-48"} ${isNeighbor ? "scale-90 opacity-50" : ""}`}
                        style={{
                          transition: `all ${slowerDuration} ${elegantBezier}`,
                          willChange: "padding, transform, opacity",
                        }}
                      >
                        <div className="mb-3 md:mb-6">
                          <Image
                            src={service.icon}
                            alt={`${service.title} icon`}
                            width={45}
                            height={45}
                            className={`object-contain md:w-[70px] md:h-[70px] ${service.variant === "black" ? "brightness-0 invert" : ""}`}
                          />
                        </div>

                        <h4 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-5 leading-tight">
                          {service.title}
                        </h4>

                        <div
                          className={`px-2 sm:px-3 ${isNeighbor ? "opacity-0 h-0" : "opacity-100"}`}
                          style={{
                            transition: `opacity ${slowerDuration} ${elegantBezier}, height ${slowerDuration} ${elegantBezier}`,
                          }}
                        >
                          <p
                            className={`text-xs sm:text-base leading-snug md:leading-relaxed ${service.variant === "blue" ? "text-black/80" : "text-gray-300/90"}`}
                          >
                            {service.desc}
                          </p>
                        </div>
                      </div>

                      {service.hoverImage && (
                        <div
                          className={`absolute left-1/2 w-[92%] sm:w-[88%] rounded-xl overflow-hidden ${isHovered ? "bottom-3 md:bottom-8 opacity-100" : "bottom-0 opacity-0"}`}
                          style={{
                            transform: isHovered
                              ? "translate(-50%, 0)"
                              : "translate(-50%, 40px)",
                            transition: `all ${slowerDuration} ${elegantBezier}`,
                            willChange: "transform, opacity, bottom",
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

export default Services;
