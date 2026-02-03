import React from "react";
import PricingHero from "../components/herosections/pricingpage/page";
import PricingPlans from "../components/internetplans/page";
import Footer from "../components/layouts/Footer";
const page = () => {
  return (
    <div>
      <PricingHero />
      <PricingPlans />
      <Footer />
    </div>
  );
};

export default page;
