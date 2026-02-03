import React from "react";
import { X } from "lucide-react";

const ConnectionModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      {/* Modal Container */}
      <div className="relative w-full max-w-lg bg-[#000000] border border-white/10 rounded-3xl p-8 shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-6 top-6 text-white/60 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>

        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">
            New Connection Request
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-[#40B4E8] to-transparent rounded-full shadow-[0_0_15px_rgba(64,180,232,0.5)]" />
          <p className="text-white/70 mt-6 text-lg">
            Fill out the form below and our team will contact you shortly.
          </p>
        </div>

        {/* Form Fields */}
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-2">
            <label className="text-white font-semibold block ml-1 text-sm md:text-base">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-[#40B4E8]/50 focus:ring-1 focus:ring-[#40B4E8]/50 transition-all"
            />
          </div>

          <div className="space-y-2">
            <label className="text-white font-semibold block ml-1 text-sm md:text-base">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="Enter 10-digit phone number"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-[#40B4E8]/50 focus:ring-1 focus:ring-[#40B4E8]/50 transition-all"
            />
          </div>

          <div className="space-y-2">
            <label className="text-white font-semibold block ml-1 text-sm md:text-base">
              Select Service
            </label>
            <div className="relative">
              <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-[#40B4E8]/50 focus:ring-1 focus:ring-[#40B4E8]/50 transition-all appearance-none cursor-pointer">
                <option value="" disabled selected className="bg-[#000000]">
                  Choose a service
                </option>
                <option value="internet" className="bg-[#000000]">
                  Internet
                </option>
                <option value="leased-line" className="bg-[#000000]">
                  Leased Line
                </option>
                <option value="sd-wan" className="bg-[#000000]">
                  SD-WAN
                </option>
                <option value="dark-fiber" className="bg-[#000000]">
                  Dark Fiber
                </option>
                <option value="infrastructure" className="bg-[#000000]">
                  Network Infrastructure
                </option>
              </select>
              {/* Custom Chevron for the select */}
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/30">
                <svg
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L6 6L11 1"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full mt-4 bg-transparent hover:bg-white/5 text-white font-bold py-4 rounded-xl transition-all border border-white/10 active:scale-[0.98]"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default ConnectionModal;
