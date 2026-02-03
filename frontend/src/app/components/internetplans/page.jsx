"use client";
import React from "react";

const PricingPlans = () => {
  const plans = [
    {
      category: "Home Plans",
      name: "UL 30",
      price: "₹400",
      description:
        "Basic unlimited home internet plan with reliable connectivity for everyday use.",
      badge: null,
      features: [
        "Unlimited data usage",
        "Up to 30Mbps speed",
        "24/7 support included",
        "Rs 2000 installation charges",
        "Suitable for basic browsing and streaming",
        "Home use only",
      ],
    },
    {
      category: "Home Plans",
      name: "UL 100",
      price: "₹700",
      description:
        "High-speed unlimited home internet with enhanced performance for modern households.",
      badge: "Sale!",
      features: [
        "Unlimited data usage",
        "Up to 100Mbps speed",
        "24/7 support included",
        "Rs 2000 installation charges",
        "Perfect for HD streaming and gaming",
        "Multiple device support",
      ],
    },
    {
      category: "Business Plans",
      name: "Premium",
      price: "₹1250",
      description:
        "Top-tier business plan with maximum data allowance and fastest speeds available.",
      badge: "Popular",
      features: [
        "1500GB total data (1000GB + 500GB bonus)",
        "Up to 250Mbps speed",
        "24/7 support included",
        "Rs 2000 installation charges",
        "2 Mbps post-FUP speed",
        "Business-grade reliability",
      ],
    },
    {
      category: "Business Plans",
      name: "Economy",
      price: "₹1000",
      description: "Reliable connectivity for small business operations.",
      badge: "Best Value",
      features: [
        "Unlimited data usage",
        "Up to 30Mbps speed",
        "Static IP available",
        "Business support",
        "Professional setup",
        "Standard installation",
      ],
    },
  ];

  return (
    <section className="bg-white py-16 px-4 md:px-10 overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        {/* Main Title */}
        <div className="text-center mb-16">
          <h2 className="text-black text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
            Get to know your <br className="hidden md:block" /> internet plan.
          </h2>
        </div>

        {/* Grid - Adjusted for 4 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="relative bg-black rounded-[40px] p-8 border-[3px] border-[#2FADE6] flex flex-col h-full transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_20px_50px_rgba(47,173,230,0.2)]"
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-5 left-8 bg-[#2FADE6] text-black text-xs font-black uppercase px-4 py-2 rounded-xl shadow-lg">
                  {plan.badge}
                </div>
              )}

              {/* Category */}
              <div className="mb-4">
                <span className="text-[#2FADE6] text-sm font-bold uppercase tracking-widest">
                  {plan.category}
                </span>
              </div>

              {/* Name & Price */}
              <div className="flex flex-wrap items-baseline gap-x-2 mb-4">
                <h3 className="text-white text-3xl xl:text-4xl font-bold uppercase">
                  {plan.name}
                </h3>
                <span className="text-[#2FADE6] text-3xl xl:text-4xl font-bold">
                  {plan.price}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed mb-8">
                {plan.description}
              </p>

              {/* Features List */}
              <div className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-start gap-3">
                    <div className="mt-1.5 flex-shrink-0">
                      <div className="w-2.5 h-2.5 rounded-full border border-[#2FADE6] flex items-center justify-center">
                        <div className="w-1 h-1 rounded-full bg-[#2FADE6] shadow-[0_0_8px_#2FADE6]" />
                      </div>
                    </div>
                    <span className="text-white text-sm opacity-80 leading-snug">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <button className="w-full py-4 bg-white text-black font-bold rounded-2xl hover:bg-[#2FADE6] hover:text-white transition-all transform active:scale-95">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
