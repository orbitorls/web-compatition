import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-sections">
          <div className="footer-section footer-brand">
            <div className="footer-logo">T-Goda</div>
            <p className="footer-description">Find your perfect stay with unbeatable prices worldwide.</p>
            <div className="social-links">
              <a href="#" className="social-link">f</a>
              <a href="#" className="social-link">in</a>
              <a href="#" className="social-link">t</a>
            </div>
          </div>
          <div className="footer-section">
            <h3>Company</h3>
            <ul className="footer-links">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Support</h3>
            <ul className="footer-links">
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Safety</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Legal</h3>
            <ul className="footer-links">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copyright">© 2024 T-Goda. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
