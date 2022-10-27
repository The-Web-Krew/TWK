import React from "react";
import "../assets/css/about.css";

function About() {
  return (
    <>
    <section>
      <div className="about">
        <h3 className="aboutTest ">About Us</h3>

        <h1 className="aboutTest gradientText">
          We are a Digital
          <br />
          Design & Development Agency
        </h1>

        <div className="ourServices">
          <div className="ourService">
            <div className="serviceCard">
              <div>LOGO</div>
              <div> <h1>Tital</h1><h3>Two Words</h3></div>

            </div>
            <div className="serviceCard"></div>
          </div>

          <div className="ourService">
            <div className="serviceCard"></div>
            <div className="serviceCard"></div>
          </div>  
        </div>

      </div>
    </section>  
    </>
  );
}

export default About;
