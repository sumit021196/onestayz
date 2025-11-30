import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.5,
        ease: [0.77, 0, 0.175, 1],
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.77, 0, 0.175, 1],
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, y: 50 },
    open: { opacity: 1, y: 0 }
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <Link to="/" className="logo">
          Onestayz
        </Link>

        <AnimatePresence>
          {(isOpen || window.innerWidth > 768) && (
            <motion.nav
              className={`nav ${isOpen ? 'open' : ''}`}
              initial="closed"
              animate="open"
              exit="closed"
              variants={window.innerWidth <= 768 ? menuVariants : {}}
            >
              <motion.ul className="nav-list">
                {['Home', 'About', 'Rooms', 'Dining', 'Events'].map((item) => (
                  <motion.li key={item} variants={itemVariants}>
                    <Link
                      to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item}
                    </Link>
                  </motion.li>
                ))}
                <motion.li variants={itemVariants}>
                  <Link to="/contact" onClick={() => setIsOpen(false)} className="btn btn-primary btn-sm">
                    Book Now
                  </Link>
                </motion.li>
              </motion.ul>
            </motion.nav>
          )}
        </AnimatePresence>

        <button className={`menu-toggle ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
