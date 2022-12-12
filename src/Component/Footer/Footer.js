import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className="footer-socials">
                <span className='footer-icons'>
                    <i class="bi bi-instagram"></i>
                </span>
                <span className='footer-icons'>
                    <i class="bi bi-twitter"></i>
                </span>
                <span className='footer-icons'>
                    <i class="bi bi-facebook"></i>
                </span>
                <span className='footer-icons'>
                    <i class="bi bi-linkedin"></i>
                </span>
        </div>
        <div className="footer-text">® 2021 IndianFood.com</div>
    </div>
  )
}

export default Footer