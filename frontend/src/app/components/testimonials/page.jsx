"use client";
import React, { useCallback } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

// Assets
import testimonialsImg from "../../../../public/images/testimonials.png";
import personImg from "../../../../public/images/person1.png";
import comma2 from "../../../../public/images/comma2.png";
import comma3 from "../../../../public/images/comma3.png";
import googleIcon from "../../../../public/images/google.png";

const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi],
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi],
  );

  const reviews = [
    {
      name: "Abrar Ahmad",
      role: "CEO, Education tech",
      text: "Professional repairs and responsible recycling Professional repairs and responsible recycling Professional.",
      variant: "black",
    },
    {
      name: "Abrar Ahmad",
      role: "CEO, Education tech",
      text: "Professional repairs and responsible recycling Professional repairs and responsible recycling Professional.",
      variant: "blue", // Blue glow border
    },
    {
      name: "Abrar Ahmad",
      role: "CEO, Education tech",
      text: "Professional repairs and responsible recycling Professional repairs and responsible recycling Professional.",
      variant: "black",
    },
    {
      name: "Abrar Ahmad",
      role: "CEO, Education tech",
      text: "Professional repairs and responsible recycling Professional repairs and responsible recycling Professional.",
      variant: "blue",
    },
    {
      name: "Abrar Ahmad",
      role: "CEO, Education tech",
      text: "Professional repairs and responsible recycling Professional repairs and responsible recycling Professional.",
      variant: "black",
    },
  ];

  return (
    <section className="relative w-full bg-black text-white py-20 overflow-hidden font-sans">
      {/* Background Glow */}
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#2FADE6] rounded-full blur-[150px] opacity-20" />

      <div className="max-w-7xl mx-auto px-6 relative flex flex-col items-center">
        {/* Header Section */}
        <div className="relative w-full max-w-2xl mb-12">
          <div className="rounded-3xl overflow-hidden border border-white/10 aspect-[16/10] relative">
            <Image
              src={testimonialsImg}
              alt="Hero"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        </div>

        <div className="text-center mb-10">
          <p className="text-[#2FADE6] text-sm font-bold tracking-widest uppercase mb-4">
            Clients Feedback
          </p>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            More Than 250+{" "}
            {/* FIXED: Removed solid background, added text color + glow */}
            <span className="text-[#2FADE6] drop-shadow-[0_0_15px_rgba(47,173,230,0.4)]">
              Testimonial
            </span>
          </h2>
        </div>

        {/* --- SLIDER CONTAINER --- */}
        <div className="relative w-full group px-4">
          {/* Navigation Buttons */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 lg:left-[-50px] top-1/2 -translate-y-1/2 z-40 p-2 bg-black/50 border border-white/10 hover:bg-[#2FADE6] hover:text-black rounded-full transition-all"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={scrollNext}
            className="absolute right-0 lg:right-[-50px] top-1/2 -translate-y-1/2 z-40 p-2 bg-black/50 border border-white/10 hover:bg-[#2FADE6] hover:text-black rounded-full transition-all"
          >
            <ChevronRight size={24} />
          </button>

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4 md:-ml-8">
              {reviews.map((item, idx) => (
                <div
                  key={idx}
                  className="flex-[0_0_100%] min-w-0 pl-4 sm:flex-[0_0_50%] lg:flex-[0_0_33.33%] md:pl-8 py-10"
                >
                  <div
                    className={`
                      relative p-8 rounded-[40px] flex flex-col items-center text-center h-full transition-all duration-500
                      ${
                        item.variant === "blue"
                          ? "bg-black border-2 border-[#2FADE6] shadow-[0_0_30px_rgba(47,173,230,0.2)] scale-105 z-20"
                          : "bg-black border border-white/10 text-white z-10"
                      }
                    `}
                  >
                    {/* Quote Icons */}
                    <div className="absolute -top-4 -left-2 w-10 h-10">
                      <Image src={comma2} alt="Q" />
                    </div>
                    <div className="absolute -bottom-4 -right-2 w-10 h-10">
                      <Image src={comma3} alt="Q" />
                    </div>

                    {/* Google Icon */}
                    <div className="absolute top-6 right-6 w-5 h-5 opacity-50">
                      <Image src={googleIcon} alt="G" width={20} height={20} />
                    </div>

                    {/* Profile Image */}
                    <div
                      className={`w-16 h-16 lg:w-20 lg:h-20 rounded-full overflow-hidden border-4 mb-6 relative ${item.variant === "blue" ? "border-[#2FADE6]" : "border-white/10"}`}
                    >
                      <Image
                        src={personImg}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Stars */}
                    <div className="flex gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          fill={item.variant === "blue" ? "#2FADE6" : "#FFD700"}
                          strokeWidth={0}
                        />
                      ))}
                    </div>

                    <p className="text-sm md:text-base mb-8 italic leading-relaxed text-gray-300">
                      "{item.text}"
                    </p>

                    <div className="mt-auto">
                      <h4 className="font-bold text-lg lg:text-xl text-white">
                        {item.name}
                      </h4>
                      <p className="text-[10px] lg:text-xs uppercase tracking-widest mt-2 font-semibold text-[#2FADE6]">
                        {item.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
