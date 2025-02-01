import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import ProductPage from './pages/Product';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckOutPage';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ProductDetails from './pages/ProductDetailPage';

// Create AppRoutes component to use useLocation
const AppRoutes = ({ cartItems, addToCart, removeFromCart, updateQuantity }) => {
  const location = useLocation();

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/products" element={<ProductPage addToCart={addToCart} />} />
      <Route
        path="/product-details"
        element={<ProductDetails product={location?.state?.product} />}
      />
      <Route
        path="/cart"
        element={
          <CartPage
            cartItems={cartItems}
            removeFromCart={removeFromCart}
            updateQuantity={updateQuantity}
          />
        }
      />
      <Route path="/checkout" element={<CheckoutPage />} />
    </Routes>
  );
};

function App() {
  const [cartItems, setCartItems] = useState(() => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  });

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
          return { ...product, quantity: Math.max(newQuantity, 1) };
        }
        return product;
      });
    });
  };

  return (
    <Router>
      <div className="App">
        <Header cartItems={cartItems} />
        <AppRoutes
          cartItems={cartItems}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          updateQuantity={updateQuantity}
        />
        <Footer />
      </div>
    </Router>
  );
}

export default App;