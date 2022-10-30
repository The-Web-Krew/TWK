import React from "react";
import "../assets/css/tech.css";
import TWK3 from '../assets/Images/TWK3.png'
import L1 from '../assets/Images/Logos/L1.png'
import L2 from '../assets/Images/Logos/L2.png'
import L3 from '../assets/Images/Logos/L3.png'
import L4 from '../assets/Images/Logos/L4.png'
import L5 from '../assets/Images/Logos/L5.png'
import L6 from '../assets/Images/Logos/L6.png'
import L7 from '../assets/Images/Logos/L7.png'
import L8 from '../assets/Images/Logos/L8.png'


function Tech() {
  return (
    <section>
    <h1  className="aboutText gradientText">Tech We Use</h1>
    <div  className="techWeUse">
          <div></div>

      <div className='imageCenter'>
      <img   className="TWK3" src={TWK3} alt='/' />
      </div>
      <div  className="tech">
        <div
           className="card"
          data-tilt
          
        >
        <img  src={L8} alt='/' /> 
        </div>

        <div
           className="card"
          data-tilt
          
        >
                  <img  src={L3} alt='/' /> 

        </div>
        <div
           className="card"
          data-tilt
          
        >
                  <img  src={L5} alt='/' /> 

        </div>
        <div
           className="card"
          data-tilt
          
        >
                  <img  src={L4} alt='/' /> 

        </div>

        <div
           className="card"
          data-tilt
          
        >
                  <img  src={L2} alt='/' /> 

        </div>
        <div
           className="card"
          data-tilt
          
        >
                  <img  src={L6} alt='/' /> 

        </div>
        <div
           className="card"
          data-tilt
          
        >
                  <img  src={L7} alt='/' /> 

        </div>
        <div
           className="card"
          data-tilt
          
        >
                  <img  src={L1} alt='/' /> 

        </div>
      </div>
    </div>
    </section>
  );
}

export default Tech;
