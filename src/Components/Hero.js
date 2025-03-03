import React from "react";
import HeroImg from "../assests/images/Memoji/Thumbs-up.png";
import myCV from "../assests/PDF/Ajayi Daniel(CV).pdf";

const Hero = () => {
  return (
    <div className="Hero-section container">
      <div className="card">
        <div className="card-content">
          <div className="main">
            <div className="main-img">
              <img
                src={HeroImg}
                alt="memoji"
              />
            </div>

            <div className="Header">
              <h3>Hello, I'm Daniel.🦾</h3>
              <h1>
                I develop <span>ideas</span> and help build a better world
                through software.
              </h1>
            </div>
          </div>

          <div className="btns">
            <div className="hero-contact">
              <button>Contact</button>
            </div>

            <div className="CV">
              <button>
                <a href={myCV}>Download CV</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
