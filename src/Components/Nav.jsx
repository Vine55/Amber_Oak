import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Styles/Nav.css';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Menu', to: '/' },
  { label: 'About', to: '/' },
  { label: 'Contact', to: '/' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand" aria-label="Amber & Oak home">
        <span className="brand-main">Amber</span>
        <span className="brand-symbol">&</span>
        <span className="brand-main">Oak</span>
      </Link>

      <div className="navbar-links">
        {navLinks.map((link) => (
          <Link key={link.label} to={link.to} className="btn btn-secondary">
            {link.label}
          </Link>
        ))}

        <Link to="/reservations" className="btn btn-primary">
          Reserve a Table
        </Link>
      </div>

      <button
        type="button"
        className={`hamburger ${isOpen ? 'hamburger-open' : ''}`}
        onClick={() => setIsOpen((current) => !current)}
        aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div
        id="mobile-navigation"
        className={`nav-overlay ${isOpen ? 'nav-overlay-open' : ''}`}
        inert={!isOpen}
      >
        <p className="nav-overlay-brand">Amber & Oak</p>

        <div className="nav-overlay-links">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="btn btn-secondary overlay-link"
              tabIndex={isOpen ? 0 : -1}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <Link
            to="/reservations"
            className="btn btn-primary"
            tabIndex={isOpen ? 0 : -1}
          >
            Reserve a Table
          </Link>
        </div>
      </div>
    </nav>
  );
}