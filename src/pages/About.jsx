import React from "react";
import "../assets/css/aboutPage.css";
import TWK from "../assets/Images/TWK5.png";

function About() {
  return (
    <div>
      <div className="contactHead">
        <h1 className="  aboutLetsTalkText gradientText">
          "Dignity does not consist in possessing honors, but in the
          consciousness that we deserve them."
        </h1>
      </div>

      <div className="developmentProcess">
        <div className="developmentProcessImage">
          <img src={TWK} alt="/" />
        </div>
        <div className="developmentProcessDetails">
          <h1>Development process</h1>
          <h5>
            TWK team is composed of Graphic Designers and Full Stack developers.
            Our creative Team members take the highest level of pride in their
            work.
          </h5>

          <ul>
            <li>
              <h3> Front-End Web Development</h3>
            </li>
            <li>
              <h3> Back-End Web Development</h3>
            </li>
            <li>
              <h3> Search Engine Optimization</h3>
            </li>
          </ul>
        </div>
      </div>


      <section className="developmentProcess  developerSection">
        <div className="developmentProcessImage">
          <img src={TWK} alt="/" />
        </div>
        <div className="developmentProcessDetails">
          <h1>Development process</h1>
          <h5>
            TWK team is composed of Graphic Designers and Full Stack developers.
            Our creative Team members take the highest level of pride in their
            work.
          </h5>
        </div>
      </section>

      <section className="developmentProcess  developerSection">
        <div className="developmentProcessDetails">
          <h1>Development process</h1>
          <h5>
            TWK team is composed of Graphic Designers and Full Stack developers.
            Our creative Team members take the highest level of pride in their
            work.
          </h5>
        </div>
        <div className="developmentProcessImage">
          <img src={TWK} alt="/" />
        </div>
      </section>

      <section className="developmentProcess developerSection">
        <div className="developmentProcessImage">
          <img src={TWK} alt="/" />
        </div>
        <div className="developmentProcessDetails">
          <h1>Development process</h1>
          <h5>
            TWK team is composed of Graphic Designers and Full Stack developers.
            Our creative Team members take the highest level of pride in their
            work.
          </h5>
        </div>
      </section>

      
    </div>
  );
}

export default About;
