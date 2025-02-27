import React from "react";
import "./ProductSection.css";

const ProductSection = ({ title, products }) => {
  return (
    <div className="product-section">
      <h2 className="section-title">{title}</h2>
      <div className="product-grid">
        {products.map((prod, index) => (
          <div className="product-card" key={index}>
            <img src={prod.image} alt={prod.name} loading="lazy" />
            <p className="product-name">{prod.name}</p>
            {prod.offer && <p className="product-offer">{prod.offer}</p>}
            {prod.price && <p className="product-price">{prod.price}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
