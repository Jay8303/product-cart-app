import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = ({ cart }) => {
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const tax = subtotal * 0.05;
  const total = subtotal + tax;

  return (
    <div className="cart">
      <h2>🛒 My Cart</h2>

      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty</p>
      ) : (
        <>
          <table className="cart-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Qty</th>
                <th>Price (1 item) </th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {cart.map(item => (
                <tr key={item.id}>
                  <td>{item.title}</td>
                  <td>{item.quantity}</td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>${(item.price * item.quantity).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="cart-summary">
            <p><strong>Subtotal:</strong> ${subtotal.toFixed(2)}</p>
            <p><strong>Tax (5%):</strong> ${tax.toFixed(2)}</p>
            <h3><strong>Total:</strong> ${total.toFixed(2)}</h3>
          </div>
        </>
      )}

      <Link to="/" className="back-link">← Back to the Products</Link>
    </div>
  );
};

export default Cart;
