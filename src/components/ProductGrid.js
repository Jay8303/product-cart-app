import React from 'react';
import './ProductGrid.css';

const ProductGrid = ({ products, addToCart }) => (
  <div className="grid-container">
    {products.map(product => (
      <div className="grid-item" key={product.id}>
        <img src={product.thumbnail} alt={product.title} className="product-image" />
        <h3 className="product-title">{product.title}</h3>
        <p className="product-price">${product.price.toFixed(2)}</p>
        <p className="product-stock">In stock: {product.stock}</p>
        <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      </div>
    ))}
  </div>
);

export default ProductGrid;
