import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPhone, faEnvelope, faMapMarkerAlt, faCreditCard, faWallet, faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import Header from "../components/layout/Header";
import './CheckoutPage.css';

const CheckoutPage = () => {
  const navigate = useNavigate();

  // State for form fields
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    address: '',
    pincode: '',
    city: '',
    state: '',
    country: 'India',
    paymentMethod: 'credit-card',
  });

  // State for validation errors
  const [errors, setErrors] = useState({});

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear errors when user types
    setErrors({
      ...errors,
      [name]: '',
    });
  };

  // Validate form fields
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.mobile || !/^\d{10}$/.test(formData.mobile)) newErrors.mobile = 'Invalid mobile number';
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email address';
    if (!formData.address) newErrors.address = 'Address is required';
    if (!formData.pincode || !/^\d{6}$/.test(formData.pincode)) newErrors.pincode = 'Invalid pincode';
    if (!formData.city) newErrors.city = 'City is required';
    if (!formData.state) newErrors.state = 'State is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form Data Submitted:', formData);
      alert('Order placed successfully!');
      navigate('/'); // Redirect to home page after submission
    }
  };

  return (
    <div className="checkout-page">
      <div className="checkout-container">
        <h2>Checkout</h2>
        <form onSubmit={handleSubmit}>
          {/* Personal Details */}
          <div className="form-section">
            <h3>
              <FontAwesomeIcon icon={faUser} className="form-icon" />
              Personal Details
            </h3>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              {errors.name && <span className="error">{errors.name}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="mobile">
                <FontAwesomeIcon icon={faPhone} className="form-icon" />
                Mobile Number
              </label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleInputChange}
                required
              />
              {errors.mobile && <span className="error">{errors.mobile}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="email">
                <FontAwesomeIcon icon={faEnvelope} className="form-icon" />
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>
          </div>

          {/* Shipping Address */}
          <div className="form-section">
            <h3>
              <FontAwesomeIcon icon={faMapMarkerAlt} className="form-icon" />
              Shipping Address
            </h3>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
              />
              {errors.address && <span className="error">{errors.address}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="pincode">Pincode</label>
              <input
                type="text"
                id="pincode"
                name="pincode"
                value={formData.pincode}
                onChange={handleInputChange}
                required
              />
              {errors.pincode && <span className="error">{errors.pincode}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="city">City</label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                required
              />
              {errors.city && <span className="error">{errors.city}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="state">State</label>
              <input
                type="text"
                id="state"
                name="state"
                value={formData.state}
                onChange={handleInputChange}
                required
              />
              {errors.state && <span className="error">{errors.state}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="country">Country</label>
              <input
                type="text"
                id="country"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          {/* Payment Method */}
          <div className="form-section">
            <h3>
              <FontAwesomeIcon icon={faCreditCard} className="form-icon" />
              Payment Method
            </h3>
            <div className="form-group">
              <label>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="credit-card"
                  checked={formData.paymentMethod === 'credit-card'}
                  onChange={handleInputChange}
                />
                <FontAwesomeIcon icon={faCreditCard} className="payment-icon" />
                Credit/Debit Card
              </label>
            </div>
            <div className="form-group">
              <label>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="upi"
                  checked={formData.paymentMethod === 'upi'}
                  onChange={handleInputChange}
                />
                <FontAwesomeIcon icon={faWallet} className="payment-icon" />
                UPI
              </label>
            </div>
            <div className="form-group">
              <label>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="cod"
                  checked={formData.paymentMethod === 'cod'}
                  onChange={handleInputChange}
                />
                <FontAwesomeIcon icon={faMoneyBill} className="payment-icon" />
                Cash on Delivery
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit" className="submit-btn">
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;