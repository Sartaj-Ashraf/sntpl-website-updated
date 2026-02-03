import React from "react";
import HeroAbout from "../components/herosections/aboutpage/page";
import AboutIntroduction from "../components/who_we_are/page";
import VisionaryLeadership from "../components/Founders/page";
import OurMission from "../components/ourmission/page";
import OurVision from "../components/ourvision/page";
import WhyChooseUs from "../components/whychooseus/page";
import Contact from "../components/contact/page";
import Footer from "../components/layouts/Footer";
const page = () => {
  return (
    <div>
      <HeroAbout />
      <AboutIntroduction />
      <VisionaryLeadership />
      <OurMission />
      <OurVision />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </div>
  );
};

export default page;
