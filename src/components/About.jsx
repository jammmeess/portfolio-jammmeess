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
          <div className="col-lg-7 ms-4 pt-5 mt-3 text-light">
            <span className="display-5 ">
              <p>
                <strong>
                  myName<span className="text-warning">.is( )</span>
                </strong>
              </p>
            </span>
            <p className="display-6 pb-2">
              <b>
                <i>Kristoffer James Bomediano</i>
              </b>
            </p>
            <p>
              I am a front-end web developer based in the Philippines. I really
              enjoy working in web development, especially when it comes to
              exploring different technologies. I find it easy to manage my own
              projects and love collaborating with others as part of a team.
            </p>
            <p className="text-light ">
              I'm always eager to learn and stay updated with the latest
              industry trends. This helps me bring fresh and innovative
              solutions to my work, keeping things exciting and effective.
            </p>

            <div className="col-lg-12 pt-5 mt-3">
              <h3>
                <b className="text-dark">Skills:</b>
              </h3>
              <button className="skills btn btn-outline-dark ms-2 mt-4">
                HTML
              </button>
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
              <button className="skills btn btn-outline-dark ms-2 mt-4">
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
          <div className="col-12 mt-5 ps-3 pe-5 d-flex justify-content-start">
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
          <div className="col-12 col-sm-12 ps-4 profile-section-mobile">
            <span className="display-5 ">
              <p>
                <strong>
                  myName<span className="text-warning">.is()</span>
                </strong>
              </p>
            </span>
            <p className="display-6">
              <b>
                <i>Kristoffer James Bomediano</i>
              </b>
            </p>
            <p>
              I am a web developer based on the Philippines. I really enjoy
              working in web development, especially when it comes to exploring
              different technologies. I find it easy to manage my own projects
              and love collaborating with others as part of a team.
            </p>
            <p>
              I'm always eager to learn and stay updated with the latest
              industry trends. This helps me bring fresh and innovative
              solutions to my work, keeping things exciting and effective.
            </p>

            <div className="col-12 col-sm-12 mt-5">
              <h3>
                <b>Skills:</b>
              </h3>
              <button className="skills btn btn-outline-dark ms-2 mt-4">
                HTML
              </button>
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
              <button className="skills btn btn-outline-dark ms-2 mt-4">
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
    </section>
  );
};

export default About;
