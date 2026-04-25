import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-sections">
          <div className="footer-section footer-brand">
            <div className="footer-logo">T-Goda</div>
            <p className="footer-description">Making world travel accessible, affordable, and delightful for everyone since 2024. Your journey starts here.</p>
            <p className="footer-copyright">© 2024 T-Goda Booking. All rights reserved.</p>
            <div className="social-links">
              <a href="#" className="social-link">f</a>
              <a href="#" className="social-link">◎</a>
              <a href="#" className="social-link">t</a>
            </div>
          </div>
          <div className="footer-section">
            <h3>Company</h3>
            <ul className="footer-links">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Support</h3>
            <ul className="footer-links">
              <li><a href="#">Support</a></li>
              <li><a href="#">Mobile App</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Legal</h3>
            <ul className="footer-links">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
