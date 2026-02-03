"use client";
import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  Instagram,
  Twitter,
  Send,
} from "lucide-react";

const Contact = () => {
  return (
    <section className="w-full bg-white py-16 px-35 max-sm:px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* LEFT SIDE: Contact Form */}
        <div>
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

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                /* Changed border-gray-200 to border-gray-300 for better visibility */
                className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2FADE6] focus:border-[#2FADE6] transition-all bg-white text-black placeholder:text-gray-500"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2FADE6] focus:border-[#2FADE6] transition-all bg-white text-black placeholder:text-gray-500"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2FADE6] focus:border-[#2FADE6] transition-all bg-white text-black placeholder:text-gray-500"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2FADE6] focus:border-[#2FADE6] transition-all bg-white text-black placeholder:text-gray-500"
              />
            </div>
            <textarea
              placeholder="Write a Message"
              rows={6}
              className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2FADE6] focus:border-[#2FADE6] transition-all resize-none bg-white text-black placeholder:text-gray-500"
            />
            <button
              type="submit"
              className="bg-black text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-800 active:scale-95 transition-all flex items-center gap-2"
            >
              Send Message
              <Send size={18} />
            </button>
          </form>
        </div>

        {/* RIGHT SIDE: Information Card */}
        <div className="relative h-full flex items-stretch">
          {/* Vertical Blue Accent Line */}
          <div className="hidden lg:block w-1.5 bg-[#2FADE6] h-[90%] self-center mr-8 rounded-full shadow-[0_0_15px_rgba(47,173,230,0.5)]" />

          <div className="bg-black text-white p-10 md:p-12 max-[321px]:p-6 rounded-[2.5rem] flex flex-col justify-between w-full shadow-2xl border border-white/5">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-center mb-2">
                Connecting You <br /> Seamlessly
              </h3>
              <div className="flex justify-center mb-10">
                {/* FIXED: Removed solid background block, added glow effect */}
                <span className="text-[#2FADE6] text-2xl font-bold tracking-tight drop-shadow-[0_0_15px_rgba(47,173,230,0.6)]">
                  with SNTPL
                </span>
              </div>

              {/* Contact Details */}
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
                    Al Hyder shopping Complex, hyderpora <br />
                    By pass Srinagar, Jammu and <br />
                    Kashmir-190014
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
