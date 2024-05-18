import React from "react";
import p2 from "./p2.jpg";
import "./middle.css"; 
import airp from "./airp.png"

export default function Middle() {
  return (
    <div>
      <div className="text1">
        <h4>CONTACT WITH US</h4>
        <h3>HAVE SOMETHING IN MIND , GET IN TOUCH WITH US </h3>
      </div>

      <div className="container" >
        <div className="p2">
          <img src={p2} alt="Logo" />
        </div>

        <div>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" placeholder="Enter your name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" placeholder="Enter your email" />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone:</label>
              <input type="tel" id="phone" name="phone" placeholder="Enter your phone number"/>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" placeholder="Enter your message" />
            </div>
            <button type="submit" className="sendmessage"> SEND MESSAGE <img src={airp} alt="Logo" className="airp"/> </button>
          </form>
        </div>
      </div>
    </div>
  );
}
