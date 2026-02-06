"use client";
import React, { useState, useEffect } from "react";
import { X, CheckCircle, Loader2 } from "lucide-react";

const ConnectionModal = ({ isOpen, onClose }) => {
  // --- Telegram Config ---
  const TELEGRAM_BOT_TOKEN = "8148881522:AAFC_Mj_5QVxY74pHO-FbGjeF89xeMz_yBg";
  const TELEGRAM_CHAT_ID = "1384980127";

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Prevent scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const telegramMessage = `
🔌 *New Connection Request*
🏢 Srinagar Net Tech Pvt. Ltd.

👤 *Name:* ${formData.name}
📱 *Phone:* ${formData.phone}
🛠️ *Service:* ${formData.service}
    `;

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text: telegramMessage,
            parse_mode: "Markdown",
          }),
        },
      );

      if (!response.ok) throw new Error("Failed to send");

      setShowSuccess(true);
      setFormData({ name: "", phone: "", service: "" });

      // Auto-close after success
      setTimeout(() => {
        setShowSuccess(false);
        onClose();
      }, 3000);
    } catch (error) {
      alert("Error sending request. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-300">
      <div className="relative w-full max-w-lg bg-[#000000] border border-white/10 rounded-3xl p-8 shadow-2xl animate-in zoom-in-95 duration-300">
        {/* Success Overlay */}
        {showSuccess && (
          <div className="absolute inset-0 z-10 bg-black/90 rounded-3xl flex flex-col items-center justify-center text-center p-6 animate-in fade-in">
            <CheckCircle size={64} className="text-[#40B4E8] mb-4" />
            <h3 className="text-2xl font-bold text-white">Request Sent!</h3>
            <p className="text-white/70 mt-2">
              Our team will contact you within 2-4 hours.
            </p>
          </div>
        )}

        <button
          onClick={onClose}
          className="absolute right-6 top-6 text-white/60 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>

        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">
            New Connection Request
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-[#40B4E8] to-transparent rounded-full shadow-[0_0_15px_rgba(64,180,232,0.5)]" />
          <p className="text-white/70 mt-6 text-lg">
            Fill out the form below and our team will contact you shortly.
          </p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label className="text-white font-semibold block ml-1 text-sm md:text-base">
              Full Name
            </label>
            <input
              required
              name="name"
              value={formData.name}
              onChange={handleChange}
              type="text"
              placeholder="Enter your full name"
              className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-[#40B4E8] focus:ring-1 focus:ring-[#40B4E8] transition-all"
            />
          </div>

          <div className="space-y-2">
            <label className="text-white font-semibold block ml-1 text-sm md:text-base">
              Phone Number
            </label>
            <input
              required
              name="phone"
              type="tel"
              pattern="[0-9]{10}"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter 10-digit phone number"
              className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-[#40B4E8] focus:ring-1 focus:ring-[#40B4E8] transition-all"
            />
          </div>

          <div className="space-y-2">
            <label className="text-white font-semibold block ml-1 text-sm md:text-base">
              Select Service
            </label>
            <div className="relative">
              <select
                required
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-[#40B4E8] appearance-none cursor-pointer"
              >
                <option value="" disabled className="bg-[#000000]">
                  Choose a service
                </option>
                <option value="Internet" className="bg-[#000000]">
                  Internet
                </option>
                <option value="Leased Line" className="bg-[#000000]">
                  Leased Line
                </option>
                <option value="SD-WAN" className="bg-[#000000]">
                  SD-WAN
                </option>
                <option value="Dark Fiber" className="bg-[#000000]">
                  Dark Fiber
                </option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/30">
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
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

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-4 bg-[#40B4E8] hover:bg-[#35a3d4] disabled:opacity-50 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-[#40B4E8]/20 active:scale-[0.98] flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="animate-spin" size={20} /> Sending...
              </>
            ) : (
              "Submit Request"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ConnectionModal;
