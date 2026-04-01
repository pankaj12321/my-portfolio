"use client";

import React, { useEffect, useState } from 'react';
import styles from './Preloader.module.css';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 400);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 120);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className={styles.preloader}
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            scale: 1.05,
            filter: "blur(12px)",
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
          }}
        >
          <div className={styles.center}>
            <motion.div
              className={styles.logoMark}
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className={styles.initials}>PK</span>
              <div className={styles.ring} />
              <div className={styles.ring2} />
            </motion.div>

            <motion.p
              className={styles.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              PANKAJ KUMAWAT
            </motion.p>

            <motion.p
              className={styles.role}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              Backend & DevOps Architect
            </motion.p>
          </div>

          <div className={styles.progressWrapper}>
            <motion.div 
              className={styles.progressBar}
              initial={{ width: 0 }}
              animate={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ duration: 0.15, ease: "linear" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
