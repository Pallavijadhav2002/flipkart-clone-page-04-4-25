import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import products from '../../data/product.json';
import "./ProductDetails.css";

const ProductDetails = ({ productId }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const foundProduct = products.find(p => p.id === parseInt(productId));
    setProduct(foundProduct);
  }, [productId]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="product-details">
      <div className="product-images">
        <img src={product.img} alt={product.displayName} />
        <div className="action-buttons">
          <button className="add-to-cart">Add to Cart</button>
          <button className="buy-now">Buy Now</button>
        </div>
      </div>

      <div className="product-info">
        <h2>{product.displayName}</h2>
        <div className="price-section">
          <p className="price">${product.price}</p>
          <p className="original-price">${product.basePrice}</p>
          <p className="discount">61% off</p>
        </div>
        <div className="rating-section">
          <p className="rating">{product.rating} ★</p>
          <p className="reviews">49 ratings and 4 reviews</p>
        </div>
        <div className="size-section">
          <p>Size</p>
          <div className="sizes">
            <button>S</button>
            <button>M</button>
            <button>L</button>
            <button>XL</button>
            <button>XXL</button>
          </div>
          <a href="#" className="size-chart">Size Chart</a>
        </div>
        <div className="offers-section">
          <h3>Available offers</h3>
          <ul>
            <li><strong>Bank Offer</strong> $1.0 Unlimited Cashback on Flightart Axis Bank Credit Card T&C</li>
            <li><strong>Bank Offer</strong> 10% off up to ₹1,250 on all Axis Bank Credit Card (incl. migrated ones) EMI Tons of ₹7,499 and above T&C</li>
            <li><strong>Bank Offer</strong> 10% off up to ₹1,250 on Flightart Axis Bank Credit Card EMI Tons, on orders of ₹7,499 and above T&C</li>
            <li><strong>Combo Offer</strong> Buy 2 or more items save ₹30 See all products T&C</li>
          </ul>
          <a href="#" className="more-offers">+10 more offers</a>
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