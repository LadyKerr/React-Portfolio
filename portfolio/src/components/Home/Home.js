import React from "react";
import HeroSection from "../herobanner/HeroSection";
import ProjectList from "../Projects/ProjectList";

class Home extends React.Component {
  render() {
    return (
      <div>
        <HeroSection />
        <ProjectList />
      </div>
    );
  }
}

export default Home;

//render top hero section - done! :D
//render projects here - need styling tweaks :D
//render contact here
//render social icons here
