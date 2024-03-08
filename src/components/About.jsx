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
            />
          </div>
          <div className="col-lg-7 mt-5 pt-5 text-dark">
            <h3>About me</h3>
            <p>
              My name is <b>Kristoffer James B. Bomediano.</b>
            </p>
            <p>
              As a web developer, I thrive on navigating through diverse
              technologies with ease.
            </p>
            <p>
              I am able to self-manage on independent projects and work
              effectively in a team.
            </p>
            <p>
              My dedication to continuous learning allows me to stay current
              with industry trends and implement innovative solutions in my
              work.
            </p>
            <a href="/contact">
              <button className="btn btn-outline-dark mt-5">Contact Me</button>
            </a>
            <a href="/projects">
              <button className="btn btn-outline-dark ms-3 mt-5">
                Check out my projects
              </button>
            </a>
          </div>
          <div className="col-lg-7">
            <h3>Skills</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
