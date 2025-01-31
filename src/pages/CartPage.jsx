import React from 'react';
import { ShoppingCart, X } from 'lucide-react';
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import './CartPage.css';
import { useNavigate } from "react-router-dom";

const CartPage = ({ cartItems, removeFromCart, updateQuantity }) => {

  const navigate = useNavigate();

  const totalPrice = cartItems.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);

  const handleCheckout = () => {
    navigate("/checkout");
  };
  return (
    <div className="cart-page">
      <Header cartItems={cartItems} />
      <div className="cart-container">
        <div className="cart-header">
          <h2>Shopping Cart</h2>
          <span className="cart-item-count">{cartItems.length} items</span>
        </div>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <ShoppingCart size={50} />
            <p>Your cart is empty.</p>
            <a href="/product" className="back-to-shop">
              <span>Back to Shop</span>
            </a>
          </div>
        ) : (
          <div className="cart-content">
            <div className="cart-items">
              {cartItems.map((product) => (
                <div className="cart-item" key={product.id}>
                  <img src={product.mainImage} alt={product.name} className="cart-item-image" />
                  <div className="cart-item-details">
                    <h3 className="cart-item-name">{product.name}</h3>
                    <p className="cart-item-category">{product.category}</p>
                    <div className="cart-item-quantity">
                      <button
                        className="quantity-btn"
                        onClick={() => updateQuantity(product.id, 'decrease')}
                      >
                        -
                      </button>
                      <span className="quantity-display">{product.quantity}</span>
                      <button
                        className="quantity-btn"
                        onClick={() => updateQuantity(product.id, 'increase')}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="cart-item-price">
                    <span>&#8377;{(product.price * product.quantity).toFixed(2)}</span>
                    <button className="remove-btn" onClick={() => removeFromCart(product.id)}>
                      <X size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <h3>Order Summary</h3>
              <div className="summary-row">
                <span>Total Items</span>
                <span>{cartItems.length}</span>
              </div>
              <div className="summary-row">
                <span>Total Price</span>
                <span>&#8377;{totalPrice}</span>
              </div>
              <button className="checkout-btn" onClick={handleCheckout}>
                Proceed to Checkout
              </button>              
              <a href="/product" className="back-to-shop">
                <span>Continue Shopping</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;