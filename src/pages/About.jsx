import React from 'react'
// import React, { useState, useEffect, useRef } from 'react'
import "../assets/css/aboutPage.css";
import TWK from "../assets/Images/TWK5.png";
// import Halo from 'vanta/dist/vanta.waves.min.js'


function About() {

  // const [vantaEffect, setVantaEffect] = useState(null)
  
  // const myRef = useRef(null)
  // useEffect(() => {
  //   if (!vantaEffect) {
  //     setVantaEffect(Halo({
  //       el: myRef.current,
  //       mouseControls: true,
  //       touchControls: true,
  //       gyroControls: false,
  //       minHeight: 200.00,
  //       minWidth: 200.00,
  //       scale: 1.00,
  //       scaleMobile: 1.00,
  //       color: 'rgb(0, 0, 0)',
  //       shininess: 50.00,
  // waveHeight: 22.00,
  // waveSpeed: 0.60,
  // zoom: 1.10

  //     }))
  //   }
  //   return () => {
  //     if (vantaEffect) vantaEffect.destroy()
  //   }
  // }, [vantaEffect])


  return (
    <div >
    {/* <div className="aboutVanta" /*ref={myRef}/> */}
      <div className="contactHead">
        <h1 className="  aboutLetsTalkText gradientText">
          "Dignity does not consist in possessing honors, but in the
          consciousness that we deserve them."
        </h1>
      </div>
      {/* </div> */}
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
