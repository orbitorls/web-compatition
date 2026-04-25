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
          <Link to="/search" className={`nav-link ${location.pathname === '/' || location.pathname === '/search' ? 'active' : ''}`}>Hotels</Link>
          <Link to="#" className="nav-link">Flights</Link>
          <Link to="#" className="nav-link">Bundles</Link>
          <Link to="#" className="nav-link">Activities</Link>
        </nav>
        <div className="auth-buttons">
          <button className="header-link-button">Sign In</button>
          <button className="btn btn-primary">Create Account</button>
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
            <Link to="/search" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Hotels</Link>
            <Link to="#" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Flights</Link>
            <Link to="#" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Bundles</Link>
            <Link to="#" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Activities</Link>
          </nav>
          <div className="mobile-auth-buttons">
            <button className="header-link-button">Sign In</button>
            <button className="btn btn-primary">Create Account</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
