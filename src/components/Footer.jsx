import React, { useRef } from "react";
import '../assets/css/footer.css';
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { FiSend } from "react-icons/fi";

import {Link} from 'react-router-dom'
import emailjs from "@emailjs/browser";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

function Footer() {
  
  const formMail = useRef();
  const MySwal = withReactContent(Swal);

  const sendFooterEmail = (e) => {
    e.preventDefault();
    // console.log("Function");
    // console.log(form.curret);

    emailjs
      .sendForm(
        "service_9aifya2", //Service ID
        "template_vnx5owl", //template ID
        formMail.current,
        "WMpQ1QLYiSWNFNJ0Y" //API
      )
      .then(
        (result) => {
          // console.log(result.text);
          // console.log("yes");

          MySwal.fire({
            title: <strong style={{color:'#000000'}}>Email Send</strong>,
            html: <i  style={{color:'#000000'}} >Our Team will React to you soon!</i>,
            icon: "success",
          });


        },
        (error) => {
          // console.log(error.text);
          // console.log("No");
          
          MySwal.fire({
            title: <strong style={{color:'#000000'}}>Error</strong>,
            html: <i  style={{color:'#000000'}} >There is some problem sending Email!</i>,
            icon: "error",
          });
        }
      );
  };
  


  return (
    
    <footer>
        
        <div className="footer-div">
  
          
          <div className="sectionOne" >
            <h1>HEAD</h1>
            <p>
              Letraset sheets containing Lorem Ipsum passages, and more recently
              with desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum
            </p>
  
            <h3>Follow Us</h3>
            
  
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
          </div>
  
          <div className="sectionTwo">
            <h1>Nav Links</h1>
            <div className="navLinks">
            <div>
            <li className='navbarLinkFooters' >
        <Link to="/">Home</Link>
        </li>
        <li className='navbarLinkFooters' >
        <Link to="/about">About</Link>
        </li>
        <li className='navbarLinkFooters' >
        <Link to="/contact">Contact</Link>
        </li>
          </div>
     
          </div>
          </div>
          
  
          <div className="sectionThree">
            <h1>Contact</h1>
            <p>
              and more recently with desktop publishing software like Aldus
              PageMaker including versions of Lorem Ipsum.
            </p>
  
            <div className="input-form">                           
              <form ref={formMail} className="form">
                  <input type="text" className="input" name="from_footer_mail" placeholder="Enter Email Address" />
                  <button className="sendButton" type="button" onClick={sendFooterEmail}><FiSend size={20}/></button>
              </form>
          </div>
  
          
          
          </div>
        </div>
      </footer>

  )
}

export default Footer