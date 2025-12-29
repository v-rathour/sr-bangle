import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Navbar.css';

const Navbar = () => {
  const { user, logout, isAdmin } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-text">S.R. Bangle</span>
        </Link>
        
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/products" className="navbar-link">Products</Link>
          </li>
          
          {user ? (
            <>
              {isAdmin() && (
                <li className="navbar-item">
                  <Link to="/add-product" className="navbar-link">Add Product</Link>
                </li>
              )}
              <li className="navbar-item">
                <span className="navbar-user">Welcome, {user.name} ({user.role})</span>
              </li>
              <li className="navbar-item">
                <button onClick={handleLogout} className="navbar-button">Logout</button>
              </li>
            </>
          ) : (
            <>
              <li className="navbar-item">
                <Link to="/login" className="navbar-link">Login</Link>
              </li>
              <li className="navbar-item">
                <Link to="/signup" className="navbar-link">Signup</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;


