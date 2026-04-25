import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useTheme } from '../hooks/useTheme';
import './Header.css';

const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useTheme();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    if (!mobileMenuOpen) return undefined;

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [mobileMenuOpen]);

  return (
    <header className={`header ${mobileMenuOpen ? 'mobile-menu-is-open' : ''}`}>
      <div className="header-content">
        <Link to="/" className="logo" aria-label="T-Goda home">
          <span className="logo-mark" aria-hidden="true">T</span>
          <span className="logo-word">
            <span>T</span><span className="logo-hyphen">-</span><span>Goda</span>
          </span>
        </Link>
        <nav className="nav-links" aria-label="Primary navigation">
          <Link to="/search" className={`nav-link ${location.pathname === '/' || location.pathname === '/search' ? 'active' : ''}`}>Hotels</Link>
          <Link to="/flights" className={`nav-link ${location.pathname === '/flights' ? 'active' : ''}`}>Flights</Link>
          <Link to="/bundles" className={`nav-link ${location.pathname === '/bundles' ? 'active' : ''}`}>Bundles</Link>
          <Link to="/activities" className={`nav-link ${location.pathname === '/activities' ? 'active' : ''}`}>Activities</Link>
        </nav>
        <div className="auth-buttons">
          <button
            type="button"
            className="theme-toggle"
            onClick={toggleDarkMode}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            aria-pressed={darkMode}
            title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {darkMode ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>
          <Link to="/login" className="header-link-button">Sign In</Link>
          <Link to="/signup" className="btn btn-primary">Create Account</Link>
        </div>
        <button
          type="button"
          className="mobile-menu-toggle"
          onClick={toggleMobileMenu}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      {mobileMenuOpen && (
        <div className="mobile-menu" id="mobile-menu">
          <nav className="mobile-nav-links" aria-label="Mobile navigation">
            <Link to="/search" className={`mobile-nav-link ${location.pathname === '/' || location.pathname === '/search' ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>Hotels</Link>
            <Link to="/flights" className={`mobile-nav-link ${location.pathname === '/flights' ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>Flights</Link>
            <Link to="/bundles" className={`mobile-nav-link ${location.pathname === '/bundles' ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>Bundles</Link>
            <Link to="/activities" className={`mobile-nav-link ${location.pathname === '/activities' ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>Activities</Link>
          </nav>
          <div className="mobile-auth-buttons">
            <button
              type="button"
              className="mobile-theme-toggle"
              onClick={toggleDarkMode}
              aria-pressed={darkMode}
            >
              {darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            </button>
            <Link to="/login" className="header-link-button" onClick={() => setMobileMenuOpen(false)}>Sign In</Link>
            <Link to="/signup" className="btn btn-primary" onClick={() => setMobileMenuOpen(false)}>Create Account</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
