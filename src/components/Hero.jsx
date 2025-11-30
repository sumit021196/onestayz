import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Hero.css';

import { motion } from 'framer-motion';

const Hero = () => {
    const [offset, setOffset] = React.useState(0);

    React.useEffect(() => {
        const handleScroll = () => {
            setOffset(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.8,
                ease: "easeOut"
            }
        })
    };

    return (
        <section className="hero" style={{ backgroundPositionY: `${offset * 0.5}px` }}>
            <div className="hero-overlay"></div>
            <div className="hero-content container" style={{ transform: `translateY(${offset * 0.2}px)`, opacity: 1 - offset / 700 }}>
                <motion.h1
                    className="hero-title"
                    initial="hidden"
                    animate="visible"
                    custom={0}
                    variants={textVariants}
                >
                    Experience Luxury<br />at Onestayz
                </motion.h1>
                <motion.p
                    className="hero-subtitle"
                    initial="hidden"
                    animate="visible"
                    custom={2}
                    variants={textVariants}
                >
                    Your premium sanctuary in Gurugram
                </motion.p>
                <motion.div
                    className="hero-actions"
                    initial="hidden"
                    animate="visible"
                    custom={4}
                    variants={textVariants}
                >
                    <Link to="/rooms" className="btn btn-primary">View Rooms</Link>
                    <Link to="/contact" className="btn btn-secondary-light">Contact Us</Link>
                </motion.div>
            </div>

            <motion.div
                className="scroll-indicator"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                style={{ opacity: 1 - offset / 300 }}
            >
                <div className="mouse">
                    <div className="wheel"></div>
                </div>
                <span>Scroll to Explore</span>
            </motion.div>
        </section>
    );
};

export default Hero;
