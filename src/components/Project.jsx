import React, { useEffect } from "react";

import Engine from "../img/engine.png";
import OrderXpress from "../img/orderxpress.png";
import Library from "../img/library.png";

const Projects = () => {
  useEffect(() => {
    // Remove scrollbar when component mounts
    document.body.style.overflow = "hidden";

    return () => {
      // Restore scrollbar when component unmounts
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <section className="project-section" id="projects">
      <div className="container project py-5">
        <div className="row">
          <div className="col-lg-12">
            <h3 className="display-5 text-light">
              my.<span className="text-warning mb-5">Projects( )</span>
            </h3>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-lg-12">
            {/* Engine_ Games */}
            <article class="postcard dark blue">
              <a class="postcard__img_link" href="#">
                <img class="postcard__img" src={Engine} alt="Engine_ Games" />
              </a>
              <div class="postcard__text">
                <h1 class="postcard__title blue">
                  <a href="#">Engine_ Games</a>
                </h1>
                <div class="postcard__subtitle small">
                  <i class="fas fa-calendar-alt mr-2"></i>Laravel, Html, Css,
                  Javascript, PHP, Bootstrap, mySQL
                </div>
                <div class="postcard__bar"></div>
                <div class="postcard__preview-txt">
                  <p>
                    Live Link: <a href="/">Engine_ Games</a>
                  </p>
                  <p>
                    <a href="https://github.com/jammmeess/Engine">
                      <i>Github | Engine_ Games</i>
                    </a>
                  </p>
                </div>
                <ul class="postcard__tagbox">
                  <li class="tag__item">
                    <i class="fas fa-tag mr-2"></i>Best Capstone Award
                  </li>
                </ul>
              </div>
            </article>

            {/* OrderXpress */}
            <article class="postcard dark red">
              <a class="postcard__img_link" href="#">
                <img
                  class="postcard__img"
                  src={OrderXpress}
                  alt="OrderXpress"
                />
              </a>
              <div class="postcard__text">
                <h1 class="postcard__title red">
                  <a href="#">OrderXpress</a>
                </h1>
                <div class="postcard__subtitle small">
                  <i class="fas fa-calendar-alt mr-2"></i>ReactJs, Html, Css,
                  Sass, Javascript, Bootstrap
                </div>
                <div class="postcard__bar"></div>
                <div class="postcard__preview-txt">
                  <p>
                    Live Link:{" "}
                    <a href="orderxpress.vercel.app">
                      <i>OrderXpress</i>
                    </a>
                  </p>

                  <p>
                    Git Repository:{" "}
                    <a href="https://github.com/caranayjamesmichael/orderxpress">
                      <i>Github | OrderXpress</i>
                    </a>
                  </p>
                </div>
              </div>
            </article>

            {/* Library */}
            <article class="postcard dark green">
              <a class="postcard__img_link" href="#">
                <img class="postcard__img" src={Library} alt="Library" />
              </a>
              <div class="postcard__text">
                <h1 class="postcard__title green">
                  <a href="#">Library</a>
                </h1>
                <div class="postcard__subtitle small">
                  <i class="fas fa-calendar-alt mr-2"></i>Html, Css, Javascript
                </div>
                <div class="postcard__bar"></div>
                <div class="postcard__preview-txt">
                  <p>
                    Live Link:{" "}
                    <a href=" https://jammmeess.github.io/library/">
                      <i>Library</i>
                    </a>
                  </p>

                  <p>
                    Git Repository:{" "}
                    <a href="https://github.com/jammmeess/library">
                      <i>Github | Library</i>
                    </a>
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
