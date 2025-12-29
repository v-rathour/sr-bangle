import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Banner Section */}
      <section className="banner">
        <div className="banner-content">
          <h1 className="banner-title">Elegant Bangles for Every Occasion</h1>
          <p className="banner-subtitle">
            Discover our exquisite collection of handcrafted bangles that add grace and beauty to your style
          </p>
          <Link to="/products" className="banner-button">
            Shop Now
          </Link>
        </div>
        <div className="banner-image">
          <img 
            src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80" 
            alt="Elegant bangles collection"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/800x600/1a1a2e/ffd700?text=S.R.+Bangle';
            }}
          />
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-section">
        <div className="container">
          <h2 className="section-title">Featured Collections</h2>
          <div className="featured-grid">
            <div className="featured-card">
              <div className="featured-image">
                <img 
                  src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&q=80" 
                  alt="Traditional Bangles"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x400/1a1a2e/ffd700?text=Traditional';
                  }}
                />
              </div>
              <h3>Traditional Collection</h3>
              <p>Classic designs that never go out of style</p>
            </div>
            <div className="featured-card">
              <div className="featured-image">
                <img 
                  src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&q=80" 
                  alt="Modern Bangles"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x400/1a1a2e/ffd700?text=Modern';
                  }}
                />
              </div>
              <h3>Modern Collection</h3>
              <p>Contemporary styles for the modern woman</p>
            </div>
            <div className="featured-card">
              <div className="featured-image">
                <img 
                  src="https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=400&q=80" 
                  alt="Designer Bangles"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x400/1a1a2e/ffd700?text=Designer';
                  }}
                />
              </div>
              <h3>Designer Collection</h3>
              <p>Exclusive pieces crafted by master artisans</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-section">
        <div className="container">
          <h2 className="section-title">Why Choose S.R. Bangle?</h2>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">✨</div>
              <h3>Premium Quality</h3>
              <p>Handpicked and verified for excellence</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🎨</div>
              <h3>Unique Designs</h3>
              <p>Exclusive collections you won't find elsewhere</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">💎</div>
              <h3>Authentic Materials</h3>
              <p>Genuine materials with certification</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🚚</div>
              <h3>Fast Delivery</h3>
              <p>Quick and secure shipping to your doorstep</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

