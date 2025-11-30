import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Dining = () => {
    return (
        <div className="dining-page">
            <Helmet>
                <title>Fine Dining - Onestayz by Zipcode</title>
                <meta name="description" content="Savor exquisite flavors at Onestayz by Zipcode. Multi-cuisine restaurant and premium lounge in Gurugram." />
            </Helmet>

            {/* Hero Section */}
            <section className="hero" style={{ height: '60vh', minHeight: '400px', backgroundImage: 'url(/assets/dining.png)' }}>
                <div className="hero-overlay"></div>
                <div className="hero-content container">
                    <h1 className="hero-title" style={{ fontSize: '3.5rem' }}>Culinary Excellence</h1>
                    <p className="hero-subtitle">A Symphony of Flavors</p>
                </div>
            </section>

            {/* Restaurant Section */}
            <section className="section-padding container">
                <div className="grid grid-2 gap-lg items-center">
                    <div>
                        <span className="section-subtitle">The Restaurant</span>
                        <h2 className="section-title">Signature Flavors</h2>
                        <p className="section-text">
                            Embark on a gastronomic journey at our signature restaurant. Our master chefs curate a menu that blends local ingredients with international techniques, creating dishes that are as visually stunning as they are delicious.
                        </p>
                        <p className="section-text">
                            From authentic Indian curries to continental classics, every meal is a celebration of taste.
                        </p>
                        <Link to="/contact" className="btn btn-primary mt-md">Reserve a Table</Link>
                    </div>
                    <div className="showcase-image">
                        <img src="/assets/dining.png" alt="Restaurant Interior" />
                    </div>
                </div>
            </section>

            {/* Lounge Section */}
            <section className="section-padding bg-cream">
                <div className="container">
                    <div className="grid grid-2 gap-lg items-center reverse-mobile">
                        <div className="showcase-image">
                            <img src="/assets/dining.png" alt="Lounge Bar" style={{ filter: 'hue-rotate(15deg)' }} />
                        </div>
                        <div>
                            <span className="section-subtitle">The Lounge</span>
                            <h2 className="section-title">Unwind in Style</h2>
                            <p className="section-text">
                                Relax after a long day at our premium lounge bar. Enjoy a curated selection of fine wines, single malts, and handcrafted cocktails in a sophisticated setting.
                            </p>
                            <ul className="feature-list">
                                <li>✓ Premium Spirits Collection</li>
                                <li>✓ Signature Cocktails</li>
                                <li>✓ Live Music on Weekends</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Dining;
