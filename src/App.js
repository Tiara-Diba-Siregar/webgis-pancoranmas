import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Map from "./pages/Map";
import NotFound from "./pages/NotFound";
import School from "./pages/Schools";

import "./App.css";
import Features from "./components/HomeFeatures";
import About from "./components/HomeAbout";
import Footer from "./components/HomeFooter";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<Map />} />
        <Route path="/schools" element={<School />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/features" element={<Features />} />
        <Route path="/about" element={<About />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </Router>
  );
};

export default App;
