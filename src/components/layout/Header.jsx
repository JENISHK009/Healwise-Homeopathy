import React, { useState, useEffect } from "react";
import "./Header.css";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className='header-container'>
        <div className='logo'>
          <img
            src='https://res.cloudinary.com/dcmgkwzbw/image/upload/v1737256624/Healwise%20homoepathu/urldzhxapvnmsbdndexd.png'
            alt='Clinic Logo'
          />
        </div>
        <nav className={`menu ${isMenuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <a href='#home'>Home</a>
            </li>
            <li>
              <a href='#about'>About</a>
            </li>
            <li>
              <a href='#product'>Products</a>
            </li>
            <li>
              <a href='#blog'>Blog</a>
            </li>
            <li>
              <a href='#contact'>Contact Us</a>
            </li>
          </ul>
        </nav>
        <div className='header-actions'>
          <button className='banner-btn primary-btn'>Book Appointment</button>
          <button className='banner-btn secondary-btn'>Buy Now</button>
        </div>
        <button
          className='menu-btn'
          onClick={toggleMenu}>
          <span className='menu-icon'></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
