import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useCart } from "../context/CartContext";

function Products() {
  const { addToCart } = useCart();
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/electronics")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFiltered(data);
      });
  }, []);

  useEffect(() => {
    if (search.trim() === "") {
      setFiltered(products);
    } else {
      const result = products.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase()),
      );
      setFiltered(result);
    }
  }, [search, products]);

  const handleAddToCart = (product) => {
    addToCart({
      ...product,
      thumbnail: product.image, // remap for consistency
    });
  };

  return (
    <div className="products-page">
      <div className="text-center mb-5">
        <br />
        <h2 className="fw-bold">Electronics Collection</h2>
        <p className="text-muted">
          Top-quality gadgets and gear at unbeatable prices.
        </p>
      </div>

      <div className="row mb-4 justify-content-center">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control shadow-sm"
            placeholder="Search electronics..."
            value={search}
            onChange={(e) => setSearch(e.target.value)} // Changeable
            style={{ fontFamily: "Poppins, sans-serif" }}
          />
        </div>
      </div>

      <div className="container">
        <div className="row">
          {filtered.length > 0 ? (
            filtered.map((product) => (
              <ProductCard
                key={product.id}
                product={{ ...product, thumbnail: product.image }}
                onAddToCart={handleAddToCart}
              />
            ))
          ) : (
            <div className="text-center">
              <p className="lead">No electronics found.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Products;
