"use client";

import React from 'react';
import styles from './MobileNav.module.css';
import { motion } from 'framer-motion';
import { Home, User, Briefcase, Mail, Cpu } from 'lucide-react';

const MobileNav = () => {
  const navItems = [
    { icon: <Home size={20} />, label: 'Home', href: '#' },
    { icon: <User size={20} />, label: 'About', href: '#about' },
    { icon: <Cpu size={20} />, label: 'Skills', href: '#skills' },
    { icon: <Briefcase size={20} />, label: 'Projects', href: '#projects' },
    { icon: <Mail size={20} />, label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={styles.mobileNav}>
      <div className={styles.navContainer}>
        {navItems.map((item) => (
          <motion.a
            key={item.label}
            href={item.href}
            className={styles.navItem}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className={styles.iconWrapper}>
              {item.icon}
            </div>
            <span className={styles.label}>{item.label}</span>
          </motion.a>
        ))}
      </div>
    </nav>
  );
};

export default MobileNav;
