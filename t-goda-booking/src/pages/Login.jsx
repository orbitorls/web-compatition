import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Auth.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login:', { email, password });
    alert('Login successful! (Demo)');
  };

  return (
    <div className="auth-page">
      <Header />
      <main className="main-content auth-main">
        <div className="auth-container">
          <div className="auth-box">
            <h1>Sign In</h1>
            <p>Welcome back! Please sign in to continue.</p>
            <form className="auth-form" onSubmit={handleSubmit}>
              <label>
                <span>Email</span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                />
              </label>
              <label>
                <span>Password</span>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                />
              </label>
              <div className="auth-options">
                <label className="remember-me">
                  <input type="checkbox" /> Remember me
                </label>
                <Link to="#" className="forgot-password">Forgot password?</Link>
              </div>
              <button type="submit" className="btn btn-primary auth-submit">
                Sign In
              </button>
            </form>
            <p className="auth-footer">
              Don't have an account? <Link to="/signup">Create Account</Link>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
