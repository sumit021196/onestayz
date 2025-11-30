import React from 'react';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import '../styles/Home.css';

const Home = () => {
    return (
        <div className="home-page">
            <Helmet>
                <title>Onestayz by Zipcode - Luxury Hotel in Gurugram Sector 70A</title>
                <meta name="description" content="Experience luxury at Onestayz by Zipcode, Sector 70A, Gurugram. Premium rooms, fine dining, and event spaces for a memorable stay." />
            </Helmet>
            <Hero />

            {/* About Preview Section */}
            <section className="section-padding container">
                <div className="text-center" style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <span className="section-subtitle">Welcome</span>
                    <h2 className="section-title">A Sanctuary of Elegance</h2>
                    <p className="section-text">
                        Located in the prime sector of 70A, Gurugram, <strong>Onestayz by Zipcode</strong> offers a perfect blend of luxury and comfort.
                        Whether you are traveling for business or leisure, our premium amenities and exceptional service ensure a memorable stay.
                    </p>
                    <div className="divider-center"></div>
                    <Link to="/about" className="btn btn-secondary" style={{ marginTop: '2rem' }}>Discover More</Link>
                </div>
            </section>

            {/* Featured Amenities Section */}
            <section className="section-padding bg-cream">
                <div className="container">
                    <div className="text-center mb-lg">
                        <span className="section-subtitle">Amenities</span>
                        <h2 className="section-title">Curated for Comfort</h2>
                    </div>
                    <div className="grid grid-3 amenities-grid">
                        <div className="amenity-card">
                            <div className="amenity-icon">📶</div>
                            <h3>High-Speed Wi-Fi</h3>
                            <p>Stay connected with complimentary high-speed internet access throughout the property.</p>
                        </div>
                        <div className="amenity-card">
                            <div className="amenity-icon">🍽️</div>
                            <h3>Fine Dining</h3>
                            <p>Indulge in culinary delights at our multi-cuisine restaurant and lounge.</p>
                        </div>
                        <div className="amenity-card">
                            <div className="amenity-icon">🎉</div>
                            <h3>Event Spaces</h3>
                            <p>Host grand events in our banquet hall or scenic rooftop area.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Visual Showcase Section (New) */}
            <section className="section-padding container">
                <div className="grid grid-2 gap-lg items-center">
                    <div className="showcase-content">
                        <span className="section-subtitle">Dining</span>
                        <h2 className="section-title">Exquisite Flavors</h2>
                        <p className="section-text">
                            Experience a culinary journey at our signature restaurant. From local delicacies to international favorites, every dish is a masterpiece.
                        </p>
                        <Link to="/dining" className="btn btn-primary mt-md">View Menu</Link>
                    </div>
                    <div className="showcase-image">
                        <img src="/assets/dining.png" alt="Fine Dining Restaurant" />
                    </div>
                </div>
            </section>

            <section className="section-padding bg-cream">
                <div className="container">
                    <div className="grid grid-2 gap-lg items-center reverse-mobile">
                        <div className="showcase-image">
                            <img src="/assets/event.png" alt="Luxury Event Hall" />
                        </div>
                        <div className="showcase-content">
                            <span className="section-subtitle">Events</span>
                            <h2 className="section-title">Grand Celebrations</h2>
                            <p className="section-text">
                                Host your special occasions in our grand banquet hall or rooftop area. Perfect for weddings, corporate events, and social gatherings.
                            </p>
                            <Link to="/events" className="btn btn-primary mt-md">Plan Your Event</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Rooms Preview Section */}
            <section className="section-padding container">
                <div className="grid grid-2 gap-lg items-center">
                    <div className="room-preview-image">
                        <img src="/assets/room.avif" alt="Luxury Room" />
                    </div>
                    <div className="room-preview-content">
                        <span className="section-subtitle">Accommodation</span>
                        <h2 className="section-title">Rest in Luxury</h2>
                        <p className="section-text">
                            Our rooms are designed with your comfort in mind, featuring modern decor, plush bedding, and all the amenities you need for a relaxing stay.
                        </p>
                        <ul className="feature-list">
                            <li>✓ Air Conditioning & Heating</li>
                            <li>✓ Flat-screen TV with Satellite Channels</li>
                            <li>✓ Mini-bar & Tea/Coffee Maker</li>
                            <li>✓ 24-Hour Room Service</li>
                        </ul>
                        <Link to="/rooms" className="btn btn-primary mt-md">View All Rooms</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
