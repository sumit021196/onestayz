import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header-container">
        <Link to="/" className="logo">
          Onestayz by Zipcode
        </Link>

        <nav className={`nav ${isOpen ? 'open' : ''}`}>
          <ul className="nav-list">
            <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
            <li><Link to="/rooms" onClick={() => setIsOpen(false)}>Rooms</Link></li>
            <li><Link to="/dining" onClick={() => setIsOpen(false)}>Dining</Link></li>
            <li><Link to="/events" onClick={() => setIsOpen(false)}>Events</Link></li>
            <li><Link to="/contact" onClick={() => setIsOpen(false)} className="btn btn-primary btn-sm">Book Now</Link></li>
          </ul>
        </nav>

        <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
