import React from "react";
import LinkedIn from "../img/linkedIn.svg";
import Email from "../img/email.svg";
import Github from "../img/github.svg";

const Footer = () => {
  return (
    <section className="footer">
      <div className="container">
        <div className="row mt-5 mb-5">
          <div className="col-lg-5">
            <h3 className="display-2">
              <strong>
                Get.<span className="text-code">InTouch( )</span>
              </strong>
            </h3>
            <p>
              I'm a front-end web developer based in the Philippines,
              and this site is one of my projects crafted with ReactJS. Eager to
              learn more? Let's connect! Feel free to reach out to me through
              the social icons below.
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
        </div>
      </div>
    </section>
  );
};

export default Footer;
