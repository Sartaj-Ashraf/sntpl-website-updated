import Image from "next/image";
import Hero from "../../herosections/homepage/page";
import AboutUs from "../../AboutUs/page";
import Services from "../../ourservices/page";
import Testimonials from "../../testimonials/page";
import Contact from "../../contact/page";
import Footer from "../../layouts/Footer";
export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
