import React from "react";

import Engine from "../img/engine.png";
import OrderXpress from "../img/orderxpress.png";
import Library from "../img/library.png";
import DeCastroConsulting from "../img/DCC.png";
import DeCastroLawFirm from "../img/DCLF.png";

const projectsData = [
  {
    title: "De Castro Law Firm",
    imgSrc: DeCastroLawFirm,
    liveLink: "https://decastroconsulting.ph/law-firm/",
    techStack: "WordPress, Css",
    githubLink: null,
    extraInfo: "Internship | De Castro Consulting",
  },
  {
    title: "De Castro Consulting",
    imgSrc: DeCastroConsulting,
    liveLink: "https://decastroconsulting.ph/",
    techStack: "WordPress, Css",
    githubLink: null,
    extraInfo: "Internship | De Castro Consulting",
  },
  {
    title: "Engine_ Games",
    imgSrc: Engine,
    liveLink: "/",
    techStack: "Laravel, Html, Css, Javascript, PHP, Bootstrap, mySQL",
    githubLink: "https://github.com/jammmeess/Engine",
    extraInfo: "Best Capstone Award | KodeGo Ph",
  },
  {
    title: "OrderXpress",
    imgSrc: OrderXpress,
    liveLink: "https://orderxpress.vercel.app",
    techStack: "ReactJs, Html, Css, Sass, Javascript, Bootstrap",
    githubLink: "https://github.com/caranayjamesmichael/orderxpress",
    extraInfo: "Group Project | KodeGo Ph",
  },
  {
    title: "Library",
    imgSrc: Library,
    liveLink: "https://jammmeess.github.io/library/",
    techStack: "Html, Css, Bootstrap",
    githubLink: "https://github.com/jammmeess/library",
    extraInfo: "First Project | KodeGo Ph",
  },
];

const Projects = () => {
  return (
    <section className="project-section" id="projects">
      <div className="container project py-5">
        <div className="row">
          <div className="col-lg-12">
            <h3 className="display-3 text-light  d-flex justify-content-center">
              <strong>
                my.<span className="text-code ">Projects( )</span>
              </strong>
            </h3>
            <p className="text-secondary d-flex justify-content-center">
              Projects that I have worked on_
            </p>
          </div>
        </div>

        <div className="row mt-5">
          {projectsData.map((project, index) => (
            <div className="col-lg-6" key={index}>
              <article
                className={`postcard dark ${index % 2 === 0 ? "red" : "blue"}`}
              >
                <a
                  className="postcard__img_link"
                  href={project.liveLink}
                  target="_blank"
                >
                  <img
                    className="postcard__img"
                    src={project.imgSrc}
                    alt={project.title}
                  />
                </a>
                <div className="postcard__text">
                  <h1
                    className={`postcard__title ${
                      index % 2 === 0 ? "red" : "green"
                    }`}
                  >
                    <a href={project.liveLink} target="_blank">
                      {project.title}
                    </a>
                  </h1>
                  <div className="postcard__subtitle small">
                    <i className="fas fa-calendar-alt mr-2"></i>
                    {project.techStack}
                  </div>
                  <div className="postcard__bar"></div>
                  <div className="postcard__preview-txt">
                    {project.githubLink && (
                      <p>
                        Git Repository:{" "}
                        <a href={project.githubLink} target="_blank">
                          <i>{project.title}</i>
                        </a>
                      </p>
                    )}
                    {project.extraInfo && (
                      <ul className="postcard__tagbox">
                        <li className="tag__item">
                          <i className="fas fa-tag mr-2"></i>
                          {project.extraInfo}
                        </li>
                      </ul>
                    )}
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
