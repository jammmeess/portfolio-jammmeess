import React from "react";
import HeroBanner from "../img/HeroVideo.mp4";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-image d-flex justify-content-end">
        <video src={HeroBanner} autoPlay loop muted />
      </div>
      <div className="hero-text text-start">
        <h1 className="fw-bolder display-1">Welcome to my Portfolio</h1>
        <button type="button" className="btn btn-outline-light">
          Download my Resume
        </button>
      </div>
    </section>
  );
};

export default Hero;
