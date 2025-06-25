import React from "react";
import { useCart } from "../context/CartContext";

function WishlistPage() {
  const { wishlist, toggleWishlist, addToCart } = useCart();

  return (
    <div className="container py-5">
      <h2 className="mb-4 fw-bold text-center">My Wishlist</h2>

      {wishlist.length === 0 ? (
        <p className="text-center text-muted">Your wishlist is empty</p>
      ) : (
        <div className="row">
          {wishlist.map((product) => (
            <div key={product.id} className="col-md-4 col-sm-6 mb-4">
              <div className="card h-100 shadow-sm border-0">
                <img
                  src={product.thumbnail}
                  className="card-img-top p-3"
                  alt={product.title}
                  style={{ height: "200px", objectFit: "contain" }}
                />
                <div
                  className="card-body d-flex flex-column"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  <h5 className="card-title">{product.title}</h5>
                  <p className="fw-bold">${product.price}</p>
                  <div className="mt-auto d-flex justify-content-between">
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => toggleWishlist(product)}
                    >
                      Remove
                    </button>
                    <button
                      className="btn btn-sm btn-primary"
                      style={{
                        backgroundColor: "#ffbc28",
                        border: "none",
                        color: "#000",
                        fontFamily: "poppins",
                      }}
                      onClick={() => addToCart(product)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default WishlistPage;
