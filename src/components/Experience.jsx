import React from "react";

const Experience = () => {
  return (
    <section id="experience">
      <div class="container-fluid d-none d-sm-block text-dark experience-section">
        <div className="row ">
          <div class="col-lg-5 pb-5 experiencetitle-section">
            <h3 class="ps-5 pt-5 mt-5 text-light display-5">
              work.<span className="text-warning">experience( )</span>
            </h3>
            <p className="text-secondary ps-5">my previous work experience_</p>
          </div>
          <div className="col-lg-6 work-section">
            <div class="col-lg-12 pb-5 text-light">
              <h4>De Castro Consulting</h4>
              <h5>Web Developer Intern</h5>
              <p>January 2024 - April 2024</p>
            </div>
            <div class="col-lg-12 pb-5 text-light">
              <h4>Costa Cruises</h4>
              <h5>Demi Chef De Partie</h5>
              <p>March 2018- March 2023</p>
            </div>
            <div class="col-lg-12 pb-5 text-light">
              <h4>Ibiza Beach Club BGC</h4>
              <h5>Commis Chef</h5>
              <p>February 2017-October 2017</p>
            </div>
          </div>
        </div>
      </div>
      {/* Phone Responsive */}

      <div class="container-fluid d-block d-sm-none text-dark experiencemobile-section">
        <div class="col-12 col-sm-12 ps-2 experiencetitlemobile-section">
          <h3 class="text-light display-5 ps-3">
            work.<span className="text-warning">experience( )</span>
          </h3>
          <p className="text-secondary ps-3 pb-4">
            my previous work experience_
          </p>
        </div>
        <div className="col-12 workmobile-section">
          <div class="col-12 pb-4 text-light">
            <h4>De Castro Consulting</h4>
            <h5>Web Developer Intern</h5>
            <p>January 2024 - April 2024</p>
          </div>
          <div class="col-12 pb-4 text-light">
            <h4>Costa Cruises</h4>
            <h5>Demi Chef De Partie</h5>
            <p>March 2018- March 2023</p>
          </div>
          <div class="col-12 pb-4 text-light">
            <h4>Ibiza Beach Club BGC</h4>
            <h5>Commis Chef</h5>
            <p>February 2017-October 2017</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
