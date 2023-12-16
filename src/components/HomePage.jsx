import React from "react";

import "./../style/HomePage.css";
import Hero from "./HomeHero";
import Navbar from "./Navbar";
import Features from "./HomeFeatures";
import About from "./HomeAbout";

const HomePage = () => {
  return (
    <React.Fragment>
      <section>
        <>
          <div className="wrapper">
            <Navbar />
            <Hero />
            <Features />
            <About />
          </div>
        </>
      </section>
    </React.Fragment>
  );
};

export default HomePage;
