import React from "react";
import { useNavigate } from "react-router-dom";
import "./ProductSection.css";

const ProductSection = ({ title, products }) => {
  const navigate = useNavigate();

  return (
    <div className="product-section">
      <h2 className="section-title">{title}</h2>
      <div className="product-grid">
      {products.map((prod) => (
          <div className="product-card" 
          key={prod.id}
          onClick={() => navigate(`/product/${prod.id}`)} // Navigate to Product Page
            style={{ cursor: "pointer" }}
          >
            <img src={prod.image} alt={prod.displayName} loading="lazy" />
            <p className="product-name">{prod.displayName}</p>
            {prod.offer && <p className="product-offer">{prod.offer}</p>}
            {prod.price && <p className="product-price">{prod.price}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
