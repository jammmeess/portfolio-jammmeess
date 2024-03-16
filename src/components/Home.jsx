import React from "react";

import Navbar from "./Navbar";
import About from "./About";
import Hero from "./Hero";
import Experience from "./Experience";
import Contact from "./Contact";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <main>
        <Hero />
        <About />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Home;
