import React from "react";

const MapSection = () => {
  return (
    <section className="relative py-20 px-4">
      {/* Container matches Navbar's max-w-7xl to ensure alignment */}
      <div className="mx-auto max-w-7xl relative min-h-[500px]">
        <div className="flex flex-col lg:flex-row items-center justify-end">
          {/* Overlapping Text Card: Positioned at the left edge of the navbar limit */}
          <div className="z-20 w-full lg:w-auto lg:absolute lg:left-0 flex flex-col gap-4">
            <div className="bg-black rounded-[40px] p-10 md:p-14 shadow-xl w-full lg:w-[501px] lg:h-[272px] flex flex-col justify-center">
              <h2 className="text-white text-5xl md:text-6xl font-bold leading-tight">
                Tap To Find <br />
                <span className="text-[#2FADE6]">Us</span>
              </h2>
              <p className="text-gray-400 text-sm md:text-base font-light mt-4">
                Find our location and get directions instantly.
              </p>
            </div>
          </div>

          {/* Map Container: Positioned to end at the right edge of the navbar limit */}
          <div className="z-10 mt-10 lg:mt-0 w-full lg:w-auto">
            <div className="relative w-full lg:w-[840px] h-[400px] lg:h-[564px] rounded-[40px] overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105801.85463874288!2d74.70283101798002!3d34.03779482221697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e18fd8b339d443%3A0x978c569684ea55cb!2sSrinagar%20Net%20Tech%20Private%20Limited!5e0!3m2!1sen!2sin!4v1769678228456!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                /* These filters create the dark-mode effect seen in your reference */
                className=" contrast-125 invert-[0.9] hue-rotate-180 border-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
