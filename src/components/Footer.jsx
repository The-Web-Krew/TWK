import React from 'react';
import '../assets/css/footer.css';
import {FiSend} from 'react-icons/fi';
function Footer() {
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
            
  
            <li className="icon" > <i className="fab fa-twitter"></i></li>
            <li className="icon" > <i className="fab fa-instagram"></i></li>
            <li className="icon" > <i className="fab fa-linkedin"></i></li>
  
          </div>
  
          <div className="sectionTwo">
            <h1>Nav Links</h1>
            <div className="navLinks">
            <div>
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
            <li>Four</li>
          </div>
          <div>
              <li>One</li>
              <li>Two</li>
              <li>Three</li>
              <li>Four</li>
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
              <form action="#" className="form">
                  <input type="text" className="input" placeholder="Enter Email Address" />
                 
                  <button type="button"><FiSend size={20}/></button>
              </form>
          </div>
  
          
          
          </div>
        </div>
      </footer>

  )
}

export default Footer