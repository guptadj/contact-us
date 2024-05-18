import React from 'react'
import "./lower.css"
import Ph from "./ph.png"
import em from "./em.png"
import images from "./images.png"

export default function Lower() {
  return (
    <div>
     <div className="conatiner1">
        <div className="conatiner1">
            <img src={Ph} alt="Placeholder 1"/>
            <h4 className='ph'>PHONE:<p>9326081281</p></h4>   
        </div>
        <div className="conatiner1">
            <img src={em} alt="Placeholder 2"/>
            <h4>EMAIL:<p>info@unityforce.comm donatedinfo@unityforce</p></h4>
        </div>
        <div className="conatiner1">
            <img src={images} alt="Placeholder 3"/>
            <h4>LOCATION:<p>King Street Melbourne, 3000, Australa</p></h4>
        </div>
     </div>

     <div className='map'>
        {/* Replace the iframe src with your desired map embed code */}
        <iframe
          title="Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15078.205097575263!2d72.86588705!3d19.12733165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c82718741c37%3A0xb4678a6356ea4463!2sMumbai%2C%20Maharashtra%20400093!5e0!3m2!1sen!2sin!4v1715948343484!5m2!1sen!2sin"
          width="600"
          height="450"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>


    </div>
  )
}
