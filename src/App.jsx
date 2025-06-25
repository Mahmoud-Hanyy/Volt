import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import CartPage from './pages/CartPage';
import WishlistPage from './pages/WishlistPage';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Router>
        <Navbar />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/wishlist" element={<WishlistPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
