import React from 'react';
import { Helmet } from 'react-helmet-async';
import '../styles/Home.css';

const Contact = () => {
    return (
        <div className="contact-page">
            <Helmet>
                <title>Contact Us - Onestayz by Zipcode</title>
                <meta name="description" content="Get in touch with Onestayz by Zipcode, Gurugram. Reservations, event inquiries, and location details." />
            </Helmet>

            {/* Hero Section */}
            <section className="hero" style={{ height: '50vh', minHeight: '350px', backgroundImage: 'url(/assets/hero.png)' }}>
                <div className="hero-overlay"></div>
                <div className="hero-content container">
                    <h1 className="hero-title" style={{ fontSize: '3.5rem' }}>Contact Us</h1>
                    <p className="hero-subtitle">We are here to serve you</p>
                </div>
            </section>

            <section className="section-padding container">
                <div className="grid grid-2 gap-lg">
                    {/* Contact Info */}
                    <div>
                        <span className="section-subtitle">Get in Touch</span>
                        <h2 className="section-title">Visit Us</h2>
                        <p className="section-text">
                            Located conveniently in Sector 70A, we are easily accessible from major business hubs and attractions in Gurugram.
                        </p>

                        <div style={{ marginTop: '2rem' }}>
                            <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--color-primary)' }}>Address</h4>
                            <p className="section-text" style={{ marginBottom: '1.5rem' }}>Sector 70A, Gurugram, Haryana 122101</p>

                            <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--color-primary)' }}>Phone</h4>
                            <p className="section-text" style={{ marginBottom: '1.5rem' }}>+91 123 456 7890</p>

                            <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--color-primary)' }}>Email</h4>
                            <p className="section-text">info@onestayz.com</p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div style={{ backgroundColor: '#f8fafc', padding: '2rem', borderRadius: '4px', border: '1px solid #e2e8f0' }}>
                        <h3 style={{ marginBottom: '1.5rem', fontFamily: 'var(--font-heading)', color: 'var(--color-primary)' }}>Send an Inquiry</h3>
                        <form>
                            <div style={{ marginBottom: '1rem' }}>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.9rem' }}>Name</label>
                                <input type="text" style={{ width: '100%', padding: '0.75rem', border: '1px solid #cbd5e1', borderRadius: '0' }} placeholder="Your Name" />
                            </div>
                            <div style={{ marginBottom: '1rem' }}>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.9rem' }}>Email</label>
                                <input type="email" style={{ width: '100%', padding: '0.75rem', border: '1px solid #cbd5e1', borderRadius: '0' }} placeholder="Your Email" />
                            </div>
                            <div style={{ marginBottom: '1rem' }}>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.9rem' }}>Message</label>
                                <textarea rows="4" style={{ width: '100%', padding: '0.75rem', border: '1px solid #cbd5e1', borderRadius: '0' }} placeholder="How can we help you?"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Send Message</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
