import React from "react";
import "./herobanner.css";

const HeroSection = () => {
  return (
    <>
      <section className="hero-top-banner">
        <div className="hero-top">
          <h1 className="name">Kedasha Kerr </h1>
          <p>Full-Stack JavaScript Developer : ReactJs | NodeJs | ExpressJs</p>
          <hr />
        </div>
        <div className="hero-top-image">
          <img src="developer.png" alt="woman developer" />
        </div>
      </section>
    </>
  );
};

export default HeroSection;
