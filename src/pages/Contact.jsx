import React from "react";
import "../assets/css/contact.css";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import TWK1 from '../assets/Images/TWK1.png'


function Contact() {
  return (
    <div>
      <div className="contactHead">
        <h3 className="letsTalkTexth3 gradientText">Lets Talk </h3>
        <h1 className="letsTalkText gradientText">About Your Next Project</h1>
      </div>

       <div className="formImage">
         <img className="formImageAlignment" src={TWK1} alt='/'/>
      </div>
      <div className="contactForm">
        <form>
          <input type="text"  required placeholder="Name" />
          <br/>

          <input type="email"  required placeholder="Email"/>
          <br/>

          <input type="text"  required placeholder="Number"/>
          <br/>

          <input type="text"  required placeholder="Company"/>
          <br/>
          <textarea class="" name="message" required placeholder="Message"></textarea>
          <button className=' letsConnectButton buttonColor '> <h3>Send</h3> </button>



          
        </form>
        <div className="details">

           <h3>City</h3>
           <h3>Number</h3>
           <h3>Email</h3>
            <hr />
            <ul className="contactLi">
              <li className="contactIconLi">
                <FaInstagram size={30} />
              </li>
              <li className="contactIconLi">
                <FaFacebook size={30} />
              </li>
              <li className="contactIconLi">
                <FaTwitter size={30} />
              </li>
            </ul>
            <hr />
        </div>
      </div>

    </div>
  );
}

export default Contact;
