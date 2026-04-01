"use client";

import React from 'react';
import styles from './Hero.module.css';
import { motion, useScroll, useTransform } from 'framer-motion';
import TechBackground from './TechBackground';
import { ArrowRight, ChevronDown, Award, Rocket, Shield } from 'lucide-react';
import Image from 'next/image';

const Hero = () => {
  const { scrollY } = useScroll();
  // Only subtle vertical parallax — NO opacity fade (caused blank space on mobile)
  const y1 = useTransform(scrollY, [0, 500], [0, 80]);

  return (
    <section className={styles.hero}>
      <TechBackground />

      <div className="container">
        <div className={styles.content}>
          <div className={styles.textSide}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className={styles.badge}>
                <Rocket size={14} /> Available for high-scale challenges
              </span>

              <h1 className={styles.title}>
                <span className={styles.line}>Powering Backend Systems </span>
                <span className={`${styles.line} ${styles.accentText}`}>And DevOps </span>
                <span className={styles.line}>Excellence.</span>
              </h1>

              <p className={styles.description}>
                I&apos;m <strong>Pankaj Kumawat</strong>, a Backend &amp; DevOps Architect dedicated to building
                unbreakable infrastructure and high-performance server logic.
              </p>

              <div className={styles.ctas}>
                <motion.a
                  href="#projects"
                  className={styles.primaryBtn}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Systems <ArrowRight size={18} />
                </motion.a>
                <motion.a
                  href="#contact"
                  className={styles.secondaryBtn}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get in Touch
                </motion.a>
              </div>

              <div className={styles.trustBadges}>
                <div className={styles.trustItem}>
                  <Shield size={20} className={styles.trustIcon} />
                  <span>Secure-by-design</span>
                </div>
                <div className={styles.trustItem}>
                  <Award size={20} className={styles.trustIcon} />
                  <span>99.9% Uptime SLA</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Image — subtle parallax y only, no opacity fade */}
          <motion.div
            className={styles.imageSide}
            style={{ y: y1 }}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.imageFrame}>
              <Image
                src="/images/personal.jpg"
                alt="Pankaj Kumawat"
                width={500}
                height={600}
                priority
                className={styles.profileImg}
              />
              <div className={styles.imageOverlay} />
              <div className={styles.glow} />
            </div>

            {/* Floating Stats */}
            <motion.div
              className={styles.floatingStat}
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              <span className={styles.statNumber}>15+</span>
              <span className={styles.statLabel}>Major Projects</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className={styles.scrollIndicator}
        animate={{ y: [0, 10, 0], opacity: [0.2, 1, 0.2] }}
        transition={{ repeat: Infinity, duration: 3 }}
      >
        <span>SCROLL TO DISCOVER</span>
        <ChevronDown size={20} />
      </motion.div>
    </section>
  );
};

export default Hero;
