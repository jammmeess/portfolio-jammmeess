import React from "react";
import LinkedIn from "../img/linkedIn.svg";
import Email from "../img/email.svg";
import Github from "../img/github.svg";
import Resume from "../files/Resume__Bomediano.pdf";
import RightArrow from "../img/right_arrow.svg";

const Footer = () => {
  return (
    <section className="footer">
      <div className="container pt-5 ">
        <div className="row py-5 ">
          <div className="col-lg-4">
            <div className="container"></div>
            <h3 className="display-5">
              <strong>
                Get.<span className="text-code">InTouch( )</span>
              </strong>
            </h3>
            <div className="divider mb-3"></div>
            <p>
              I'm a front-end web developer based on the Philippines, and this
              site is one of my projects crafted with ReactJS. Eager to learn
              more? Let's connect! Feel free to reach out to me through the
              social icons below.
            </p>
            <a href="mailto:james_bomediano@hotmail.com" target="_blank">
              <img src={Email} className="social-icon" alt="Email" />
            </a>
            <a
              href="https://www.linkedin.com/in/kristoffer-james-bomediano-020214271/"
              target="_blank"
            >
              <img src={LinkedIn} className="social-icon" alt="LinkedIn" />
            </a>
            <a
              href="https://github.com/jammmeess?tab=repositories"
              target="_blank"
            >
              <img
                src={Github}
                className="social-icon"
                alt="GitHub Repository"
              />
            </a>
          </div>
          <div className="col-lg-4 d-none d-sm-block">
            <article class="cta">
              <div class="cta__text-column">
                <h2>
                  My Contact <br /> Number:
                </h2>
                <p>
                  <i>+63 960-2694-856</i>
                </p>
              </div>
            </article>
          </div>
          <div className="col-lg-4 d-none d-sm-block">
            <article class="cta">
              <div class="cta__text-column">
                <h2>Download My <br/> Resume:</h2>
                <p>
                  <i>
                    <a className="text-light" href={Resume} download>
                      Click Here <img src={RightArrow} className="arrow" />
                    </a>
                  </i>
                </p>
              </div>
            </article>
          </div>

          {/* Phone Responsive */}
          <div className="col-lg-4 d-block d-sm-none pt-4">
            <article class="cta my-4">
              <div class="cta__text-column">
                <h2>My Contact Number:</h2>
                <p>
                  <i>+63 960-2694-856</i>
                </p>
              </div>
            </article>
          </div>
          <div className="col-lg-4 d-block d-sm-none">
            <article class="cta">
              <div class="cta__text-column">
                <h2>Download my Resume:</h2>
                <p>
                  <i>
                    <a className="text-light" href={Resume} download>
                      Click Here <img src={RightArrow} className="arrow" />
                    </a>
                  </i>
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
