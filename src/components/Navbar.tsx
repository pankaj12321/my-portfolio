"use client";

import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={`${styles.container} container`}>
        <motion.div
          className={styles.logo}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <span className={styles.bracket}>&lt;</span>
          <span className={styles.logoText}>Software Engineer</span>
          <span className={styles.bracket}>/&gt;</span>
        </motion.div>

        {/* Desktop Links */}
        <ul className={styles.navLinks}>
          {navLinks.slice(1).map((link, i) => (
            <motion.li
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <a href={link.href} className={styles.link}>{link.name}</a>
            </motion.li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className={styles.socials}>
          <a href="https://github.com" target="_blank" rel="noreferrer"><Github size={20} /></a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer"><Linkedin size={20} /></a>
          <a href="mailto:contact@example.com"><Mail size={20} /></a>
        </div>

        {/* Mobile Toggle */}
        <button
          className={styles.mobileToggle}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={mobileMenuOpen ? 'close' : 'open'}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </motion.div>
          </AnimatePresence>
        </button>
      </div>

      {/* Dark overlay backdrop */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className={styles.mobileOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={closeMenu}
          />
        )}
      </AnimatePresence>

      {/* Mobile Slide-in Panel */}
      <motion.div
        className={styles.mobileMenu}
        initial={{ x: '100%' }}
        animate={{ x: mobileMenuOpen ? '0%' : '100%' }}
        transition={{ type: 'spring', damping: 28, stiffness: 220 }}
      >
        <ul>
          {navLinks.map((link) => (
            <motion.li
              key={link.name}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: mobileMenuOpen ? 1 : 0, x: mobileMenuOpen ? 0 : 30 }}
              transition={{ duration: 0.3, delay: mobileMenuOpen ? 0.1 : 0 }}
            >
              <a
                href={link.href}
                className={styles.mobileLink}
                onClick={closeMenu}
              >
                {link.name}
              </a>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </nav>
  );
};

export default Navbar;
