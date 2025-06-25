// src/components/ProductCard.jsx
import React from 'react';

function ProductCard({ product, onAddToCart }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm">
        <img src={product.thumbnail} className="card-img-top" alt={product.title} style={{ height: '200px', objectFit: 'cover' }} />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text text-truncate">{product.description}</p>
          <div className="mt-auto">
            <p className="fw-bold">${product.price}</p>
            <button className="btn btn-primary w-100" onClick={() => onAddToCart(product)}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
