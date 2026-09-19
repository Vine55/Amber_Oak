// Footer.jsx
import { Link } from 'react-router-dom';
import './Styles/Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <h3>Amber & Oak</h3>
          <p className="text-small">
            Wood-fired dishes, warm evenings, and a table always waiting for you.
          </p>
        </div>

        <div className="footer-links">
          <h4>Explore</h4>
          <Link to="/">Home</Link>
          <Link to="/">Menu</Link>
          <Link to="/">Contact</Link>
        </div>

        <div className="footer-contact">
          <h4>Visit Us</h4>
          <p className="text-small">123 Oak Street, Portland, OR</p>
          <p className="text-small">Tue–Sun, 5pm–11pm</p>
          <a href="tel:+2348056012500">(+234) 805 601 2500</a>
        </div>
      </div>

      <div className="container footer-bottom">
        <p className="text-small">&copy; 2026 Amber & Oak. All rights reserved.</p>
        <p className="text-small footer-credit">
          Site by{' '}
          <a href="/" target="_blank" rel="noopener noreferrer">
            Vine55 — Web Design
          </a>
        </p>
      </div>
    </footer>
  );
}