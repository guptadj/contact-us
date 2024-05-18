import React from 'react';
import p1 from "./p1.png"
import "./upper.css"

export default function Upper() {
  return (
    <div className='conatiner'>
        <div className='uppertext'>
          {/* div 1 */}
          <div className='text'>
            <h1>CONTACT US</h1>
            <p>Just send us your questions or concerns by starting a new case 
              and we will give you the help you need.</p>
            <button>Home~CONTACT</button>
          </div>
        </div>
        {/* div 2 */}
          <div className='img1'>
          <img src={p1} alt="Logo" />
          </div>
    </div>
  );
}
