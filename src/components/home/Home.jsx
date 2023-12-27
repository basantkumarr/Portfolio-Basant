import React from "react";
import "./Home.css";
import Socil from "./Socil";
import Data from "./Data";
import Scroll from "./Scroll";
const Home = () => {
  return (
    <div>
      <section id="home" className="home section">
        <div className="home_container container  "></div>
        <div className="home_content grid">
          <div className="home_social">
            <Socil></Socil>
          </div>
          <div className="home_img"></div>
          <div className="home_data"> <Data></Data></div>
        </div>
        
      </section>
      <div className="home_scroll">
          <Scroll></Scroll>
        </div>
    </div>
  );
};

export default Home;
