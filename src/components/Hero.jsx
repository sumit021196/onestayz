import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-overlay"></div>
            <div className="hero-content container">
                <h1 className="hero-title">Experience Luxury at Onestayz by Zipcode</h1>
                <p className="hero-subtitle">Your premium sanctuary in the heart of Gurugram, Sector 70A.</p>
                <div className="hero-actions">
                    <Link to="/rooms" className="btn btn-primary">View Rooms</Link>
                    <Link to="/contact" className="btn btn-secondary-light">Contact Us</Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;
