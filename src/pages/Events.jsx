import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Events = () => {
    return (
        <div className="events-page">
            <Helmet>
                <title>Events & Banquets - Onestayz by Zipcode</title>
                <meta name="description" content="Host grand events at Onestayz by Zipcode. Luxury banquet hall and rooftop venue in Gurugram Sector 70A." />
            </Helmet>

            {/* Hero Section */}
            <section className="hero" style={{ height: '60vh', minHeight: '400px', backgroundImage: 'url(/assets/event.png)' }}>
                <div className="hero-overlay"></div>
                <div className="hero-content container">
                    <h1 className="hero-title" style={{ fontSize: '3.5rem' }}>Grand Celebrations</h1>
                    <p className="hero-subtitle">Memories Made Magnificent</p>
                </div>
            </section>

            {/* Banquet Hall */}
            <section className="section-padding container">
                <div className="grid grid-2 gap-lg items-center">
                    <div className="showcase-image">
                        <img src="/assets/event.png" alt="Banquet Hall" />
                    </div>
                    <div>
                        <span className="section-subtitle">The Venue</span>
                        <h2 className="section-title">Royal Banquet Hall</h2>
                        <p className="section-text">
                            Our pillar-less banquet hall is the epitome of grandeur. With crystal chandeliers, customizable lighting, and spacious interiors, it is the perfect setting for weddings, receptions, and corporate galas.
                        </p>
                        <ul className="feature-list">
                            <li>✓ Capacity: Up to 500 Guests</li>
                            <li>✓ Customizable Decor</li>
                            <li>✓ State-of-the-art Audio/Visual</li>
                            <li>✓ Dedicated Event Planning Team</li>
                        </ul>
                        <Link to="/contact" className="btn btn-primary mt-md">Inquire Now</Link>
                    </div>
                </div>
            </section>

            {/* Rooftop Section */}
            <section className="section-padding bg-cream">
                <div className="container">
                    <div className="grid grid-2 gap-lg items-center reverse-mobile">
                        <div>
                            <span className="section-subtitle">Open Air</span>
                            <h2 className="section-title">Skyline Rooftop</h2>
                            <p className="section-text">
                                Celebrate under the stars at our scenic rooftop venue. Offering panoramic views of the Gurugram skyline, it provides a breathtaking backdrop for cocktail parties and intimate gatherings.
                            </p>
                            <Link to="/contact" className="btn btn-primary mt-md">Book Rooftop</Link>
                        </div>
                        <div className="showcase-image">
                            <img src="/assets/event.png" alt="Rooftop Venue" style={{ filter: 'hue-rotate(-10deg) contrast(1.1)' }} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Events;
