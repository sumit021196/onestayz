import React from 'react';
import { Helmet } from 'react-helmet-async';
import '../styles/Home.css'; // Reusing Home styles for consistency

const About = () => {
    return (
        <div className="about-page">
            <Helmet>
                <title>About Us - Onestayz by Zipcode</title>
                <meta name="description" content="Learn about Onestayz by Zipcode, a premier luxury hotel in Gurugram Sector 70A committed to excellence and comfort." />
            </Helmet>

            {/* Hero Section */}
            <section className="hero" style={{ height: '60vh', minHeight: '400px', backgroundImage: 'url(/assets/hero.png)' }}>
                <div className="hero-overlay"></div>
                <div className="hero-content container">
                    <h1 className="hero-title" style={{ fontSize: '3.5rem' }}>Our Story</h1>
                    <p className="hero-subtitle">A Legacy of Hospitality</p>
                </div>
            </section>

            {/* Content Section */}
            <section className="section-padding container">
                <div className="grid grid-2 gap-lg items-center">
                    <div>
                        <span className="section-subtitle">Who We Are</span>
                        <h2 className="section-title">The Onestayz Experience</h2>
                        <p className="section-text">
                            Nestled in the vibrant heart of Gurugram's Sector 70A, <strong>Onestayz by Zipcode</strong> is more than just a hotel; it is a sanctuary of refined elegance.
                            Our journey began with a simple vision: to create a space where modern luxury meets traditional Indian hospitality.
                        </p>
                        <p className="section-text">
                            Every corner of our property is thoughtfully designed to offer tranquility amidst the city's bustle. From our architectural grandeur to our bespoke services, we strive to exceed expectations at every turn.
                        </p>
                    </div>
                    <div className="showcase-image">
                        <img src="/assets/hero.png" alt="Hotel Exterior" style={{ borderRadius: '4px' }} />
                    </div>
                </div>
            </section>

            {/* Vision Section */}
            <section className="section-padding bg-cream">
                <div className="container text-center" style={{ maxWidth: '800px' }}>
                    <span className="section-subtitle">Our Vision</span>
                    <h2 className="section-title">Commitment to Excellence</h2>
                    <p className="section-text">
                        "To be the preferred destination for discerning travelers by delivering personalized experiences that create lifelong memories."
                    </p>
                    <div className="divider-center"></div>
                </div>
            </section>
        </div>
    );
};

export default About;
