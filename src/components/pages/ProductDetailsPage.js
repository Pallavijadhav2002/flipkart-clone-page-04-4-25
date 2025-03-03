import React from "react";
import { useParams } from "react-router-dom";
import products from "../../data/product.json"; // Import product data
import "./ProductPage.css";

export default function ProductPage() {
  const { productId } = useParams();
  const product =
    products.find((p) => p.id === parseInt(productId)) || null;

  if (!product) {
    return <h2 className="not-found">Product not found</h2>;
  }

  return (
    <div className="product-page">
      <div className="product-container">
        <img src={product.img} alt={product.displayName} className="product-image" />

        <div className="product-info">
          <h1>{product.displayName}</h1>
          <p className="product-brand">Brand: {product.brand}</p>
          <p className="product-price">₹{product.price}</p>
          <p className="product-base-price">MRP: <del>₹{product.basePrice}</del></p>
          <p className="product-rating">⭐ {product.rating} / 5</p>

          <button className="buy-now-btn">Buy Now</button>
          <button className="add-to-cart-btn">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
