import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Rooms = () => {
    return (
        <div className="rooms-page">
            <Helmet>
                <title>Luxury Rooms & Suites - Onestayz by Zipcode</title>
                <meta name="description" content="Explore our luxurious rooms and suites at Onestayz by Zipcode. Designed for comfort with premium amenities." />
            </Helmet>

            {/* Hero Section */}
            <section className="hero" style={{ height: '60vh', minHeight: '400px', backgroundImage: 'url(/assets/room.avif)' }}>
                <div className="hero-overlay"></div>
                <div className="hero-content container">
                    <h1 className="hero-title" style={{ fontSize: '3.5rem' }}>Accommodations</h1>
                    <p className="hero-subtitle">Rest in Absolute Comfort</p>
                </div>
            </section>

            {/* Room List */}
            <section className="section-padding container">
                {/* Deluxe Room */}
                <div className="grid grid-2 gap-lg items-center mb-lg">
                    <div className="room-preview-image">
                        <img src="/assets/room.avif" alt="Deluxe Room" />
                    </div>
                    <div>
                        <span className="section-subtitle">Comfort</span>
                        <h2 className="section-title">Deluxe Room</h2>
                        <p className="section-text">
                            Our Deluxe Rooms offer a spacious retreat with contemporary decor. Enjoy a plush king-sized bed, a dedicated workspace, and a marble bathroom with premium toiletries.
                        </p>
                        <ul className="feature-list">
                            <li>✓ 350 sq. ft. of Space</li>
                            <li>✓ King-sized Bed</li>
                            <li>✓ City View</li>
                            <li>✓ High-speed Wi-Fi</li>
                        </ul>
                        <Link to="/contact" className="btn btn-primary mt-md">Book Now</Link>
                    </div>
                </div>

                {/* Executive Suite */}
                <div className="grid grid-2 gap-lg items-center reverse-mobile">
                    <div>
                        <span className="section-subtitle">Luxury</span>
                        <h2 className="section-title">Executive Suite</h2>
                        <p className="section-text">
                            Experience the pinnacle of luxury in our Executive Suite. Featuring a separate living area, a private balcony, and exclusive access to the executive lounge.
                        </p>
                        <ul className="feature-list">
                            <li>✓ 550 sq. ft. of Space</li>
                            <li>✓ Separate Living Room</li>
                            <li>✓ Private Balcony</li>
                            <li>✓ Bathtub & Rain Shower</li>
                        </ul>
                        <Link to="/contact" className="btn btn-primary mt-md">Book Now</Link>
                    </div>
                    <div className="room-preview-image">
                        <img src="/assets/room.avif" alt="Executive Suite" style={{ filter: 'brightness(0.9)' }} />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Rooms;
