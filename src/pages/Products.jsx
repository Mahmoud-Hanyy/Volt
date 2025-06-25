// src/pages/Products.jsx
import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { useCart } from '../context/CartContext';


function Products() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();
  useEffect(() => {
    fetch('https://dummyjson.com/products/category/smartphones') // You can change the category
      .then(res => res.json())
      .then(data => setProducts(data.products));
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  

  return (
    <div>
      <h2 className="mb-4">Electronics</h2>
      <div className="row">
        {products.length > 0 ? (
          products.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))
        ) : (
          <p>Loading products...</p>
        )}
      </div>
    </div>
  );
}

export default Products;
