import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import products from "../../data/product.json"; // ✅ Correct Import
import { useCart } from "../../context/CartContext"; // Import Cart Context
import "./ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const foundProduct = products.find((p) => p.id === parseInt(id));
    setProduct(foundProduct);
  }, [id]);

  if (!product) return <div>Loading...</div>;

  // Calculate discount percentage
  const discount =
    product.basePrice > product.price
      ? Math.round(((product.basePrice - product.price) / product.basePrice) * 100)
      : 0;

  return (
    <div className="product-details">
      <div className="product-images">
        <img src={product.img || "/placeholder.jpg"} alt={product.displayName} />
        <div className="action-buttons">
        <button className="add-to-cart" onClick={() => addToCart(product)}>Add to Cart</button>

          <button className="buy-now">Buy Now</button>
        </div>
      </div>

      <div className="product-info">
        <h2>{product.displayName}</h2>

        <div className="price-section">
          <p className="price">₹{product.price}</p>
          {product.basePrice > product.price && (
            <>
              <p className="original-price">₹{product.basePrice}</p>
              <p className="discount">{discount}% off</p>
            </>
          )}
        </div>

        <div className="rating-section">
          <p className="rating">⭐ {product.rating}</p>
          <p className="reviews">49 ratings and 4 reviews</p>
        </div>

        <div className="size-section">
          <p>Size</p>
          <div className="sizes">
            {["S", "M", "L", "XL", "XXL"].map((size) => (
              <button key={size}>{size}</button>
            ))}
          </div>
          <a href="#" className="size-chart">
            Size Chart
          </a>
        </div>

        <div className="offers-section">
          <h3>Available Offers</h3>
          <ul>
            <li>
              <strong>Bank Offer</strong> ₹1000 Cashback on Axis Bank Credit Cards. <span className="terms">T&C</span>
            </li>
            <li>
              <strong>Bank Offer</strong> 10% off on orders above ₹7,499. <span className="terms">T&C</span>
            </li>
            <li>
              <strong>Combo Offer</strong> Buy 2 or more items & get ₹50 off. <span className="terms">T&C</span>
            </li>
          </ul>
          <a href="#" className="more-offers">
            +10 more offers
          </a>
        </div>

        <div className="delivery-section">
          <p>Deliver to</p>
          <input type="text" placeholder="Enter delivery pincode" />
          <button>Check</button>
          <p>Cash on Delivery available</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
