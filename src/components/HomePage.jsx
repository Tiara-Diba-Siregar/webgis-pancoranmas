import React from "react";

import "./../style/HomePage.css";
import Hero from "./HomeHero";
import Navbar from "./Navbar";
import Features from "./HomeFeatures";
import About from "./HomeAbout";
import Footer from "./HomeFooter";
import News from "./HomeNews";

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
            <News />
            <Footer />
          </div>
        </>
      </section>
    </React.Fragment>
  );
};

export default HomePage;
