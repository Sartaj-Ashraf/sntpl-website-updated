import React from "react";
import Navbar from "../components/layouts/Navbar";
import Contact from "../components/contact/page";
import MapSection from "../components/mapsection/page";
import Footer from "../components/layouts/Footer";
const page = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-16 md:mt-20">
        <Contact />
        <MapSection />
        <Footer />
      </div>
    </div>
  );
};

export default page;
