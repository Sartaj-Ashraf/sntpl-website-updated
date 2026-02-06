import React from "react";
import Navbar from "../components/layouts/Navbar";
import Footer from "../components/layouts/Footer";

const TermsAndConditions = () => {
  const policies = [
    {
      title: "GST & Taxation",
      detail:
        "Tariffs are exclusive of GST unless stated. One month denotes a standard 30-day cycle.",
    },
    {
      title: "Personal Use",
      detail:
        "Plans are for personal use. We reserve the right to end benefits if used for telemarketing.",
    },
    {
      title: "Non-Refundable",
      detail:
        "Prepaid recharges cannot be refunded for cash or transferred to other accounts.",
    },
    {
      title: "Forfeiture",
      detail:
        "Unutilized benefits and data will be forfeited at the end of the plan validity period.",
    },
    {
      title: "Installation",
      detail:
        "One-time installation charges are non-refundable once the service is deployed.",
    },
    {
      title: "Commercial Cap",
      detail:
        "A Fair Usage Policy (FUP) limit of 3300 GB applies to all 'Unlimited' broadband plans.",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 pt-32 pb-20">
        {/* Header Section */}
        <header className="mb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-[#147CAA]/10 text-[#147CAA] text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1 rounded-full border border-[#147CAA]/20">
              User Agreement
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter">
            Terms <span className="text-[#147CAA]">& Conditions.</span>
          </h1>
          <p className="text-xl text-zinc-400 leading-relaxed max-w-3xl">
            Please read these terms carefully. By subscribing to our plans, you
            agree to be bound by the operational policies of{" "}
            <span className="text-white">SNTPL.</span>
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-16">
            {/* Agreement Section */}
            <section className="bg-zinc-900/30 border border-zinc-800 rounded-3xl p-8">
              <h2 className="text-2xl font-bold mb-4 text-white">
                Agreement to Terms
              </h2>
              <p className="text-zinc-400 leading-relaxed text-lg">
                By accessing or using SNTPL's services, you acknowledge that you
                have read, understood, and agree to be bound by these Terms. If
                you do not agree with any part of these terms, please do not
                proceed with the service activation.
              </p>
            </section>

            {/* Policy Grid */}
            <section>
              <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <span className="w-8 h-[1px] bg-[#147CAA]"></span>
                Service Policies
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {policies.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-6 bg-zinc-900/20 border border-zinc-800 rounded-2xl hover:border-[#147CAA]/40 transition-all"
                  >
                    <h3 className="text-[#147CAA] font-bold uppercase text-xs tracking-widest mb-3">
                      {item.title}
                    </h3>
                    <p className="text-zinc-300 text-sm leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Detailed Clauses */}
            <section className="space-y-12">
              <div className="px-4 border-l border-zinc-800">
                <h2 className="text-xl font-bold mb-4">
                  Service Modifications
                </h2>
                <p className="text-zinc-400">
                  SNTPL reserves the right to modify, suspend, or discontinue
                  any aspect of the service at any time, including features,
                  databases, or content, without prior liability.
                </p>
              </div>

              <div className="px-4 border-l border-zinc-800">
                <h2 className="text-xl font-bold mb-4">
                  Fair Usage Policy (FUP)
                </h2>
                <p className="text-zinc-400">
                  SNTPL reserves the right to regulate or terminate services to
                  users who engage in activities that negatively impact the
                  network integrity or exceed reasonable usage parameters.
                </p>
              </div>

              <div className="px-4 border-l border-zinc-800">
                <h2 className="text-xl font-bold mb-4">Amendments</h2>
                <p className="text-zinc-400">
                  We may update these Terms at any time. Any changes will be
                  effective immediately upon posting to our website. Continued
                  use of the service constitutes acceptance of the new terms.
                </p>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <div className="sticky top-32 space-y-6">
              <div className="bg-[#147CAA] rounded-[2rem] p-8">
                <h3 className="text-2xl font-bold mb-4 text-white">
                  Recharge Options
                </h3>
                <p className="text-blue-50 text-sm leading-relaxed mb-6 opacity-90">
                  Subscribers are provided with advance recharge options in all
                  plans with associated benefits and discounts.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-xs font-bold text-white uppercase">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    Monthly Billing
                  </li>
                  <li className="flex items-center gap-2 text-xs font-bold text-white uppercase">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    Advance Discounts
                  </li>
                </ul>
              </div>

              <div className="p-6 border border-zinc-800 rounded-3xl bg-zinc-900/10">
                <p className="text-zinc-500 text-xs leading-relaxed italic text-center">
                  "One month denotes 30 days unless specified otherwise in the
                  plan details."
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TermsAndConditions;
