import React, { useState, useMemo } from 'react';
import {
  Search,
  Filter,
  SlidersHorizontal,
  CheckCircle,
  ShoppingCart,
  X,
} from 'lucide-react';
import './ProductPage.css';
import { useParams, useNavigate } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: 'Immunity Booster Drops',
    type: 'Drops',
    category: 'Immune Support',
    shortDescription: 'A natural herbal formula to enhance your immune system.',
    description: `
      <h2>Immunity Booster Drops</h2>
      <p>Our <strong>Immunity Booster Drops</strong> are a natural herbal formula designed to enhance your immune system. This powerful blend is crafted from the finest ingredients to support your overall health.</p>
      <h3>Key Benefits:</h3>
      <ul>
        <li>Boosts immune system function</li>
        <li>Supports overall health and wellness</li>
        <li>Made from natural ingredients</li>
        <li>Easy to use drops</li>
      </ul>
      <h3>How to Use:</h3>
      <p>Take <strong>10 drops</strong> daily, preferably in the morning. Mix with water or juice for best results.</p>
      <h3>Ingredients:</h3>
      <p>Herbal extracts, vitamins, and minerals.</p>
      <h3>Note:</h3>
      <p>Consult your healthcare provider before use if you are pregnant, nursing, or have a medical condition.</p>
    `,
    price: 24.99,
    rating: 4.5,
    mainImage: 'https://squaretoiletries.com/wp-content/uploads/2022/12/meril-Tangerine-shampoo-pack.png',
    images: [
      'https://squaretoiletries.com/wp-content/uploads/2022/12/meril-Tangerine-shampoo-pack.png',
      'https://www.thesoumiscanproduct.com/uploads/products/thumb_20.jpg',
      'https://squaretoiletries.com/wp-content/uploads/2022/12/meril-Tangerine-shampoo-pack.png',
      'https://www.thesoumiscanproduct.com/uploads/products/thumb_20.jpg',
      'https://www.thesoumiscanproduct.com/uploads/products/thumb_20.jpg',
    ]
  },
  {
    id: 2,
    name: 'Stress Relief Tablets',
    type: 'Tablets',
    category: 'Mental Health',
    shortDescription: 'Homeopathic remedy for managing daily stress.',
    description: `
      <h2>Stress Relief Tablets</h2>
      <p>Our <strong>Stress Relief Tablets</strong> are a homeopathic remedy formulated to help manage daily stress and promote relaxation.</p>
      <h3>Key Benefits:</h3>
      <ul>
        <li>Helps reduce stress and anxiety</li>
        <li>Promotes a sense of calm</li>
        <li>Supports mental clarity</li>
        <li>Non-drowsy formula</li>
      </ul>
      <h3>How to Use:</h3>
      <p>Take <strong>1-2 tablets</strong> as needed, preferably with water.</p>
      <h3>Ingredients:</h3>
      <p>Homeopathic ingredients including <em>Chamomilla</em> and <em>Passiflora</em>.</p>
      <h3>Note:</h3>
      <p>Consult your healthcare provider if symptoms persist.</p>
    `,
    price: 19.99,
    rating: 4.2,
    mainImage: 'https://www.thesoumiscanproduct.com/uploads/products/thumb_20.jpg',
    images: [
      'https://squaretoiletries.com/wp-content/uploads/2022/12/meril-Tangerine-shampoo-pack.png',
      'https://www.thesoumiscanproduct.com/uploads/products/thumb_20.jpg',
      'https://squaretoiletries.com/wp-content/uploads/2022/12/meril-Tangerine-shampoo-pack.png',
      'https://www.thesoumiscanproduct.com/uploads/products/thumb_20.jpg',
      'https://www.thesoumiscanproduct.com/uploads/products/thumb_20.jpg',
    ]
  },
  {
    id: 3,
    name: 'Digestive Health Syrup',
    type: 'Syrup',
    category: 'Digestive Care',
    shortDescription: 'Natural solution for digestive balance.',
    description: `
      <h2>Digestive Health Syrup</h2>
      <p>Our <strong>Digestive Health Syrup</strong> is a natural solution designed to promote digestive balance and overall gut health.</p>
      <h3>Key Benefits:</h3>
      <ul>
        <li>Supports healthy digestion</li>
        <li>Helps relieve bloating and discomfort</li>
        <li>Made from natural ingredients</li>
        <li>Tasty syrup for easy consumption</li>
      </ul>
      <h3>How to Use:</h3>
      <p>Take <strong>15 ml</strong> before meals for best results.</p>
      <h3>Ingredients:</h3>
      <p>Natural herbal extracts, honey, and essential oils.</p>
      <h3>Note:</h3>
      <p>Consult your healthcare provider if you have any underlying health conditions.</p>
    `,
    price: 15.99,
    rating: 4.0,
    mainImage: 'https://www.thesoumiscanproduct.com/uploads/products/thumb_47.jpeg',
    images: [
      'https://squaretoiletries.com/wp-content/uploads/2022/12/meril-Tangerine-shampoo-pack.png',
      'https://www.thesoumiscanproduct.com/uploads/products/thumb_20.jpg',
      'https://squaretoiletries.com/wp-content/uploads/2022/12/meril-Tangerine-shampoo-pack.png',
      'https://www.thesoumiscanproduct.com/uploads/products/thumb_20.jpg',
      'https://www.thesoumiscanproduct.com/uploads/products/thumb_20.jpg',
    ]
  },
  {
    id: 4,
    name: 'Digestive Health Syrup',
    type: 'Syrup',
    category: 'Digestive Care',
    shortDescription: 'Natural solution for digestive balance.',
    description: `
      <h2>Digestive Health Syrup</h2>
      <p>Our <strong>Digestive Health Syrup</strong> is a natural solution designed to promote digestive balance and overall gut health.</p>
      <h3>Key Benefits:</h3>
      <ul>
        <li>Supports healthy digestion</li>
        <li>Helps relieve bloating and discomfort</li>
        <li>Made from natural ingredients</li>
        <li>Tasty syrup for easy consumption</li>
      </ul>
      <h3>How to Use:</h3>
      <p>Take <strong>15 ml</strong> before meals for best results.</p>
      <h3>Ingredients:</h3>
      <p>Natural herbal extracts, honey, and essential oils.</p>
      <h3>Note:</h3>
      <p>Consult your healthcare provider if you have any underlying health conditions.</p>
    `,
    price: 15.99,
    rating: 4.0,
    mainImage: 'https://www.thesoumiscanproduct.com/uploads/products/thumb_47.jpeg',
    images: [
      'https://squaretoiletries.com/wp-content/uploads/2022/12/meril-Tangerine-shampoo-pack.png',
      'https://www.thesoumiscanproduct.com/uploads/products/thumb_20.jpg',
      'https://squaretoiletries.com/wp-content/uploads/2022/12/meril-Tangerine-shampoo-pack.png',
      'https://www.thesoumiscanproduct.com/uploads/products/thumb_20.jpg',
      'https://www.thesoumiscanproduct.com/uploads/products/thumb_20.jpg'
      
    ]
  },
];

const ProductCard = React.forwardRef(({ product, onAddToCart }, ref) => {
  const [addedToCart, setAddedToCart] = useState(false);
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const navigate = useNavigate();

  const handleAddToCart = () => {
    onAddToCart(product);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const handleProductClick = () => {
    navigate('/product-details', { state: { product } });
  };

  // Set a character limit for the description
  const descriptionLimit = 100; // Change this value as needed
  const truncatedDescription = product.shortDescription && product.shortDescription.length > descriptionLimit
    ? `${product.shortDescription.substring(0, descriptionLimit)}...`
    : product.shortDescription;

  return (
    <div className="product-card">
      <div className="product-image-container" ref={ref} onClick={handleProductClick}>
        <img src={product.mainImage} alt={product.name} className="product-image" />
      </div>
      <div className="product-details" ref={ref} onClick={handleProductClick}>
        <h3 className="product-name">
          {product.name}
          <span className="rating-number">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            {product.rating}
          </span>
        </h3>
        <div className="product-price">&#8377;{product.price.toFixed(2)}</div>
        <div className="product-meta">
          <div className="product-label-container">
            <span className="product-type-label label-fade-in">
              <span className="product-type">{product.type}</span>
            </span>
            <span className="product-category-label label-fade-in">
              <span className="product-category">{product.category}</span>
            </span>
          </div>
        </div>
        <p className="product-description">
          {isDescriptionExpanded ? product.shortDescription : truncatedDescription}
          {product.shortDescription && product.shortDescription.length > descriptionLimit && !isDescriptionExpanded && (
            <span className="read-more" onClick={() => setIsDescriptionExpanded(true)}> Read more</span>
          )}
          {isDescriptionExpanded && (
            <span className="read-less" onClick={() => setIsDescriptionExpanded(false)}> Read less</span>
          )}
        </p>
      </div>
      <button className="add-to-cart-btn" onClick={handleAddToCart}>
        {addedToCart ? (
          <span className="checkmark-icon">
            <CheckCircle className="checkmark-animation" />
          </span>
        ) : (
          <ShoppingCart />
        )}
      </button>
    </div>
  );
});

const ProductPage = ({ addToCart }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 50]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Get unique types and categories
  const uniqueTypes = [...new Set(products.map(p => p.type))];
  const uniqueCategories = [...new Set(products.map(p => p.category))];

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

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedTypes([]);
    setSelectedCategories([]);
    setPriceRange([0, 50]);
  };

  return (
    <div className="product-page-wrapper">
      <div className="advanced-product-page">
        {/* Desktop Filters */}
        <div className="product-filters desktop-filters">
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
              {uniqueTypes.map(type => (
                <label key={type} className="checkbox-container">
                  <input
                    type="checkbox"
                    checked={selectedTypes.includes(type)}
                    onChange={() => toggleType(type)}
                  />
                  {type}
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
              {uniqueCategories.map(category => (
                <label key={category} className="checkbox-container">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(category)}
                    onChange={() => toggleCategory(category)}
                  />
                  {category}
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className='mobile-nav-bar'>
          <button
            className="mobile-filter-toggle-btn"
            onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
          >
            <Filter />
          </button>
          <div className="mobile-search-container">
            <Search className="search-icon" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

        </div>
        {/* Mobile Filters */}
        {isMobileFilterOpen && (
          <div className="mobile-filter-container">
            <div className="mobile-filter-header">
              <h2>Filter Products</h2>
              <button
                className="mobile-filter-close"
                onClick={() => setIsMobileFilterOpen(false)}
              >
                <X />
              </button>
            </div>

            <div className="mobile-filter-section">
              <div className="mobile-filter-section-title">
                <Filter /> Product Types
              </div>
              <div className="mobile-filter-options">
                {uniqueTypes.map(type => (
                  <div key={type} className="mobile-filter-checkbox">
                    <input
                      type="checkbox"
                      id={`mobile-type-${type}`}
                      checked={selectedTypes.includes(type)}
                      onChange={() => toggleType(type)}
                    />
                    <label htmlFor={`mobile-type-${type}`}>{type}</label>
                  </div>
                ))}
              </div>
            </div>

            <div className="mobile-filter-section">
              <div className="mobile-filter-section-title">
                <SlidersHorizontal /> Price Range
              </div>
              <div className="mobile-range-filter">
                <input
                  type="range"
                  min="0"
                  max="50"
                  step="1"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([0, Number(e.target.value)])}
                  className="mobile-range-slider"
                />
                <div className="mobile-range-labels">
                  <span>&#8377;{priceRange[0]}</span>
                  <span>&#8377;{priceRange[1]}</span>
                </div>
              </div>
            </div>

            <div className="mobile-filter-section">
              <div className="mobile-filter-section-title">
                <Filter /> Categories
              </div>
              <div className="mobile-filter-options">
                {uniqueCategories.map(category => (
                  <div key={category} className="mobile-filter-checkbox">
                    <input
                      type="checkbox"
                      id={`mobile-category-${category}`}
                      checked={selectedCategories.includes(category)}
                      onChange={() => toggleCategory(category)}
                    />
                    <label htmlFor={`mobile-category-${category}`}>{category}</label>
                  </div>
                ))}
              </div>
            </div>

            <div className="mobile-filter-actions">
              <button
                className="mobile-filter-button mobile-filter-reset"
                onClick={resetFilters}
              >
                Reset
              </button>
              <button
                className="mobile-filter-button mobile-filter-apply"
                onClick={() => setIsMobileFilterOpen(false)}
              >
                Apply
              </button>
            </div>
          </div>
        )}

        <div className="product-list">
          {filteredProducts.length > 0 ? (
            filteredProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={addToCart}
              />
            ))
          ) : (
            <div className="no-products">
              <div className="message">
                <h2>No Products Found</h2>
                <p>Try searching for something else!</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;