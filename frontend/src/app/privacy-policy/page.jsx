import React from "react";
import Navbar from "../components/layouts/Navbar";
import Footer from "../components/layouts/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 pt-32 pb-20">
        {/* Improved Header Section */}
        <header className="mb-20 border-b border-zinc-800 pb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-[#147CAA]/10 text-[#147CAA] text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1 rounded-full border border-[#147CAA]/20">
              Legal Document
            </span>
            <span className="text-zinc-600 text-xs tracking-widest uppercase">
              Revised 2024
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter">
            Privacy <span className="text-[#40B4E8]">Policy.</span>
          </h1>

          <p className="text-xl md:text-2xl text-zinc-400 leading-relaxed max-w-4xl">
            Your privacy matters to us. Please review how we collect, use, and
            protect your{" "}
            <span className="text-white border-b-2 border-[#147CAA]">
              personal information.
            </span>
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content (Left Column) */}
          <div className="lg:col-span-8 space-y-12">
            {/* Section: Website Ownership */}
            <section className="bg-zinc-900/20 border border-zinc-800 rounded-3xl p-8 md:p-10">
              <div className="flex gap-6">
                <div className="hidden md:block">
                  <div className="bg-[#147CAA] p-4 rounded-2xl shadow-[0_0_20px_rgba(20,124,170,0.3)]">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-10V4m0 10V4m-2 4h4"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    Website Ownership
                  </h2>
                  <p className="text-zinc-400 leading-relaxed text-lg">
                    This website{" "}
                    <span className="text-white font-medium">
                      www.sntisp.com
                    </span>{" "}
                    is owned and managed by
                    <strong className="text-[#147CAA] ml-1">
                      Srinagar Net tech Pvt Ltd.
                    </strong>{" "}
                    (Formerly Kashmir Valley Networks). Registered under the
                    Indian Companies Act, 1956, located at Hyderpora Bypass,
                    Srinagar, J&K.
                  </p>
                </div>
              </div>
            </section>

            {/* Section: Introduction */}
            <section className="px-4">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-4">
                <span className="text-[#147CAA]">01.</span> Introduction
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed">
                This policy describes our standards for collection, disclosure,
                and protection of your information. Protecting data is a matter
                of trust. We only collect information where it is necessary and
                relevant to our dealings with you.
              </p>
            </section>

            {/* Section: Collection of Information */}
            <section className="px-4">
              <h2 className="text-2xl font-bold mb-8 flex items-center gap-4">
                <span className="text-[#147CAA]">02.</span> Collection of
                Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: "Personal Profile",
                    desc: "Names, mailing address, PAN, and email credentials.",
                  },
                  {
                    title: "Installation Data",
                    desc: "Physical coordinates for service deployment.",
                  },
                  {
                    title: "Browsing Info",
                    desc: "IP addresses, OS telemetry, and domain access.",
                  },
                  {
                    title: "Security Note",
                    desc: "No financial or bank data is stored on local servers.",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-6 bg-zinc-900/40 border border-zinc-800 rounded-2xl hover:border-[#147CAA]/50 transition-colors"
                  >
                    <h3 className="text-white font-bold mb-2">{item.title}</h3>
                    <p className="text-zinc-500 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar (Right Column) */}
          <aside className="lg:col-span-4">
            <div className="sticky top-32 bg-[#147CAA] rounded-3xl p-8 overflow-hidden relative group">
              {/* Abstract Background Element */}
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-500" />

              <h3 className="text-2xl font-bold mb-6 relative z-10">
                Contact Support
              </h3>
              <div className="space-y-6 relative z-10">
                <div>
                  <p className="text-blue-100/70 text-[10px] uppercase font-bold tracking-widest mb-1">
                    Email
                  </p>
                  <p className="text-lg font-bold">support@kvnisp.com</p>
                </div>
                <div>
                  <p className="text-blue-100/70 text-[10px] uppercase font-bold tracking-widest mb-1">
                    Office
                  </p>
                  <p className="text-sm leading-relaxed">
                    Al Hyder Shopping Complex,
                    <br />
                    Hyderpora By pass,
                    <br />
                    Srinagar, J&K-190014
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
