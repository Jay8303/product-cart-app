import React from 'react';
import './ProductTable.css';

const ProductTable = ({ products, addToCart }) => (
  <table className="product-table">
    <thead>
      <tr>
        <th>Serial Number</th>
        <th>Product Name</th>
        <th>Product Image</th>
        <th>Stock Quantity</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {products.map((product, index) => (
        <tr key={product.id}>
          <td>{index + 1}</td>
          <td>{product.title}</td>
          <td><img src={product.thumbnail} alt={product.title} width="50" /></td>
          <td>{product.stock}</td>
          <td><button onClick={() => addToCart(product)}>Add to Cart</button></td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default ProductTable;
