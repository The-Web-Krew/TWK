import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../assets/css/contact.css";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import TWK1 from "../assets/Images/TWK1.png";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

function Contact() {
  const form = useRef();
  const MySwal = withReactContent(Swal);

  const sendEmail = (e) => {
    e.preventDefault();
    // console.log("Function");
    // console.log(form.curret);

    emailjs
      .sendForm(
        "service_yi5tea8",
        "template_c46qf67",
        form.current,
        "RJSErRSyoZcY2qXBM"
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
    <div>
      <div className="contactHead">
        <h3 className="letsTalkTexth3 gradientText">Lets Talk </h3>
        <h1 className="letsTalkText gradientText">About Your Next Project</h1>
      </div>

      <div className="formImage">
        <img className="formImageAlignment" src={TWK1} alt="/" />
      </div>
      <div className="contactForm">
        <form ref={form}>
          <input
            className="inputContact"
            type="text"
            name="from_name"
            required
            placeholder="Name"
          />
          <br />

          <input
            className="inputContact"
            type="email"
            name="from_email"
            required
            placeholder="Email"
          />
          <br />

          <input
            className="inputContact"
            type="text"
            name="from_number"
            required
            placeholder="Number"
          />
          <br />

          <input
            className="inputContact"
            type="text"
            name="from_company"
            required
            placeholder="Company"
          />
          <br />
          <textarea
            className="inputTextarea"
            name="message"
            required
            placeholder="Message"
          ></textarea>

          <button
            onClick={sendEmail}
            className=" letsConnectButton buttonColor"
          >
            {" "}
            <h3>Send</h3>{" "}
          </button>
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
