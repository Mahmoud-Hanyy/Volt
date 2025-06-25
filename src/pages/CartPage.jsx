import React from "react";
import { useCart } from "../context/CartContext";

function CartPage() {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();

  const total = cart
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <div
      className="container py-5"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <h2 className="fw-bold mb-4 text-center">Shopping Cart</h2>

      {cart.length === 0 ? (
        <p className="text-center text-muted">
          Your cart is currently empty 🛒
        </p>
      ) : (
        <>
          <div className="row gy-4">
            {cart.map((item) => (
              <div key={item.id} className="col-lg-12">
                <div className="card shadow-sm p-3 d-flex flex-column flex-md-row align-items-center justify-content-between">
                  <div className="d-flex align-items-center mb-3 mb-md-0 text-center text-md-start">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      style={{
                        width: "80px",
                        height: "80px",
                        objectFit: "contain",
                        marginRight: "20px",
                      }}
                    />
                    <div>
                      <h5 className="mb-1">{item.title}</h5>
                      <p className="mb-0 fw-bold">${item.price.toFixed(2)}</p>
                    </div>
                  </div>

                  <div className="d-flex align-items-center mb-2 mb-md-0">
                    <button
                      className="btn btn-outline-secondary btn-sm me-2"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                    >
                      −
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className="btn btn-outline-secondary btn-sm ms-2"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      ＋
                    </button>
                  </div>

                  <div className="text-center text-md-end">
                    <p className="fw-bold mb-1">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-end mt-4">
            <h4>
              Total: <span className="fw-bold">${total}</span>
            </h4>
            <button className="btn btn-success me-2 mt-2">Checkout</button>
            <button className="btn btn-outline-danger mt-2" onClick={clearCart}>
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default CartPage;
