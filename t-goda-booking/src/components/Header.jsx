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
          <Link to="/flights" className={`nav-link ${location.pathname === '/flights' ? 'active' : ''}`}>Flights</Link>
          <Link to="/bundles" className={`nav-link ${location.pathname === '/bundles' ? 'active' : ''}`}>Bundles</Link>
          <Link to="/activities" className={`nav-link ${location.pathname === '/activities' ? 'active' : ''}`}>Activities</Link>
        </nav>
        <div className="auth-buttons">
          <Link to="/login" className="header-link-button">Sign In</Link>
          <Link to="/signup" className="btn btn-primary">Create Account</Link>
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
            <Link to="/flights" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Flights</Link>
            <Link to="/bundles" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Bundles</Link>
            <Link to="/activities" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Activities</Link>
          </nav>
          <div className="mobile-auth-buttons">
            <Link to="/login" className="header-link-button" onClick={() => setMobileMenuOpen(false)}>Sign In</Link>
            <Link to="/signup" className="btn btn-primary" onClick={() => setMobileMenuOpen(false)}>Create Account</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
