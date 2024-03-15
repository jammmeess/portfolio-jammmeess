import React from "react";
import HeroBanner from "../img/HeroVideo.mp4";
import HeroMobile from "../img/HeroMobile.mp4";
import Resume from "../files/Bomediano_Resume.pdf";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="d-none d-sm-block">
        <div className="overlay"></div>
        <div className="hero-image col-lg-12 d-flex justify-content-end">
          <video src={HeroBanner} autoPlay loop muted />
        </div>

        <div className="hero-text text-start">
          <h1 className="fw-bolder display-1 hero-title">Hi there, I am a</h1>
          <h1 className="fw-bolder display-1 hero-title mb-5 higlight">
            Web Developer
          </h1>
          <button type="button" className="button">
            Download my Resume
          </button>
        </div>
      </div>

      {/* Phone Responsive */}
      <div className="d-block d-sm-none">
        <div className="row">
          <div className="col-5">
            <div className="overlay-mobile"></div>
            <div className="hero-mobilebanner">
              {/* <video src={HeroMobile} loop muted className="img-fluid" /> */}
            </div>
            <div className="hero-mobiletext">
              <h1 className="fw-bolder hero-mobile display-1">Hi there,</h1>
              <h1 className="fw-bolder hero-mobile display-1">I Am a</h1>
              <h1 className="fw-bolder hero-mobile display-1 higlight">Web</h1>
              <h1 className="fw-bolder hero-mobile display-1 mb-5 higlight">
                Developer
              </h1>
              <a href={Resume} download>
                <button type="button" className="button">
                  Download my Resume
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
