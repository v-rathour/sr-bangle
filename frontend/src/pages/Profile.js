import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import api from '../utils/api';
import './Profile.css';

const Profile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [userStats, setUserStats] = useState({
    totalProducts: 0,
    productsAdded: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }

    fetchUserStats();
  }, [user, navigate]);

  const fetchUserStats = async () => {
    try {
      setLoading(true);
      const response = await api.get('/products');
      const products = response.data;
      
      const userProducts = products.filter(p => 
        p.addedBy && (p.addedBy._id === user.id || p.addedBy === user.id)
      );

      setUserStats({
        totalProducts: products.length,
        productsAdded: userProducts.length
      });
    } catch (error) {
      console.error('Error fetching stats:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  if (!user) {
    return null;
  }

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-avatar">
          <div className="avatar-circle">
            {user.name.charAt(0).toUpperCase()}
          </div>
          {user.role === 'admin' && (
            <span className="admin-badge">Admin</span>
          )}
        </div>
        <h1 className="profile-name">{user.name}</h1>
        <p className="profile-email">{user.email}</p>
        <div className="profile-role">
          <span className={`role-badge ${user.role}`}>
            {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
          </span>
        </div>
      </div>

      <div className="profile-content">
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon">📦</div>
            <div className="stat-info">
              <h3 className="stat-value">{loading ? '...' : userStats.totalProducts}</h3>
              <p className="stat-label">Total Products</p>
            </div>
          </div>

          {user.role === 'admin' && (
            <div className="stat-card">
              <div className="stat-icon">➕</div>
              <div className="stat-info">
                <h3 className="stat-value">{loading ? '...' : userStats.productsAdded}</h3>
                <p className="stat-label">Products Added</p>
              </div>
            </div>
          )}

          <div className="stat-card">
            <div className="stat-icon">👤</div>
            <div className="stat-info">
              <h3 className="stat-value">{user.role === 'admin' ? 'Admin' : 'Seller'}</h3>
              <p className="stat-label">Account Type</p>
            </div>
          </div>
        </div>

        <div className="profile-actions">
          <div className="action-section">
            <h2 className="section-title">Quick Actions</h2>
            <div className="action-buttons">
              <button 
                className="action-btn primary"
                onClick={() => navigate('/products')}
              >
                <span className="btn-icon">🛍️</span>
                <span>View Products</span>
              </button>
              
              {user.role === 'admin' && (
                <button 
                  className="action-btn primary"
                  onClick={() => navigate('/add-product')}
                >
                  <span className="btn-icon">➕</span>
                  <span>Add Product</span>
                </button>
              )}
              
              <button 
                className="action-btn secondary"
                onClick={() => navigate('/')}
              >
                <span className="btn-icon">🏠</span>
                <span>Go Home</span>
              </button>
            </div>
          </div>

          <div className="action-section">
            <h2 className="section-title">Account Settings</h2>
            <div className="info-card">
              <div className="info-item">
                <span className="info-label">Email:</span>
                <span className="info-value">{user.email}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Role:</span>
                <span className="info-value capitalize">{user.role}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Member Since:</span>
                <span className="info-value">Active User</span>
              </div>
            </div>
          </div>

          <div className="action-section">
            <button 
              className="logout-btn"
              onClick={handleLogout}
            >
              <span className="btn-icon">🚪</span>
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

