import React from "react";
import ProfilePicture from "../img/profile_picture.jpeg";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="row mt-3 ">
          <div className="col-lg-4 mt-3 me-5 d-flex justify-content-center">
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
          <div className="col-lg-7 mt-5 pt-5 text-dark">
            <h3 className="mb-5">
              <b>About me:</b>
            </h3>
            <p>
              My name is <b>Kristoffer James B. Bomediano.</b>
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

            <div className="col-lg mt-5">
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
                mySQL
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
