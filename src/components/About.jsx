import React from "react";
import "../assets/css/about.css";
import {RiPaintFill,RiComputerFill} from 'react-icons/ri'
import {AiFillBook, AiFillMobile} from 'react-icons/ai'


function About() {
  return (
    <>
    <section>
      <div className="about">
        <h3 className="aboutTest ">About Us</h3>

        <h1 className="aboutTest gradientText ">
          We are a Digital
          <br />
          Design & Development Agency
        </h1>

        <div className="ourServices">
          <div className="ourService">
      
            <div className="serviceCard">
              <div className="heroIcon" ><RiComputerFill  size={50} /> </div>
              <div> <h1>Web Design & Development</h1><h3>Our team will assist you in designing and developing your website tailored to your unique business goals.</h3></div>

            </div>
            <div className="serviceCard ">
              <div className="heroIcon" ><RiPaintFill  size={50} /></div>
              <div> <h1>Digital Marketing</h1><h3>Help you grow digitally by branding your website through google SEO scripts.</h3></div>

            </div>          </div>

          <div className="ourService">
          <div className="serviceCard">
              <div className="heroIcon" ><AiFillBook   size={50}/></div>
              <div> <h1>Branding & Creative</h1><h3>Looking up for digital growth and creating a niche for your brand.</h3></div>

            </div>   
            <div className="serviceCard">
              <div className="heroIcon" ><AiFillMobile  size={50}/></div>
              <div> <h1>Application Development</h1><h3>Turning your vision into a viable mobile application & native apps for IOS and Android.</h3></div>

            </div>
          </div>  
        </div>

      </div>
    </section>  
    </>
  );
}

export default About;
