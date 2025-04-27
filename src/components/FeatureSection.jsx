import React from "react";
import "../styles/FeatureSection.css";

const FeatureSection = () => {
  return (
    <section className="features">
      <h2>Why Use Our Service?</h2>
      <div className="features-grid">
        <div className="feature-box">
          <h3>Easy Integration</h3>
          <p>Just plug in our API and start showing hotel listings.</p>
        </div>
        <div className="feature-box">
          <h3>Multiple Sources</h3>
          <p>Aggregate data from different providers seamlessly.</p>
        </div>
        <div className="feature-box">
          <h3>High Conversion</h3>
          <p>Earn more through affiliate links and track user behavior.</p>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
