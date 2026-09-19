// Navbar.jsx
import { useState } from 'react';

import { Link } from 'react-router-dom';

import './Styles/Nav.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span></span>
      </div>

      {/* Desktop links */}
      <div className="navbar-links">
        <Link to="/" className="btn btn-secondary">Home</Link>
        <Link to="/" className="btn btn-secondary">Menu</Link>
        <Link to="/" className="btn btn-secondary">Contact</Link>
        <Link to="/" className="btn btn-primary">Reserve a Table</Link>
      </div>

      {/* Hamburger toggle */}
      <button
        className={`hamburger ${isOpen ? 'hamburger-open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Overlay menu */}
      <div className={`nav-overlay ${isOpen ? 'nav-overlay-open' : ''}`}>
        <h1 className='hero-title'>Amber&Oak</h1>
        <Link to="/" className="btn btn-secondary overlay-link" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/" className="btn btn-secondary overlay-link" onClick={() => setIsOpen(false)}>Menu</Link>
        <Link to="/" className="btn btn-secondary overlay-link" onClick={() => setIsOpen(false)}>Contact</Link>
        <Link to="/" className="btn overlay-link btn-primary" onClick={() => setIsOpen(false)}>Reserve a Table</Link>
      </div>
    </nav>
  );
}