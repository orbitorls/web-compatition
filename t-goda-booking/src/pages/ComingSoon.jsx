import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './ComingSoon.css';

const ComingSoon = ({ title = "Coming Soon" }) => {
  return (
    <div className="coming-soon-page">
      <Header />
      <main className="main-content coming-soon-main">
        <div className="coming-soon-container">
          <div className="coming-soon-box">
            <div className="coming-soon-icon">🚀</div>
            <h1>{title}</h1>
            <p>We're working hard to bring you this feature. Stay tuned for updates!</p>
            <Link to="/" className="btn btn-primary">Back to Home</Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ComingSoon;
