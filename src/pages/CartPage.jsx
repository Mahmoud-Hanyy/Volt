import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

function CartPage() {
  const { cart, updateQuantity, removeFromCart, clearCart } = useCart();

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="text-center mt-5">
        <h2>Your cart is empty 🛒</h2>
        <Link to="/products" className="btn btn-primary mt-3">Browse Products</Link>
      </div>
    );
  }

  return (
    <div>
      <h2 className="mb-4">🛒 Your Cart</h2>
      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th>Product</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Subtotal</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cart.map(item => (
            <tr key={item.id}>
              <td>
                <div className="d-flex align-items-center">
                  <img src={item.thumbnail} alt={item.title} width="60" className="me-2 rounded" />
                  <span>{item.title}</span>
                </div>
              </td>
              <td style={{ width: '120px' }}>
                <input
                  type="number"
                  className="form-control"
                  value={item.quantity}
                  min={1}
                  onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                />
              </td>
              <td>${item.price}</td>
              <td>${item.price * item.quantity}</td>
              <td>
                <button className="btn btn-sm btn-danger" onClick={() => removeFromCart(item.id)}>
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="d-flex justify-content-between align-items-center">
        <h4>Total: ${totalPrice.toFixed(2)}</h4>
        <div>
          <button className="btn btn-outline-danger me-2" onClick={clearCart}>Clear Cart</button>
          <button className="btn btn-success">Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
