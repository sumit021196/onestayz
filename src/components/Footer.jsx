import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-grid">
                <div className="footer-brand">
                    <h3>Onestayz by Zipcode</h3>
                    <p>Experience luxury and comfort in the heart of Gurugram.</p>
                </div>

                <div className="footer-links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/rooms">Rooms</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>

                <div className="footer-contact">
                    <h4>Contact Us</h4>
                    <p>Sector 70A, Gurugram, Haryana 122101</p>
                    <p>Email: info@onestayz.com</p>
                    <p>Phone: +91 123 456 7890</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Onestayz by Zipcode. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
