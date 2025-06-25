import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

function Home() {
  return (
    <div className="text-center py-5">
      <h1 className="display-4 fw-bold">Welcome to Volt ⚡</h1>
      <p className="lead text-muted">Shop top-quality electronics with fast delivery and great prices.</p>

      <Link to="/products" className="btn btn-primary btn-lg mt-3 mb-5" 
      style={{backgroundColor:'#ffbc28', border:'none', color: '#000', fontFamily:'poppins'}}>
        Browse Products
      </Link>

      {/* Featured Categories */}
      <section className="container my-5">
        <h2 className="mb-4">Featured Categories</h2>
        <div className="row">
          {[
            { title: 'Laptops', icon: '💻' },
            { title: 'Smartphones', icon: '📱' },
            { title: 'TVs', icon: '📺' },
            { title: 'Accessories', icon: '🎧' },
          ].map(({ title, icon }) => (
            <div key={title} className="col-sm-6 col-md-3 mb-4">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body text-center">
                  <div style={{ fontSize: '2rem' }}>{icon}</div>
                  <h5 className="card-title mt-2">{title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Volt */}
      <section className="bg py-5" style={{backgroundColor: '#f8f9fa'}}>
        <div className="container">
          <h2 className="mb-5">Why Shop with <span style={{color:'#ffbc28'}}>Volt ?</span></h2>
          <div className="row">
            <div className="col-md-4 mb-3">
              <h5>⚡ Fast Delivery</h5>
              <p>We ship your electronics quickly and safely.</p>
            </div>
            <div className="col-md-4 mb-3">
              <h5>🔒 Secure Checkout</h5>
              <p>Protected payments with full data encryption.</p>
            </div>
            <div className="col-md-4 mb-3">
              <h5>💬 24/7 Support</h5>
              <p>We're here whenever you need help or advice.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
