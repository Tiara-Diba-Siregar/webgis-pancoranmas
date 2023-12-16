import React from "react";

import "./../style/HomePage.css";
import Hero from "./HomeHero";
import Navbar from "./Navbar";
import Features from "./HomeFeatures";
import About from "./HomeAbout";
import Footer from "./HomeFooter";

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
            <Footer />
          </div>
        </>
      </section>
    </React.Fragment>
  );
};

export default HomePage;
