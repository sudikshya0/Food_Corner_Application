import React from 'react'
import aboutimg from '../assets/masala.jpg'
import './About.css';
const About = () => {
  return (
    <div className='about-container'>
        <img className='image' src={aboutimg} />
        <div className='about-text'>ABOUT US</div>
        <div className="about-info">
          <p>
          We know that your time is valuable and sometimes every minute in the day counts. 
          That’s why we deliver! So you can spend more time doing the things you love. You can get anything from Indian food to high French cuisine by placing a simple order online through our website, mobile app or over the phone. 
          Then just sit back, relax, and wait for your order to arrive.
          </p>
          <p>
          Download your Free App from Play Store or App store and enjoy. 
          If you have any suggestion or feedback for us, simply give us a call or drop us an email. 
          We really love and appreciate feeback from all our foodies, for e.g., any of your favourite restaurant you want for deals or delivery!
          </p>
        </div>
    </div>
  )
}

export default About