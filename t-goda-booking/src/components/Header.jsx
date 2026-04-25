import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import './Header.css';

const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo">T-Goda</Link>
        <nav className="nav-links">
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
          <Link to="/search" className={`nav-link ${location.pathname === '/search' ? 'active' : ''}`}>Hotels</Link>
          <Link to="#" className="nav-link">About</Link>
          <Link to="#" className="nav-link">Contact</Link>
        </nav>
        <div className="auth-buttons">
          <button className="btn btn-secondary">Sign Up</button>
          <button className="btn btn-primary">Log In</button>
        </div>
        <button className="mobile-menu-toggle" onClick={toggleMobileMenu} aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      {mobileMenuOpen && (
        <div className="mobile-menu">
          <nav className="mobile-nav-links">
            <Link to="/" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link to="/search" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Hotels</Link>
            <Link to="#" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>About</Link>
            <Link to="#" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
          </nav>
          <div className="mobile-auth-buttons">
            <button className="btn btn-secondary">Sign Up</button>
            <button className="btn btn-primary">Log In</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
