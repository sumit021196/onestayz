import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
    const [expanded, setExpanded] = React.useState({ links: true, contact: true });

    const toggleSection = (section) => {
        if (window.innerWidth < 768) {
            setExpanded(prev => ({ ...prev, [section]: !prev[section] }));
        }
    };

    // Auto-collapse on mobile initial load
    React.useEffect(() => {
        if (window.innerWidth < 768) {
            setExpanded({ links: false, contact: false });
        }
    }, []);

    return (
        <footer className="footer">
            <div className="container footer-grid">
                <div className="footer-brand">
                    <h3>Onestayz</h3>
                    <p>Experience luxury and comfort in the heart of Gurugram.</p>
                </div>

                <div className="footer-links">
                    <h4 onClick={() => toggleSection('links')} className={expanded.links ? 'active' : ''}>
                        Quick Links <span className="accordion-icon">+</span>
                    </h4>
                    <ul className={expanded.links ? 'show' : ''}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/rooms">Rooms</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>

                <div className="footer-contact">
                    <h4 onClick={() => toggleSection('contact')} className={expanded.contact ? 'active' : ''}>
                        Contact Us <span className="accordion-icon">+</span>
                    </h4>
                    <div className={`contact-info ${expanded.contact ? 'show' : ''}`}>
                        <p>Sector 70A, Gurugram, Haryana 122101</p>
                        <p>Email: info@onestayz.com</p>
                        <p>Phone: +91 123 456 7890</p>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Onestayz. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
