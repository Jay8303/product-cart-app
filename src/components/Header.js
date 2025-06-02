// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import shopIcon from '../assets/shop-icon.png';


const Header = ({ view, setView, cartCount }) => (
  <header className="header">
    <h1 className="header-title">
  <img src={shopIcon} alt="Shop Icon" className="header-logo" />
  Product Listing
</h1>

    <div className="header-controls">
      <button
        className={`view-button ${view === 'grid' ? 'active' : ''}`}
        onClick={() => setView("grid")}
      >
        Grid
      </button>
      <button
        className={`view-button ${view === 'table' ? 'active' : ''}`}
        onClick={() => setView("table")}
      >
        Table
      </button>
      <Link to="/cart" className="cart-link">
        🛒 Cart ({cartCount})
      </Link>
    </div>
  </header>
);

export default Header;

