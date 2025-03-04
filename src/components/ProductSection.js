import React from 'react';
import { Link } from 'react-router-dom';
import './ProductSection.css'; // Add CSS for styling

const ProductSection = ({ title, products }) => {
  return (
    <div className="product-section">
      <h2>{title}</h2>
      <div className="product-list">
        {products.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id} className="product-card">
            <img src={product.image || product.img} alt={product.name || product.displayName} />
            <h3>{product.name || product.displayName}</h3>
            <p>Price: {product.price}</p>
            {product.basePrice && <p>Original Price: {product.basePrice}</p>}
            {product.rating && <p>Rating: {product.rating} ★</p>}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductSection;