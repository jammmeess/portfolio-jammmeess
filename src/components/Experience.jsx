import React from "react";

const Experience = () => {
  return (
    <section className="experience-section" id="experience">
      <div className="container d-none d-sm-block  d-xl-none text-dark  ">
        <div className="row">
          <div className="col-lg-6"></div>
          <div className="col-lg-6 mb-3 work-section">
            <h3 className="text-code">.DeCastro-Consulting( </h3>
            <h4 className="text-light">Web Developer Intern;</h4>
            <h4 className="text-light">January 2024- Present;</h4>
            <h3 className="text-code">)</h3>
          </div>
          <div className="col-lg-6 pt-5">
            <h3 className="text-light display-5">
              work.<span className="text-code">Experiences ( )</span>
            </h3>
            <p className="text-secondary"> My Previous Work Experiences_</p>
          </div>
          <div className="col-lg-6 mb-3 work-section">
            <h3 className="text-code">.Costa-Cruises( </h3>
            <h4 className="text-light">Demi Chef De Partie;</h4>
            <h4 className="text-light">March 2018- March 2023;</h4>
            <h3 className="text-code">)</h3>
          </div>
          <div className="col-lg-6"></div>
          <div className="col-lg-6 mb-3 work-section">
            <h3 className="text-code">.IbizaBeach-Club( </h3>
            <h4 className="text-light">Commis Chef;</h4>
            <h4 className="text-light">February 2017 - October 2017;</h4>
            <h3 className="text-code">)</h3>
          </div>
        </div>
      </div>

      {/* Phone Responsive */}

      <div className="container d-block d-sm-none text-dark experiencemobile-section">
        <div className="row">
          <div className="col-lg-6 my-2">
            <h3 className="text-light mt-5 display-3 d-flex justify-content-center">
              <b>
                work.<span className="text-code">Experiences ( )</span>
              </b>
            </h3>
            <p className="text-secondary d-flex justify-content-center">
              {" "}
              My Previous Work Experiences_
            </p>
          </div>
          <div className="col-lg-6 ms-5 work-section">
            <h3 className="text-code">.DeCastro-Consulting( </h3>
            <h5 className="text-light">Web Developer Intern;</h5>
            <h5 className="text-light">January 2024- Present;</h5>
            <h3 className="text-code">)</h3>
          </div>
          <div className="col-lg-6  ms-5  work-section">
            <h3 className="text-code">.Costa-Cruises( </h3>
            <h5 className="text-light">Demi Chef De Partie;</h5>
            <h5 className="text-light">March 2018- March 2023;</h5>
            <h3 className="text-code">)</h3>
          </div>
          <div className="col-lg-6 ms-5  work-section">
            <h3 className="text-code">.IbizaBeach-Club( </h3>
            <h5 className="text-light">Commis Chef;</h5>
            <h5 className="text-light">February 2017 - October 2017;</h5>
            <h3 className="text-code">)</h3>
          </div>
        </div>
      </div>

      {/* Extra Large Responsive */}
      <div className="container d-none d-xl-block  text-dark experience-sectionLarge  ">
        <div className="row">
          <div className="col-lg-6"></div>
          <div className="col-lg-6 mb-3 work-section">
            <h3 className="text-code">.DeCastro-Consulting( </h3>
            <h4 className="text-light">Web Developer Intern;</h4>
            <h4 className="text-light">January 2024- Present;</h4>
            <h3 className="text-code">)</h3>
          </div>
          <div className="col-lg-6 pt-5 ">
            <h3 className="text-light display-5 d-flex justify-content-end">
              work.<span className="text-code">Experiences ( )</span>
            </h3>
            <p className="text-secondary d-flex justify-content-center ms-3">
              {" "}
              My Previous Work Experiences_
            </p>
          </div>
          <div className="col-lg-6 mb-3 work-section">
            <h3 className="text-code">.Costa-Cruises( </h3>
            <h4 className="text-light">Demi Chef De Partie;</h4>
            <h4 className="text-light">March 2018- March 2023;</h4>
            <h3 className="text-code">)</h3>
          </div>
          <div className="col-lg-6"></div>
          <div className="col-lg-6 mb-3 work-section">
            <h3 className="text-code">.IbizaBeach-Club( </h3>
            <h4 className="text-light">Commis Chef;</h4>
            <h4 className="text-light">February 2017 - October 2017;</h4>
            <h3 className="text-code">)</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
