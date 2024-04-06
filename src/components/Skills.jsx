import React from "react";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "Bootstrap 5",
  "ReactJs",
  "PHP",
  "Laravel",
  "WordPress",
  "Git",
  "Figma",
  "Photoshop",
];

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <div className="container-fluid d-none d-sm-block d-xl-none">
        <div className="row my-5 ps-5">
          <div className="col-lg-5"></div>
          <div className="col-lg-7  ">
            <h3>
              <b className="text-dark">Skills:</b>
            </h3>
            {skills.map((skill, index) => (
              <buttom
                key={index}
                className="Skills btn btn-outline-dark ms-2 mt-4"
              >
                {skill}
              </buttom>
            ))}
          </div>
        </div>
      </div>

      {/* Extra Large Responsive */}
      <div className="container d-none d-xl-block">
        <div className="row my-5">
          <div className="col-lg-4"></div>
          <div className="col-lg-7 ms-5 ps-5 ">
            <h3>
              <b className="text-dark">Skills:</b>
            </h3>
            {skills.map((skill, index) => (
              <buttom
                key={index}
                className="Skills btn btn-outline-dark ms-2 mt-4"
              >
                {skill}
              </buttom>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default Skills;
