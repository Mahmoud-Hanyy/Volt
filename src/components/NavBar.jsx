import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import logo from "../assets/logo.png";

function Navbar() {
  const { cart, wishlist } = useCart();
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <div className="container-fluid">
        <Link
          className="navbar-brand d-flex align-items-center"
          to="/"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
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

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul
            className="navbar-nav ms-auto"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            <li className="nav-item">
              <Link className="nav-link" to="/products">
                Shop
              </Link>
            </li>
            <li className="nav-item position-relative">
              <Link className="nav-link" to="/wishlist">
                Wishlist
                {wishlist.length > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {wishlist.length}
                  </span>
                )}
              </Link>
            </li>
            <li className="nav-item position-relative">
              <Link className="nav-link" to="/cart">
                Cart
                {cartCount > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                    {cartCount}
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
