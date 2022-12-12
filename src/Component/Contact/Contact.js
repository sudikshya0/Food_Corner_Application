import React from 'react'
import './Contact.css'
import img from '../assets/fooda.jpeg'
const Contact = () => {
  return (
    <div className='contact-container'>
      <div className="contact-img"></div>
      <div className="contact-info">
        <form>
        <div className="form-group">
            <label>Full Name</label>
            <input type="text" className="form-input" placeholder="Enter Full name"/>
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" className="form-input" placeholder="Enter email"/>
          </div>
          <div className="form-input">
            <label>Message</label>
            <textarea className="form-control" rows="3" placeholder="Enter message"></textarea>
          </div>
          <button type="submit" className="send-btn">Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default Contact