import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import api from '../utils/api';
import './AddProduct.css';

const AddProduct = () => {
  const { user, isAdmin } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: '',
    category: '',
    imageUrl: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!user) {
      navigate('/login');
    } else if (!isAdmin()) {
      navigate('/');
    }
  }, [user, isAdmin, navigate]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError('');
    setSuccess('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    // Validation
    if (!formData.name || !formData.price || !formData.description || !formData.category || !formData.imageUrl) {
      setError('Please fill in all fields');
      setLoading(false);
      return;
    }

    if (isNaN(formData.price) || parseFloat(formData.price) < 0) {
      setError('Please enter a valid price');
      setLoading(false);
      return;
    }

    try {
      const response = await api.post('/products', {
        ...formData,
        price: parseFloat(formData.price),
      });

      setSuccess('Product added successfully!');
      setFormData({
        name: '',
        price: '',
        description: '',
        category: '',
        imageUrl: '',
      });

      // Redirect to products page after 2 seconds
      setTimeout(() => {
        navigate('/products');
      }, 2000);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to add product. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (!user || !isAdmin()) {
    return null;
  }

  return (
    <div className="add-product-container">
      <div className="add-product-card">
        <h2 className="add-product-title">Add New Bangle Product</h2>
        <p className="add-product-subtitle">Fill in the details to add a new product to the collection</p>

        {error && <div className="error-message">{error}</div>}
        {success && <div className="success-message">{success}</div>}

        <form onSubmit={handleSubmit} className="add-product-form">
          <div className="form-group">
            <label htmlFor="name">Product Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="e.g., Elegant Gold Bangle Set"
            />
          </div>

          <div className="form-group">
            <label htmlFor="price">Price (₹) *</label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
              min="0"
              step="0.01"
              placeholder="e.g., 2999"
            />
          </div>

          <div className="form-group">
            <label htmlFor="category">Category *</label>
            <input
              type="text"
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              placeholder="e.g., Traditional, Modern, Designer"
            />
          </div>

          <div className="form-group">
            <label htmlFor="imageUrl">Image URL *</label>
            <input
              type="url"
              id="imageUrl"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
              required
              placeholder="https://example.com/image.jpg"
            />
            <small className="form-help">
              You can use image URLs from Unsplash, Google Images, or any image hosting service
            </small>
          </div>

          <div className="form-group">
            <label htmlFor="description">Description *</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows="5"
              placeholder="Describe the product features, materials, and design..."
            />
          </div>

          <button type="submit" className="add-product-button" disabled={loading}>
            {loading ? 'Adding Product...' : 'Add Product'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;


