import React from "react";
import { Link } from "react-router-dom";
import "../styles/HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Find Your Dream Hotel</h1>
        <p>Explore hotels from various affiliates in one place.</p>
        <div className="hero-buttons">
          <Link to="/register-referrer">Register Referrer</Link>
          <Link to="/api-explorer">Explore API</Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
