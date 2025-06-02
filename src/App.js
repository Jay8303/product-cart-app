import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ProductGrid from './components/ProductGrid';
import ProductTable from './components/ProductTable';
import Cart from './components/Cart';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [view, setView] = useState("grid");
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  const [searchQuery, setSearchQuery] = useState(""); 

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(res => setProducts(res.data.products))
      .catch(err => console.error("API fetch error:", err));
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart(prev => {
      const exists = prev.find(item => item.id === product.id);
      if (exists) {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  // 🔍 Filter products based on search input
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Router>
      <Header view={view} setView={setView} cartCount={cart.length} />
      <div className="main-content">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />

        <Routes>
          <Route path="/" element={
            view === "grid"
              ? <ProductGrid products={filteredProducts} addToCart={addToCart} />
              : <ProductTable products={filteredProducts} addToCart={addToCart} />
          } />
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
