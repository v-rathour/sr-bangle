import React, { useState, useEffect } from 'react';
import api from '../utils/api';
import './Products.css';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await api.get('/products');
      setProducts(response.data);
      setError('');
    } catch (err) {
      setError('Failed to load products. Please try again later.');
      console.error('Error fetching products:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="products-container">
        <div className="loading">Loading products...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="products-container">
        <div className="error">{error}</div>
      </div>
    );
  }

  return (
    <div className="products-container">
      <div className="products-header">
        <h1 className="products-title">Our Bangle Collection</h1>
        <p className="products-subtitle">Discover elegant bangles for every occasion</p>
      </div>

      {products.length === 0 ? (
        <div className="no-products">
          <p>No products available at the moment. Check back soon!</p>
        </div>
      ) : (
        <div className="products-grid">
          {products.map((product) => (
            <div key={product._id} className="product-card">
              <div className="product-image">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x400/1a1a2e/ffd700?text=' + encodeURIComponent(product.name);
                  }}
                />
              </div>
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-category">{product.category}</p>
                <p className="product-description">{product.description}</p>
                <div className="product-footer">
                  <span className="product-price">₹{product.price.toLocaleString()}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;


