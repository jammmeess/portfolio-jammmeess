import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-custom text-center text-dark fixed-top">
      <div class="container-fluid">
        <a class="navbar-brand mx-4 text-light" href="/">
          Kristoffer James
        </a>
        <button
          class="navbar-toggler "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        ></button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link text-light  ms-2" href="#about">
                About Me
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-light  ms-2" href="#education">
                My Education
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-light  ms-2" href="#experience">
                My Experience
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-light ms-2" href="#projects">
                My Projects
              </a>
            </li>
            <li class=" nav-item">
              <a class="nav-link text-light " href="#contact">
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
