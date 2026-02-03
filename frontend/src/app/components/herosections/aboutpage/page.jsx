import React from "react";
import Navbar from "../../layouts/Navbar";
import aboutImg from "../../../../../public/images/aboutus_hero2.jpg";

const HeroAbout = () => {
  const heroStyle = {
    backgroundImage: `url(${aboutImg.src})`,
    height: "100vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    textAlign: "center",
    padding: "0 20px",
    position: "relative", // Required for the overlay
  };

  const titleStyle = {
    fontSize: "clamp(2.5rem, 8vw, 4rem)", // Kept exactly as requested
    fontWeight: "800",
    marginBottom: "1rem",
    letterSpacing: "2px",
    lineHeight: "1.2",
    position: "relative",
    zIndex: 20,
  };

  const highlightStyle = {
    color: "#2FADE6",
    textShadow: "0 0 20px rgba(47, 173, 230, 0.6)",
    display: "inline-block",
  };

  const descriptionStyle = {
    fontSize: "1.2rem", // Kept exactly as requested
    maxWidth: "800px",
    lineHeight: "1.6",
    fontWeight: "300",
    color: "rgba(255, 255, 255, 1)", // Set to pure white for maximum contrast
    position: "relative",
    zIndex: 20,
  };

  return (
    <div style={{ position: "relative", backgroundColor: "black" }}>
      {/* Navbar overlay */}
      <div
        style={{ position: "absolute", top: 0, left: 0, right: 0, zIndex: 50 }}
      >
        <Navbar />
      </div>

      <section style={heroStyle}>
        {/* NEW VISIBILITY LAYER: Linear Gradient Scrim */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.7) 100%)",
          }}
        />

        <h1 style={titleStyle}>
          About <span style={highlightStyle}>Us</span>
        </h1>
        <p style={descriptionStyle}>
          We deliver reliable, high performance internet solutions through
          robust infrastructure and deep local expertise, connecting homes and
          businesses across the region.
        </p>
      </section>
    </div>
  );
};

export default HeroAbout;
