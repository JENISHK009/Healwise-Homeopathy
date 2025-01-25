import React, { useState, useMemo } from 'react';
import {
  Star, CreditCard,
  Search, Filter, SlidersHorizontal,
  ShoppingCart,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import './ProductPage.css';

const products = [
  {
    id: 1,
    name: 'Immunity Booster Drops',
    type: 'Drops',
    category: 'Immune Support',
    description: 'Natural herbal formula to enhance immune system',
    price: 24.99,
    rating: 4.5,
    mainImage: 'https://squaretoiletries.com/wp-content/uploads/2022/12/meril-Tangerine-shampoo-pack.png'
  },
  {
    id: 2,
    name: 'Stress Relief Tablets',
    type: 'Tablets',
    category: 'Mental Health',
    description: 'Homeopathic remedy for managing daily stress',
    price: 19.99,
    rating: 4.2,
    mainImage: 'https://www.thesoumiscanproduct.com/uploads/products/thumb_20.jpg'
  },
  {
    id: 3,
    name: 'Digestive Health Syrup',
    type: 'Syrup',
    category: 'Digestive Care',
    description: 'Natural solution for digestive system balance',
    price: 15.99,
    rating: 4.0,
    mainImage: 'https://www.thesoumiscanproduct.com/uploads/products/thumb_47.jpeg'
  },
  // Add more products as needed
];

const ProductCard = React.forwardRef(({ product, onAddToCart, onBuyNow }, ref) => {
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    onAddToCart(product);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000); // Reset after 2 seconds
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => {
      const isFilled = index < Math.floor(rating);
      return (
        <Star
          key={index}
          className={`star ${isFilled ? 'filled' : 'empty'}`}
          style={{ color: isFilled ? '#f39c12' : '#ccc' }} // Gold for filled, light gray for empty
        />
      );
    });
  };

  return (
    <div className="product-card">
  <div className="product-image-container">
    <img src={product.mainImage} alt={product.name} className="product-image" />
  </div>
  <div className="product-details">
    <h3 className="product-name">{product.name}</h3>
    <div className="product-meta">
      <span className="product-type">{product.type}</span>
      <span className="product-category">{product.category}</span>
    </div>
    <div className="product-rating">
      {renderStars(product.rating)}
      <span className="rating-number">({product.rating})</span>
    </div>
    <p className="product-description">{product.description}</p>
    <div className="product-footer">
      <div className="product-price">&#8377;{product.price.toFixed(2)}</div>
    </div>
  </div>
  <div className="product-overlay">
    <button className="add-to-cart-btn" onClick={handleAddToCart}>
      {addedToCart ? <span className="checkmark">✔️</span> : <ShoppingCart />}
      {addedToCart ? ' Added' : ' Add to Cart'}
    </button>
    <button className="buy-now-btn" onClick={() => onBuyNow(product)}>
      <CreditCard /> Buy Now
    </button>
  </div>
</div>
  );
});

 const ProductPage = ({ addToCart }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 50]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesType = selectedTypes.length === 0 || selectedTypes.includes(product.type);
      const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];

      return matchesSearch && matchesType && matchesCategory && matchesPrice;
    });
  }, [searchTerm, selectedTypes, selectedCategories, priceRange]);

  const toggleType = (type) => {
    setSelectedTypes(prev =>
      prev.includes(type)
        ? prev.filter(t => t !== type)
        : [...prev, type]
    );
  };

  const toggleCategory = (category) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  return (
    <div className="product-page-wrapper">
      <div className="advanced-product-page">
        <div className="product-filters">
          <div className="search-container">
            <Search className="search-icon" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>

          <div className="filter-section">
            <div className="filter-header">
              <Filter /> Product Types
            </div>
            <div className="filter-options">
              {products.map(product => (
                <label key={product.type} className="checkbox-container">
                  <input
                    type="checkbox"
                    checked={selectedTypes.includes(product.type)}
                    onChange={() => toggleType(product.type)}
                  />
                  {product.type}
                </label>
              ))}
            </div>
          </div>

          <div className="filter-section">
            <div className="filter-header">
              <SlidersHorizontal /> Price Range
            </div>
            <div className="price-range">
              <input
                type="range"
                min="0"
                max="50"
                step="1"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([0, Number(e.target.value)])}
              />
              <div className="price-labels">
                <span>&#8377;{priceRange[0]}</span>
                <span>&#8377;{priceRange[1]}</span>
              </div>
            </div>
          </div>

          <div className="filter-section">
            <div className="filter-header">
              <Filter /> Categories
            </div>
            <div className="filter-options">
              {products.map(product => (
                <label key={product.category} className="checkbox-container">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(product.category)}
                    onChange={() => toggleCategory(product.category)}
                  />
                  {product.category}
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="product-list">
          {filteredProducts.length > 0 ? (
            filteredProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={addToCart}
                onBuyNow={() => console.log('Buying:', product)}
              />
            ))
          ) : (
            <div className="no-products">
              <div className="message">
                <h2>No Products Found</h2>
                <p>Try searching for something else!</p>
              </div>
              <div className="animation-container">
                <div className="animation"></div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductPage;