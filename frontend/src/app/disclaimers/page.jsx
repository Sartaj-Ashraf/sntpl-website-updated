import React from "react";
import Navbar from "../components/layouts/Navbar";
import Footer from "../components/layouts/Footer";

const Disclaimer = () => {
  const benefits = [
    "Cost savings and enhanced value-added services",
    "Single point of contact for all connectivity needs",
    "Fast scalability and highly reliable solutions (SLA supported)",
    "Enhanced service quality by experienced specialists",
    "More management time for your core business",
    "Proven, time-tested solutions for growth",
    "Reduced capital expenditure on infrastructure",
  ];

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 pt-32 pb-20">
        {/* Header Section */}
        <header className="mb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-[#147CAA]/10 text-[#147CAA] text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1 rounded-full border border-[#147CAA]/20">
              Operational Framework
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter">
            Disclaimers <span className="text-[#147CAA]">& Info.</span>
          </h1>
          <p className="text-xl text-zinc-400 leading-relaxed max-w-3xl">
            Clarifying our services, commitments, and the unique operational
            framework of <span className="text-white">SNTPL.</span>
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-16">
            {/* Company Overview */}
            <section className="space-y-6">
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <span className="w-8 h-[1px] bg-[#147CAA]"></span>
                Company Overview
              </h2>
              <div className="bg-zinc-900/30 border border-zinc-800 rounded-3xl p-8 leading-relaxed text-zinc-400 text-lg">
                <p className="mb-4">
                  SNTPL (formerly Kashmir Valley Networks) provides high-speed
                  internet connectivity and value-added services including
                  <span className="text-white ml-1">
                    web-based solutions
                  </span>{" "}
                  and
                  <span className="text-white ml-1">network integration</span>.
                </p>
                <p>
                  While SNTPL specializes in ISP services, our sister concern,
                  <span className="text-[#147CAA] font-medium ml-1 text-base">
                    Shabkha Taqnia Private Limited
                  </span>
                  , focuses on broader system integration.
                </p>
              </div>
            </section>

            {/* Regional Challenges Section */}
            <section className="bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-3xl p-8">
              <h2 className="text-2xl font-bold mb-6">
                Service Territory & Challenges
              </h2>
              <p className="text-zinc-400 text-lg">
                Operating in <span className="text-white">Jammu & Kashmir</span>{" "}
                presents unique geographical and political hurdles. We have
                built a resilient infrastructure designed for critical users in
                these demanding environments.
              </p>
            </section>

            {/* Benefits Grid */}
            <section>
              <h2 className="text-2xl font-bold mb-8">
                Benefits of Partnering
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4 p-5 bg-zinc-900/20 border border-zinc-800 rounded-2xl group hover:border-[#147CAA]/50 transition-all"
                  >
                    <span className="text-[#147CAA] mt-1 group-hover:scale-110 transition-transform">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="3"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    <p className="text-sm text-zinc-300">{benefit}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Liability Disclaimer */}
            <section className="border-l-4 border-[#147CAA] bg-[#147CAA]/5 p-8 rounded-r-3xl">
              <h2 className="text-xl font-bold mb-4 uppercase tracking-wider text-[#147CAA]">
                Limitation of Liability
              </h2>
              <p className="text-zinc-400 leading-relaxed italic">
                "External factors such as regional regulations, technical
                constraints, and political situations can occasionally affect
                performance. SNTPL cannot assume responsibility for disruptions
                beyond our direct control."
              </p>
            </section>

            {/* Agreement Text */}
            <p className="text-zinc-500 text-sm pt-8 border-t border-zinc-900">
              By using our services, you agree to these terms as part of your
              service relationship with SNTPL.
            </p>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <div className="sticky top-32 bg-[#147CAA] rounded-[2rem] p-8">
              <h3 className="text-2xl font-bold mb-4 text-white">
                Our Commitment
              </h3>
              <p className="text-blue-50 text-sm leading-relaxed mb-6 opacity-90">
                To deliver a standard of service that goes beyond customer
                expectations and sets us apart from competitors.
              </p>
              <div className="h-[1px] bg-white/20 mb-6"></div>
              <div className="space-y-4">
                {["Innovation", "Partnership", "Scalability"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    <span className="text-xs font-bold uppercase tracking-widest text-white">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Disclaimer;
