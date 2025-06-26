import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import searchAnimation from "../assets/animations/load.json";
import { useCart } from "../context/CartContext";
import ProductCard from "../components/ProductCard";

function Products() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const { addToCart, toggleWishlist } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  const handleToggleWishlist = (id) => {
    toggleWishlist(id);
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/electronics")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error:", err);
        setLoading(false);
      });
  }, []);

  const filtered = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase()),
  );

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
            onChange={(e) => setSearch(e.target.value)}
            style={{ fontFamily: "Poppins, sans-serif" }}
          />
        </div>
      </div>
      <div className="container">
        <div className="row">
          {loading ? (
            <div
              className="d-flex justify-content-center align-items-center w-100"
              style={{ height: "300px" }}
            >
              <Lottie
                animationData={searchAnimation}
                loop={true}
                style={{ height: 200 }}
              />
            </div>
          ) : filtered.length > 0 ? (
            filtered.map((product) => (
              <ProductCard
                key={product.id}
                product={{ ...product, thumbnail: product.image }}
                onAddToCart={() =>
                  handleAddToCart({ ...product, thumbnail: product.image })
                }
                onToggleWishlist={() => handleToggleWishlist(product.id)}
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
