import React from "react";

import "./../style/HomePage.css";
import Hero from "./HomeHero";
import Navbar from "./Navbar";
import Features from "./HomeFeatures";

const HomePage = () => {
  return (
    <React.Fragment>
      <section>
        <>
          <div className="wrapper">
            <Navbar />
            <Hero />
            <Features />
          </div>
        </>
      </section>
    </React.Fragment>
  );
};

export default HomePage;
