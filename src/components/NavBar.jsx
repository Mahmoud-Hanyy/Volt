// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import logo from "../assets/logo.png"; // 👈 import your logo

function Navbar() {
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src={logo}
            alt="Volt Logo"
            height="40"
            className="me-2"
            style={{
              objectFit: "contain",
              transform: "scale(3)",
              transformOrigin: "left center",
            }}
          />
        </Link>
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/products">
              Products
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/cart">
              Cart ({totalItems})
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
