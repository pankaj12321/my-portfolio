"use client";

import React, { useState, useEffect } from 'react';
import styles from './DevOps.module.css';
import { motion } from 'framer-motion';
import { Code, Box, CheckCircle, UploadCloud, Activity, Zap } from 'lucide-react';

const DevOps = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const steps = [
    { icon: <Code size={32} />, label: 'Code', color: '#8b5cf6', desc: 'Version Control' },
    { icon: <Box size={32} />, label: 'Build', color: '#3b82f6', desc: 'Docker Images' },
    { icon: <CheckCircle size={32} />, label: 'Test', color: '#10b981', desc: 'Automated QA' },
    { icon: <UploadCloud size={32} />, label: 'Deploy', color: '#f59e0b', desc: 'AWS / Vercel' },
    { icon: <Activity size={32} />, label: 'Monitor', color: '#ef4444', desc: 'Datadog / Logs' },
  ];

  return (
    <section className={styles.devopsSection}>
      <div className="container">
        <header className={styles.header}>
          <motion.h2 
            className={styles.title}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Visual CI/CD <span className={styles.highlight}>Pipeline</span>
          </motion.h2>
          <motion.p 
            className={styles.subtitle}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Automating the journey from local development to global production with precision.
          </motion.p>
        </header>

        <div className={styles.pipelineWrapper}>
          <div className={styles.pipeline}>
            <div className={styles.line} />

            <motion.div
              className={styles.progressLine}
              initial={isMobile ? { height: 0, width: 4 } : { width: 0, height: 4 }}
              whileInView={isMobile ? { height: '100%', width: 4 } : { width: '100%', height: 4 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />

            {steps.map((step, index) => (
              <motion.div
                key={step.label}
                className={styles.stepContainer}
                initial={{ opacity: 0, y: isMobile ? 0 : 50, x: isMobile ? -50 : 0 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.3, type: "spring" }}
                whileHover={{ scale: 1.05 }}
              >
                <div
                  className={styles.iconCircle}
                  style={{
                    '--step-color': step.color,
                  } as React.CSSProperties}
                >
                  <div className={styles.iconWrapper} style={{ color: step.color }}>
                    {step.icon}
                  </div>
                </div>
                <div className={styles.stepText}>
                  <span className={styles.label}>{step.label}</span>
                  <span className={styles.stepDesc}>{step.desc}</span>
                </div>

                {!isMobile && index < steps.length - 1 && (
                  <div className={styles.connector}>
                    <motion.div
                      className={styles.movingDot}
                      animate={{
                        left: ['0%', '100%'],
                        opacity: [0, 1, 0]
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "linear",
                        delay: index * 0.4
                      }}
                    />
                  </div>
                )}
                {isMobile && index < steps.length - 1 && (
                   <div className={styles.mobileConnector}>
                    <motion.div
                      className={styles.movingDotMobile}
                      animate={{
                        top: ['0%', '100%'],
                        opacity: [0, 1, 0]
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "linear",
                        delay: index * 0.4
                      }}
                    />
                   </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <div className={styles.detailsGrid}>
          <motion.div 
            className={styles.detailCard}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
          >
            <div className={styles.cardHeader}>
              <div className={styles.cardIconBox} style={{ backgroundColor: 'rgba(124, 58, 237, 0.1)' }}>
                <Zap size={28} color="#7c3aed" />
              </div>
              <h3>Server-Side Scale</h3>
            </div>
            <p>Architecting high-scale backend logic with Node.js and AdonisJS for mission-critical apps.</p>
          </motion.div>
          <motion.div 
            className={styles.detailCard}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -10 }}
          >
            <div className={styles.cardHeader}>
              <div className={styles.cardIconBox} style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)' }}>
                <Box size={28} color="#10b981" />
              </div>
              <h3>Reliable infra</h3>
            </div>
            <p>Dockerizing applications to ensure seamless portability and environment consistency.</p>
          </motion.div>
          <motion.div 
            className={styles.detailCard}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            whileHover={{ y: -10 }}
          >
            <div className={styles.cardHeader}>
              <div className={styles.cardIconBox} style={{ backgroundColor: 'rgba(59, 130, 246, 0.1)' }}>
                <UploadCloud size={28} color="#3b82f6" />
              </div>
              <h3>Cloud Native</h3>
            </div>
            <p>Provisioning resilient AWS clusters with automated Jenkins pipelines and Nginx routing.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DevOps;
