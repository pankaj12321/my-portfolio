"use client";

import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import { motion } from 'framer-motion';
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

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={`${styles.container} container`}>
        <motion.div 
          className={styles.logo}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <span className={styles.bracket}>&lt;</span>
          <span className={styles.logoText}>DevOps</span>
          <span className={styles.bracket}>/&gt;</span>
        </motion.div>

        {/* Desktop Links */}
        <ul className={styles.navLinks}>
          {navLinks.map((link, i) => (
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
        <button className={styles.mobileToggle} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div 
        className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.open : ''}`}
        initial={{ x: '100%' }}
        animate={{ x: mobileMenuOpen ? '0%' : '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
      >
        <ul>
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href} 
                className={styles.mobileLink}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </motion.div>
    </nav>
  );
};

export default Navbar;
