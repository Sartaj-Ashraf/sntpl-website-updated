"use client";
import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  Send,
  Loader2,
  CheckCircle,
} from "lucide-react";

const Contact = () => {
  // --- Telegram Config ---
  const TELEGRAM_BOT_TOKEN = "8148881522:AAFC_Mj_5QVxY74pHO-FbGjeF89xeMz_yBg";
  const TELEGRAM_CHAT_ID = "1384980127";

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const telegramMessage = `
📩 *New Website Message*
🏢 Srinagar Net Tech Pvt. Ltd.

👤 *Name:* ${formData.firstName} ${formData.lastName}
📱 *Phone:* ${formData.phone}
📧 *Email:* ${formData.email}
💬 *Message:* ${formData.message}
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
      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        message: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => setShowSuccess(false), 5000);
    } catch (error) {
      alert("Error sending message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full bg-white py-16 px-35 max-sm:px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* LEFT SIDE: Contact Form */}
        <div className="relative">
          <div className="mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight">
              Reach & Get In <span className="text-black">Touch</span>
              <br />
              <span className="text-[#2FADE6] drop-shadow-[0_0_10px_rgba(47,173,230,0.3)]">
                With Us!
              </span>
            </h2>
            <p className="text-gray-600 mt-4 text-lg">
              Have questions about our internet plans or services? Fill out the
              form and our team will get back to you shortly.
            </p>
          </div>

          {showSuccess ? (
            <div className="bg-green-50 border border-green-200 rounded-2xl p-8 flex flex-col items-center text-center animate-in fade-in zoom-in-95">
              <CheckCircle size={48} className="text-green-500 mb-4" />
              <h3 className="text-xl font-bold text-green-900">
                Message Sent Successfully!
              </h3>
              <p className="text-green-700 mt-2">
                Thank you for reaching out. We'll get back to you soon.
              </p>
              <button
                onClick={() => setShowSuccess(false)}
                className="mt-6 text-sm font-semibold text-green-600 hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  required
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  type="text"
                  placeholder="First Name"
                  className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2FADE6] focus:border-[#2FADE6] transition-all bg-white text-black placeholder:text-gray-500"
                />
                <input
                  required
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  type="text"
                  placeholder="Last Name"
                  className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2FADE6] focus:border-[#2FADE6] transition-all bg-white text-black placeholder:text-gray-500"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  required
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2FADE6] focus:border-[#2FADE6] transition-all bg-white text-black placeholder:text-gray-500"
                />
                <input
                  required
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="Email"
                  className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2FADE6] focus:border-[#2FADE6] transition-all bg-white text-black placeholder:text-gray-500"
                />
              </div>
              <textarea
                required
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write a Message"
                rows={6}
                className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2FADE6] focus:border-[#2FADE6] transition-all resize-none bg-white text-black placeholder:text-gray-500"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-black text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-800 active:scale-95 transition-all flex items-center gap-2 disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    Sending... <Loader2 size={18} className="animate-spin" />
                  </>
                ) : (
                  <>
                    Send Message <Send size={18} />
                  </>
                )}
              </button>
            </form>
          )}
        </div>

        {/* RIGHT SIDE: Information Card */}
        <div className="relative h-full flex items-stretch">
          <div className="hidden lg:block w-1.5 bg-[#2FADE6] h-[90%] self-center mr-8 rounded-full shadow-[0_0_15px_rgba(47,173,230,0.5)]" />

          <div className="bg-black text-white p-10 md:p-12 max-[321px]:p-6 rounded-[2.5rem] flex flex-col justify-between w-full shadow-2xl border border-white/5">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-center mb-2">
                Connecting You <br /> Seamlessly
              </h3>
              <div className="flex justify-center mb-10">
                <span className="text-[#2FADE6] text-2xl font-bold tracking-tight drop-shadow-[0_0_15px_rgba(47,173,230,0.6)]">
                  with SNTPL
                </span>
              </div>

              <div className="space-y-6 text-lg">
                <div className="flex items-center gap-4 group">
                  <div className="bg-[#2FADE6]/10 p-3 rounded-lg group-hover:bg-[#2FADE6] transition-colors duration-300">
                    <MessageSquare
                      className="text-[#2FADE6] group-hover:text-white"
                      size={24}
                    />
                  </div>
                  <span className="group-hover:text-[#2FADE6] transition-colors">
                    +91 9018 31 2121
                  </span>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="bg-[#2FADE6]/10 p-3 rounded-lg group-hover:bg-[#2FADE6] transition-colors duration-300">
                    <Phone
                      className="text-[#2FADE6] group-hover:text-white"
                      size={24}
                    />
                  </div>
                  <span className="group-hover:text-[#2FADE6] transition-colors">
                    +91 9018 31 2121
                  </span>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="bg-[#2FADE6]/10 p-3 rounded-lg group-hover:bg-[#2FADE6] transition-colors duration-300">
                    <Mail
                      className="text-[#2FADE6] group-hover:text-white"
                      size={24}
                    />
                  </div>
                  <span className="group-hover:text-[#2FADE6] transition-colors">
                    support@kvnisp.com
                  </span>
                </div>
                <div className="flex items-start gap-4 group">
                  <div className="bg-[#2FADE6]/10 p-3 rounded-lg shrink-0 group-hover:bg-[#2FADE6] transition-colors duration-300">
                    <MapPin
                      className="text-[#2FADE6] group-hover:text-white"
                      size={24}
                    />
                  </div>
                  <span className="leading-relaxed group-hover:text-[#2FADE6] transition-colors">
                    First Floor Al-Hyder Shopping Complex,
                    <br />
                    Hyderpora-190018, Srinagar,
                    <br />
                    Jammu and Kashmir
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
