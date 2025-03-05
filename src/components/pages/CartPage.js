import React from "react";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./CartPage.css";

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  // Calculate total price
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discount = totalPrice * 0.1; // Example: 10% discount
  const finalPrice = totalPrice - discount;

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>
          Your cart is empty. <Link to="/">Go Shopping</Link>
        </p>
      ) : (
        <div className="cart-content">
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img
                  src={item.image || item.img || "/placeholder.jpg"} // ✅ Fallback Image
                  alt={item.name}
                  className="cart-img"
                  onError={(e) => (e.target.src = "/placeholder.jpg")} // ✅ Handles broken images
                />
                <div className="cart-info">
                  <h3>{item.name}</h3>
                  <p>Price: ₹{item.price}</p>
                  <div className="quantity-controls">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                  </div>
                  <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              </div>
            ))}
          </div>

          {/* Price Summary Section */}
          <div className="price-details">
            <h3>Price Details</h3>
            <p>Subtotal: ₹{totalPrice}</p>
            <p>Discount: -₹{discount}</p>
            <p>Delivery: Free</p>
            <hr />
            <h2>Total: ₹{finalPrice}</h2>
            <button className="place-order">PLACE ORDER</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
