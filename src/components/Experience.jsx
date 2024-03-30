import React from "react";

const Experience = () => {
  return (
    <section id="experience">
      <div className="container-fluid d-none d-sm-block text-dark experience-section">
        <div className="row ">
          <div className="col-lg-5 pb-5 experiencetitle-section">
            <h3 className="ps-5 pt-5 mt-5 text-light display-5">
              <strong>
                work.<span className="text-warning">experiences( )</span>
              </strong>
            </h3>
            <p className="text-secondary ps-5">my previous work experiences_</p>
          </div>
          <div className="col-lg-6 work-section">
            <div className="col-lg-12 pb-3 text-light">
              <h4 className="pb-2">
                <strong className="text-warning">
                  .decastro-consulting ({" "}
                </strong>
              </h4>
              <h5>Web Developer Intern;</h5>
              <p>January 2024 - April 2024; </p>
              <span>
                <strong className="text-warning">)</strong>
              </span>
            </div>
            <div className="col-lg-12 pb-3 text-light">
              <h4 className="pb-2">
                <strong className="text-warning">.costa-cruises ( </strong>
              </h4>
              <h5>Demi Chef De Partie;</h5>
              <p>March 2018 - March 2023; </p>
              <span>
                <strong className="text-warning">)</strong>
              </span>
            </div>
            <div className="col-lg-12 pb-3 text-light">
              <h4 className="pb-2">
                <strong className="text-warning">.ibizabeachclub-bgc ( </strong>
              </h4>
              <h5>Commis Chef;</h5>
              <p>February 2017 - October 2017 ; </p>
              <span>
                <strong className="text-warning">)</strong>
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Phone Responsive */}

      <div className="container-fluid d-block d-sm-none text-dark experiencemobile-section">
        <div className="col-12 col-sm-12 ps-2 experiencetitlemobile-section">
          <h3 className="text-light display-5 ps-3">
            <strong>
              work.<span className="text-code">experience( )</span>
            </strong>
          </h3>
          <p className="text-secondary ps-3 pb-4">
            my previous work experience_
          </p>
        </div>
        <div className="col-12 workmobile-section">
          <div className="col-12 pb-4 text-light">
            <h4 className="pb-2">
              <strong className="text-warning">.decastro-consulting ( </strong>
            </h4>
            <h5>Web Developer Intern;</h5>
            <p>January 2024 - April 2024; </p>
            <span>
              <strong className="text-warning">)</strong>
            </span>
          </div>
          <div className="col-12 pb-4 text-light">
            <h4 className="pb-2">
              <strong className="text-warning">.costa-cruises ( </strong>
            </h4>
            <h5>Demi Chef De Partie;</h5>
            <p>March 2018 - March 2023; </p>
            <span>
              <strong className="text-warning">)</strong>
            </span>
          </div>
          <div className="col-12 text-light">
            <h4 className="pb-2">
              <strong className="text-warning">.ibizabeachclub-bgc ( </strong>
            </h4>
            <h5>Commis Chef;</h5>
            <p>February 2017 - October 2017 ; </p>
            <span>
              <strong className="text-warning">)</strong>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
