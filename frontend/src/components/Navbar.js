import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Navbar.css';

const Navbar = () => {
  const { user, logout, isAdmin } = useAuth();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <span className="logo-text">S.R. Bangle</span>
        </Link>
        
        {/* Hamburger Menu Icon */}
        <button 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="navbar-item">
            <Link to="/" className="navbar-link" onClick={closeMenu}>Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/products" className="navbar-link" onClick={closeMenu}>Products</Link>
          </li>
          
          {user ? (
            <>
              {isAdmin() && (
                <li className="navbar-item">
                  <Link to="/add-product" className="navbar-link" onClick={closeMenu}>Add Product</Link>
                </li>
              )}
              <li className="navbar-item">
                <Link to="/profile" className="navbar-link" onClick={closeMenu}>
                  <span className="navbar-user-icon">👤</span>
                  <span className="navbar-user-text">Profile</span>
                </Link>
              </li>
              <li className="navbar-item">
                <span className="navbar-user-info">Welcome, {user.name}</span>
                <span className="navbar-user-role">({user.role})</span>
              </li>
              <li className="navbar-item">
                <button onClick={handleLogout} className="navbar-button">Logout</button>
              </li>
            </>
          ) : (
            <>
              <li className="navbar-item">
                <Link to="/login" className="navbar-link" onClick={closeMenu}>Login</Link>
              </li>
              <li className="navbar-item">
                <Link to="/signup" className="navbar-link" onClick={closeMenu}>Signup</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
