import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { ShoppingCart } from 'lucide-react'; // Import ShoppingCart icon
import { FaBars, FaTimes } from 'react-icons/fa'; // Import the hamburger and close icons

import "./Header.css";

const Header = ({ cartItems }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Calculate total items in cart
  const totalItemsInCart = cartItems && cartItems.reduce((total, item) => total + item.quantity, 0);

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
          <Link to='/'> {/* Wrap the logo in a Link component */}
            <img
              src='https://res.cloudinary.com/dcmgkwzbw/image/upload/v1737256624/Healwise%20homoepathu/urldzhxapvnmsbdndexd.png'
              alt='Clinic Logo'
            />
          </Link>
        </div>
        <nav className={`menu ${isMenuOpen ? "open" : ""}`}>
          <button className='close-btn' onClick={toggleMenu}>
            <FaTimes className='close-icon' /> {/* Close icon */}
          </button>
          <ul>
            <li>
              <Link to='/'>Home</Link> {/* Use Link for navigation */}
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/product'>Products</Link>
            </li>
            <li>
              <a href='#blog'>Blog</a>
            </li>
            <li>
              <a href='#contact'>Contact Us</a>
            </li>
          </ul>
        </nav>
        <div className='cart-icon-container' onClick={() => window.location.href = '/cart'}>
          <ShoppingCart />
          {totalItemsInCart > 0 && (
            <span className='cart-count'>{totalItemsInCart}</span>
          )}
        </div>
        <button className='menu-btn' onClick={toggleMenu}>
          <FaBars className='menu-icon' /> {/* Use the imported icon */}
        </button>
      </div>
    </header>
  );
};

export default Header;