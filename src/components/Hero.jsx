import React from "react";
import HeroBanner from "../img/HeroVideo.mp4";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="overlay"></div>
      <div className="hero-image d-flex justify-content-end">
        <video src={HeroBanner} autoPlay loop muted />
      </div>

      <div className="hero-text text-start">
        <h1 className="fw-bolder display-1 hero-title">Hi there, I am a</h1>
        <h1 className="fw-bolder display-1 hero-title mb-5 higlight">
          Web Developer
        </h1>
        <button type="button" className="btn btn-outline-light">
          Download my Resume
        </button>
      </div>
    </section>
  );
};

export default Hero;
