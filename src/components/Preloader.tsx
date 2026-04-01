"use client";

import React, { useEffect, useState } from 'react';
import styles from './Preloader.module.css';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);

  const lines = [
    '> initializing_node_kernel...',
    '> pulling_production_images...',
    '> provisioning_aws_eks_cluster...',
    '> synchronizing_mongodb_shards...',
    '> backend_architectures_ready...',
    '> booting_pankaj_portfolio_v2.0...'
  ];

  useEffect(() => {
    if (index < lines.length) {
      const timer = setTimeout(() => {
        setText((prev) => prev + lines[index] + '\n');
        setIndex((prev) => prev + 1);
      }, 300);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => setLoading(false), 800);
      return () => clearTimeout(timer);
    }
  }, [index, lines.length]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className={styles.preloader}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)", transition: { duration: 0.8, ease: "easeInOut" } }}
        >
          <div className={styles.terminal}>
            <div className={styles.terminalHeader}>
              <div className={styles.dot} style={{ background: '#7c3aed' }} />
              <div className={styles.dot} style={{ background: '#10b981' }} />
              <div className={styles.dot} style={{ background: '#3b82f6' }} />
              <span className={styles.terminalTitle}>pankaj-architect@dev:~</span>
            </div>
            <pre className={styles.content}>
              {text}
              <span className={styles.cursor}>_</span>
            </pre>
          </div>
          
          <div className={styles.progress}>
            <motion.div 
              className={styles.bar}
              initial={{ width: 0 }}
              animate={{ width: `${(index / lines.length) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
