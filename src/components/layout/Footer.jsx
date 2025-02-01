// Footer.js
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        {/* First Section: Logo and Contact Information */}
        <div className='footer-section footer-logo'>
          <img
            src='https://res.cloudinary.com/dcmgkwzbw/image/upload/v1737256624/Healwise%20homoepathu/urldzhxapvnmsbdndexd.png'
            alt='Clinic Logo'
            className='footer-logo-img'
          />
          <p className='footer-contact'>
            <strong>Contact Us:</strong>
            <br />
            216, Rangeela Park, Beside Sumeru City Mall,
            <br />
            Sudama Chowk, Mota Varachha, Surat - 394101
            <br />
            Phone: +91 8160609527
            <br />
            Email: info@clinic.com
          </p>
        </div>

        {/* Second Section: Navigation Links */}
        <div className='footer-section footer-links'>
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href='#home'>Home</a>
            </li>
            <li>
              <a href='#about'>About</a>
            </li>
            <li>
              <a href='#services'>Services</a>
            </li>
            <li>
              <a href='/products'>Products</a>
            </li>
          </ul>
        </div>

        {/* Third Section: More Links */}
        <div className='footer-section footer-links'>
          <h4>Resources</h4>
          <ul>
            <li>
              <a href='#blog'>Blog</a>
            </li>
            <li>
              <a href='#faq'>FAQ</a>
            </li>
            <li>
              <a href='#terms'>Terms & Conditions</a>
            </li>
            <li>
              <a href='#privacy'>Privacy Policy</a>
            </li>
          </ul>
        </div>

        {/* Fourth Section: Subscribe Email */}
        <div className='footer-section footer-subscribe'>
          <h4>Stay Updated</h4>
          <p>Subscribe to our newsletter for the latest updates.</p>
          <form className='subscribe-form'>
            <input
              type='email'
              placeholder='Enter your email'
              className='subscribe-input'
            />
            <button
              type='submit'
              className='subscribe-button'>
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
