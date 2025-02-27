import React, { useState } from "react";
import "./Navbar.css";
import { FaSearch, FaShoppingCart, FaStore, FaUser, FaEllipsisV } from "react-icons/fa"; // Import FaEllipsisV


const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showLoginDropdown, setShowLoginDropdown] = useState(false);

  // Handle Search
  const handleSearch = () => {
    console.log("Searching for:", searchTerm);
  };

  // Toggle Hamburger Menu
  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  // Toggle Login Dropdown
  const toggleLoginDropdown = () => {
    setShowLoginDropdown(!showLoginDropdown);
  };

  return (
    <div className="navbar">
      {/* Left Section */}
      <div className="navbar-left">
       

        {/* Logo */}
        <img
          className="navbar-logo"
          src="/images/flipkart-logo.svg"
          alt="Flipkart Logo"
        />

        {/* Search Bar */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for Products, Brands and More"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={handleSearch}>
            <FaSearch />
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="navbar-right">
        {/* Login Button with Dropdown */}
        <div className="login-section">
          <button className="login-btn" onClick={toggleLoginDropdown}>
            <FaUser className="login-icon" />
            Login
          </button>
          {showLoginDropdown && (
            <div className="login-dropdown">
              <p>New Customer? <span>Sign Up</span></p>
              <p>My Profile</p>
              <p>Flipkart Plus Zone</p>
              <p>Orders</p>
              <p>Wishlist</p>
              <p>Rewards</p>
              <p>Gift Cards</p>
            </div>
          )}
        </div>

        {/* Become a Seller */}
        <div className="more-options"> <FaStore />Become a Seller</div>

       

        {/* Cart Icon */}
        <div className="cart">
          <FaShoppingCart />
          <span>Cart</span>
        </div>
      </div>
      {/* More Options as a Hamburger Menu */}
      <div className="hamburger-more">
        <FaEllipsisV />
        </div>
      {/* Mobile Menu */}
      {showMobileMenu && (
        <div className="mobile-menu">
          <button className="login-btn">Login</button>
          <div className="cart">
            <FaShoppingCart />
            <span>Cart</span>
          </div>
          <div className="more-options">        
             <FaEllipsisV />
            <span>Become a Seller</span>
            </div>
          
        </div>
      )}
    </div>
  );
};

export default Navbar;
