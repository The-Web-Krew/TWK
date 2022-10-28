import React from "react";
import "../assets/css/tech.css";
import TWK3 from '../assets/Images/TWK3.png'

function Tech() {
  return (
    <section>
    <h1 className="aboutText gradientText">Tech We Use</h1>
    <div className="techWeUse">
          <div></div>

      <div>
      <img  className="TWK3" src={TWK3} alt='/' />
      </div>
      <div className="tech">
        <div
          class="card"
          data-tilt
          data-tilt-scale="0.95"
          data-tilt-startY="40"
        ></div>

        <div
          class="card"
          data-tilt
          data-tilt-scale="0.95"
          data-tilt-startY="40"
        ></div>
        <div
          class="card"
          data-tilt
          data-tilt-scale="0.95"
          data-tilt-startY="40"
        ></div>
        <div
          class="card"
          data-tilt
          data-tilt-scale="0.95"
          data-tilt-startY="40"
        ></div>

        <div
          class="card"
          data-tilt
          data-tilt-scale="0.95"
          data-tilt-startY="40"
        ></div>
        <div
          class="card"
          data-tilt
          data-tilt-scale="0.95"
          data-tilt-startY="40"
        ></div>
        <div
          class="card"
          data-tilt
          data-tilt-scale="0.95"
          data-tilt-startY="40"
        ></div>
        <div
          class="card"
          data-tilt
          data-tilt-scale="0.95"
          data-tilt-startY="40"
        ></div>
      </div>
    </div>
    </section>
  );
}

export default Tech;
