import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes from react-router-dom
import './App.css'; // Ensure that App.css is imported here
import HomePage from './pages/Home'; // Your Home page
import AboutPage from './pages/About'; // Your About page
import ProductPage from './pages/Product'; // Your Product page
import CartPage from './pages/CartPage'; // Your Cart page
import Header from './components/layout/Header'; // Import Header
import Footer from './components/layout/Footer'; // Import Header


function App() {
  const [cartItems, setCartItems] = useState(() => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  // Update local storage whenever cartItems changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prevCart) => prevCart.filter(product => product.id !== productId));
  };

  const updateQuantity = (productId, operation) => {
    setCartItems((prevCart) => {
      return prevCart.map(product => {
        if (product.id === productId) {
          const newQuantity = operation === 'increase' ? product.quantity + 1 : product.quantity - 1;
          return { ...product, quantity: Math.max(newQuantity, 1) }; // Ensure quantity doesn't go below 1
        }
        return product;
      });
    });
  };

  return (
    <Router>
      <div className="App">
        <Header cartItems={cartItems} /> {/* Pass cartItems to Header */}
        <Routes>
          <Route path="/" element={<HomePage />} /> {/* Home page */}
          <Route path="/about" element={<AboutPage />} /> {/* About Us page */}
          <Route path="/product" element={<ProductPage addToCart={addToCart} />} /> {/* Product page */}
          <Route path="/cart" element={<CartPage cartItems={cartItems} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />} /> {/* Cart page */}
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;