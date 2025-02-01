import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Star } from 'lucide-react';
import DOMPurify from 'dompurify'; // Import DOMPurify
import './ProductDetails.css';

const ProductDetails = ({ product }) => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(product.mainImage);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  if (!product) {
    return (
      <div className="details-not-found-container">
        <h2>Product not found</h2>
        <button className="details-back-button" onClick={() => navigate('/products')}>
          <ArrowLeft /> Back to Products
        </button>
      </div>
    );
  }

  return (
    <div className="details-page-container">
      <button className="details-back-button" onClick={() => navigate('/products')}>
        <ArrowLeft /> Back to Products
      </button>

      <div className="details-content-wrapper">
        <div className="details-image-section">
          <img
            src={selectedImage}
            alt={product.name}
            className="details-product-image"
          />
          <div class="image-gallery-container">

            <div className="image-gallery">
              {product.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${product.name} ${index + 1}`}
                  className="thumbnail"
                  onClick={() => setSelectedImage(image)}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="details-info-section">
          <div className="details-header">
            <h1 className="details-product-name">{product.name}</h1>
            <div className="details-rating">
              <Star className="details-star-icon" />
              <span>{product.rating}</span>
            </div>
          </div>

          <div className="details-type-category">
            <span className="details-type-label">{product.type}</span>
            <span className="details-category-label">{product.category}</span>
          </div>

          <div className="details-price-section">
            <span className="details-price">&#8377;{product.price.toFixed(2)}</span>
          </div>

          <div className="details-description-section">
            <h3 className="details-description-title">Description</h3>
            <div
              className="details-description-text"
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(product.description) }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;