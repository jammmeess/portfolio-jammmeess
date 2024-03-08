import React from "react";

const Navbar = () => {
  document.onreadystatechange = function () {
    let lastScrollPosition = 0;
    const navbar = document.querySelector(".navbar");
    window.addEventListener("scroll", function (e) {
      lastScrollPosition = window.scrollY;

      if (lastScrollPosition > 100) navbar.classList.add("navbar-dark");
      else navbar.classList.remove("navbar-dark");
    });
  };

  return (
    <nav
      className="navbar fixed-top navbar-expand-lg navbar-dark text-white"
      id="nav"
    >
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
