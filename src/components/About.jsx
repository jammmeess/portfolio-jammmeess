import React from "react";
import ProfilePicture from "../img/profile_picture.jpeg";

const About = () => {
  return (
    <section id="about">
      <div className="container-fluid d-none d-sm-block about-section">
        <div className="row">
          <div className="col-lg-4 mt-5 ms-3 me-5 d-flex justify-content-start">
            <img
              src={ProfilePicture}
              alt="A photo of me"
              className="img-fluid"
              id="profile"
              style={{
                boxShadow: "0px 0px 5px black",
                borderRadius: "0px 70px 0px 70px",
              }}
            />
          </div>
          <div className="col-lg-7 ms-4 text-dark profile-section">
            <span className="display-5 ">
              <p>
                <strong>
                  <span id="myName">myName()</span>.is
                </strong>
              </p>
            </span>
            <p className="display-4">
              <b>
                <i>Kristoffer James B. Bomediano.</i>
              </b>
            </p>
            <p>
              As a web developer, I thrive on navigating through diverse
              technologies with ease. I am able to self-manage on independent
              projects and work effectively in a team.
            </p>
            <p>
              My dedication to continuous learning allows me to stay current
              with industry trends and implement innovative solutions in my
              work.
            </p>

            <div className="col-lg-12 mt-5">
              <h3>
                <b>Skills:</b>
              </h3>
              <button className="skills btn btn-outline-dark mt-4">HTML</button>
              <button className="skills btn btn-outline-dark ms-2 mt-4">
                CSS
              </button>
              <button className="skills btn btn-outline-dark ms-2 mt-4">
                JavaScript
              </button>
              <button className="skills btn btn-outline-dark ms-2 mt-4">
                Bootstrap 5
              </button>
              <button className="skills btn btn-outline-dark ms-2 mt-4">
                ReactJs
              </button>
              <button className="skills btn btn-outline-dark ms-2 mt-4">
                PHP
              </button>
              <button className="skills btn btn-outline-dark ms-2 mt-4">
                Laravel
              </button>
              <button className="skills btn btn-outline-dark mt-4">
                WordPress
              </button>
              <button className="skills btn btn-outline-dark ms-2 mt-4">
                Git
              </button>
              <button className="skills btn btn-outline-dark ms-2 mt-4">
                Figma
              </button>
              <button className="skills btn btn-outline-dark ms-2 mt-4">
                Photoshop
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Phone Responsive */}

      <div className="container-fluid d-block d-sm-none about-mobile">
        <div className="row ">
          <div className="col-12 col-sm-12 mt-5 ms-3 me-5 d-flex justify-content-start">
            <img
              src={ProfilePicture}
              alt="A photo of me"
              className="img-fluid"
              id="profile-mobile"
              style={{
                boxShadow: "0px 0px 5px black",
                borderRadius: "0px 70px 0px 70px",
              }}
            />
          </div>
          <div className="col-12 col-sm-12 ms-4 text-dark profile-section-mobile">
            <span className="display-5 ">
              <p>
                <strong>
                  <span id="myName">myName()</span>.is
                </strong>
              </p>
            </span>
            <p className="display-4">
              <b>
                <i>Kristoffer James B. Bomediano.</i>
              </b>
            </p>
            <p>
              As a web developer, I thrive on navigating through diverse
              technologies with ease. I am able to self-manage on independent
              projects and work effectively in a team.
            </p>
            <p>
              My dedication to continuous learning allows me to stay current
              with industry trends and implement innovative solutions in my
              work.
            </p>

            <div className="col-12 col-sm-12 mt-5">
              <h3>
                <b>Skills:</b>
              </h3>
              <button className="skills btn btn-outline-dark mt-4">HTML</button>
              <button className="skills btn btn-outline-dark ms-2 mt-4">
                CSS
              </button>
              <button className="skills btn btn-outline-dark ms-2 mt-4">
                JavaScript
              </button>
              <button className="skills btn btn-outline-dark mt-4">
                Bootstrap 5
              </button>
              <button className="skills btn btn-outline-dark ms-2 mt-4">
                ReactJs
              </button>
              <button className="skills btn btn-outline-dark ms-2 mt-4">
                PHP
              </button>
              <button className="skills btn btn-outline-dark mt-4">
                Laravel
              </button>
              <button className="skills btn btn-outline-dark ms-2 mt-4">
                WordPress
              </button>
              <button className="skills btn btn-outline-dark ms-2 me-2 mt-4">
                Git
              </button>
              <button className="skills btn btn-outline-dark mt-4">
                Figma
              </button>
              <button className="skills btn btn-outline-dark ms-2 mt-4">
                Photoshop
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
