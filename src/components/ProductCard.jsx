import React from "react";
import { useCart } from "../context/CartContext";

function ProductCard({ product, onAddToCart }) {
  const { toggleWishlist, wishlist } = useCart();
  const { id, title, price, thumbnail, rating } = product;

  const isWished = wishlist?.some((item) => item.id === id);
  const stars = Math.round(rating?.rate || rating || 4);

  return (
    <div className="col-md-4 col-sm-6 mb-4">
      <div className="card h-100 shadow-sm border-0">
        <img
          src={thumbnail}
          className="card-img-top p-3"
          alt={title}
          style={{ height: "200px", objectFit: "contain" }}
        />
        <div
          className="card-body d-flex flex-column"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          <h5 className="card-title">{title}</h5>
          <p className="card-text fw-bold mb-1">${price}</p>

          <div className="mb-2 text-warning">
            {"★".repeat(stars)}
            {"☆".repeat(5 - stars)}
          </div>

          <div className="mt-auto d-flex justify-content-between">
            <button
              className={`btn btn-sm ${
                isWished ? "btn-danger" : "btn-outline-secondary"
              }`}
              onClick={() => toggleWishlist(product)}
            >
              {isWished ? "♥" : "♡"} Wishlist
            </button>
            <button
              className="btn btn-sm btn-primary"
              style={{
                backgroundColor: "#ffbc28",
                border: "none",
                color: "#000",
                fontFamily: "poppins",
              }}
              onClick={() => onAddToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
