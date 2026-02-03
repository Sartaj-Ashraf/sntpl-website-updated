import React from "react";
import ContactHero from "../components/herosections/contactpage/page";
import Contact from "../components/contact/page";
import MapSection from "../components/mapsection/page";
import Footer from "../components/layouts/Footer";
const page = () => {
  return (
    <div>
      <ContactHero />
      <Contact />
      <MapSection />
      <Footer />
    </div>
  );
};

export default page;
