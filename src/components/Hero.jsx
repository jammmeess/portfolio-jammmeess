import React from "react";
import HeroBanner from "../img/HeroVideo.mp4";
import HeroMobile from "../img/HeroMobile.mp4";
import Resume from "../files/Bomediano_Resume.pdf";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="d-none d-sm-block">
        <div className="overlay"></div>
        <div className="col-lg-12 col-xl-12 d-flex justify-content-end">
          <video
            src={HeroBanner}
            autoPlay
            loop
            muted
            className="hero-image img-fluid"
          />
        </div>

        <div className="container">
          <div className="hero-textLarge text-start d-none d-xl-block">
            <h1 className="fw-bolder display-1 hero-title text-dark">
              Hello World, I am a
            </h1>
            <h1 className="fw-bolder display-1 hero-title mb-5">
              <span className="highlight">Web Developer</span>
            </h1>
            <button type="button" className="button">
              Download my Resume
            </button>
          </div>
          <div className="hero-text text-start d-block d-xl-none">
            <h1 className="fw-bolder display-1 hero-title text-dark">
              Hello World, I am a
            </h1>
            <h1 className="fw-bolder display-1 hero-title mb-5">
              <span className="highlight"> Web Developer</span>
            </h1>
            <button type="button" className="button">
              Download my Resume
            </button>
          </div>
        </div>
      </div>

      {/* Phone Responsive */}
      <div className="d-block d-sm-none">
        <div className="row">
          <div className="hero-mobilebanner">
            <video src={HeroMobile} autoplay loop muted className="img-fluid" />
          </div>
          <div className="hero-mobiletext ms-3 pe-5">
            <h1 className="fw-bolder hero-mobile display-1 text-dark">
              Hello World,
            </h1>
            <h1 className="fw-bolder hero-mobile display-1 text-dark">
              I am a
            </h1>
            <h1 className="fw-bolder hero-mobile display-1 ">
              <span className="highlight">Web</span>
            </h1>
            <h1 className="fw-bolder hero-mobile display-1 mb-5 ">
              <span className="highlight">Developer</span>
            </h1>
            <a href={Resume} download>
              <button type="button" className="button">
                Download my Resume
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
