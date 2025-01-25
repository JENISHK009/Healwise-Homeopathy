import React from 'react';
import { ShoppingCart } from 'lucide-react';
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import './CartPage.css'; // Ensure this CSS file is created

const CartPage = ({ cartItems, removeFromCart, updateQuantity }) => {
  const totalPrice = cartItems.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);

  return (
    <div className="container">
      <Header cartItems={cartItems} />
      <div className="card">
        <div className="row">
          <div className="col-md-8 cart">
            <div className="title">
              <div className="row">
                <div className="col"><h4><b>Shopping Cart</b></h4></div>
                <div className="col align-self-center text-right text-muted">{cartItems.length} items</div>
              </div>
            </div>    
            {cartItems.length === 0 ? (
              <div className="empty-cart">
                <ShoppingCart size={50} />
                <p>Your cart is empty.</p>
              </div>
            ) : (
              cartItems.map(product => (
                <div className="row border-top border-bottom cart-item" key={product.id}>
                  <div className="col-2">
                    <img className="img-fluid cart-item-image" src={product.mainImage} alt={product.name} />
                  </div>
                  <div className="col cart-item-details">
                    <div className="row text-muted">{product.category}</div>
                    <div className="row cart-item-name">{product.name}</div>
                  </div>
                  <div className="col cart-item-quantity">
                    <button className="quantity-btn" onClick={() => updateQuantity(product.id, 'decrease')}>-</button>
                    <span className="border quantity-display">{product.quantity}</span>
                    <button className="quantity-btn" onClick={() => updateQuantity(product.id, 'increase')}>+</button>
                  </div>
                  <div className="col cart-item-price">
                    &#8377; {(product.price * product.quantity).toFixed(2)} 
                    <span className="close" onClick={() => removeFromCart(product.id)}>&#10005;</span>
                  </div>
                </div>
              ))
            )}
            <div className="back-to-shop">
              <a href="/product">
                <img src="https://cdn-icons-png.freepik.com/512/5467/5467806.png" alt="Back to shop" className="arrow-icon" />
              </a>
              <span className="text-muted">Back to shop</span>
            </div>
          </div>
          <div className="col-md-4 summary">
            <div className="row" style={{ borderTop: '1px solid rgba(0,0,0,.1)', padding: '2vh 0' }}>
              <div className="col">TOTAL PRICE</div>
              <div className="col text-right">&#8377; {totalPrice}</div>
            </div>
            <button className="btn">CHECKOUT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;