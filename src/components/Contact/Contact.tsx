"use client";

import React from 'react';
import styles from './Contact.module.css';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Send, Phone, ArrowUpRight } from 'lucide-react';

const Contact = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/pankaj12321',
      icon: <Github size={20} />,
      label: '@pankaj12321'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/pankaj-kumawat-6b2531271/',
      icon: <Linkedin size={20} />,
      label: 'Pankaj Kumawat'
    },
    {
      name: 'Email',
      url: 'mailto:pankaj1184783@gmail.com',
      icon: <Mail size={20} />,
      label: 'pankaj1184783@gmail.com'
    },
    {
      name: 'Phone',
      url: 'tel:8690858238',
      icon: <Phone size={20} />,
      label: '+91 8690858238'
    }
  ];

  return (
    <footer id="contact" className={styles.contact}>
      <div className="container">
        <div className={styles.mainGrid}>
          <motion.div 
            className={styles.ctaSide}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className={styles.title}>
              Let's build <span className="accent-gradient">Something </span> 
              Extraordinary.
            </h2>
            <p className={styles.subtitle}>
              I'm currently available for full-time opportunities or high-scale 
              architectural consulting.
            </p>

            <div className={styles.contactList}>
              {socialLinks.map((link, i) => (
                <motion.a 
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.contactItem}
                  whileHover={{ x: 10 }}
                >
                  <div className={styles.iconWrapper}>{link.icon}</div>
                  <div className={styles.linkText}>
                    <span className={styles.linkName}>{link.name}</span>
                    <span className={styles.linkLabel}>{link.label}</span>
                  </div>
                  <ArrowUpRight size={18} className={styles.arrowIcon} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className={styles.footerBottom}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            <div className={styles.brandSide}>
              <h3 className={styles.footerName}>PANKAJ KUMAWAT</h3>
              <p className={styles.footerTitle}>Backend & DevOps Architect</p>
            </div>
            
            <div className={styles.legalSide}>
              <p>© 2026 Crafted with precision.</p>
              <div className={styles.techLogos}>
                <span>Next.js</span>
                <span className={styles.dot}>•</span>
                <span>Framer Motion</span>
                <span className={styles.dot}>•</span>
                <span>AWS</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
