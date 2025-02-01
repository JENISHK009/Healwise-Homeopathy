import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Header.css";

const Header = ({ cartItems }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // Calculate total items in cart
  const totalItemsInCart = cartItems?.reduce((total, item) => total + item.quantity, 0) || 0;

  // Toggle Menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Scroll event listener to make header sticky
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${isSticky ? "sticky" : ""}`}>
      <div className="header-container">
        <div className="logo">
          <Link to="/">
            <img
              src="https://res.cloudinary.com/dcmgkwzbw/image/upload/v1737256624/Healwise%20homoepathu/urldzhxapvnmsbdndexd.png"
              alt="Clinic Logo"
            />
          </Link>
        </div>
        <nav className={`menu ${isMenuOpen ? "open" : ""}`}>
          <button className="close-btn" onClick={toggleMenu}>
            <FaTimes className="close-icon" />
          </button>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </nav>
        <div className="cart-icon-container" onClick={() => (window.location.href = "/cart")}>
          <ShoppingCart />
          {totalItemsInCart > 0 && <span className="cart-count">{totalItemsInCart}</span>}
        </div>
        <button className="menu-btn" onClick={toggleMenu}>
          <FaBars className="menu-icon" />
        </button>
      </div>
    </header>
  );
};

export default Header;
