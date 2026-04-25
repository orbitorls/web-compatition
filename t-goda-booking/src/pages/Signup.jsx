import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Auth.css';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    console.log('Signup:', { name, email, password });
    alert('Account created successfully! (Demo)');
  };

  return (
    <div className="auth-page">
      <Header />
      <main className="main-content auth-main">
        <div className="auth-container">
          <div className="auth-box">
            <h1>Create Account</h1>
            <p>Join T-Goda and start your journey today!</p>
            <form className="auth-form" onSubmit={handleSubmit}>
              <label>
                <span>Full Name</span>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  required
                />
              </label>
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
                  placeholder="Create a password"
                  required
                />
              </label>
              <label>
                <span>Confirm Password</span>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm your password"
                  required
                />
              </label>
              <div className="auth-agreement">
                <label>
                  <input type="checkbox" required /> I agree to the{' '}
                  <Link to="#">Terms of Service</Link> and{' '}
                  <Link to="#">Privacy Policy</Link>
                </label>
              </div>
              <button type="submit" className="btn btn-primary auth-submit">
                Create Account
              </button>
            </form>
            <p className="auth-footer">
              Already have an account? <Link to="/login">Sign In</Link>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Signup;
