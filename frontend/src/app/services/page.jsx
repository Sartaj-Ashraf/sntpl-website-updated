import React from "react";
import ServicesHero from "../components/herosections/servicespage/page";
import AllServices from "../components/allservices/AllServices";
import WhoWeServe from "../components/whoweserve/page";
import Contact from "../components/contact/page";
import Footer from "../components/layouts/Footer";

const page = () => {
  return (
    <div>
      <ServicesHero />
      <AllServices />
      <WhoWeServe />
      <Contact />
      <Footer />
    </div>
  );
};

export default page;
