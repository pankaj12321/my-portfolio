"use client";

import React from 'react';
import styles from './DevOps.module.css';
import { motion } from 'framer-motion';
import { Code, Box, CheckCircle, UploadCloud, Activity, Zap } from 'lucide-react';

const Software_Engineer = () => {
  const steps = [
    { icon: <Code size={30} />, label: 'Code', color: '#7c3aed' },
    { icon: <Box size={30} />, label: 'Build', color: '#10b981' },
    { icon: <CheckCircle size={30} />, label: 'Test', color: '#3b82f6' },
    { icon: <UploadCloud size={30} />, label: 'Deploy', color: '#8b5cf6' },
    { icon: <Activity size={30} />, label: 'Monitor', color: '#10b981' },
  ];

  return (
    <section className={styles.Software_Engineer}>
      <div className="container">
        <header className={styles.header}>
          <h2 className={styles.title}>Visual CI/CD <span className="accent-gradient">Pipeline</span></h2>
          <p className={styles.subtitle}>Automating the journey from local development to global production with precision.</p>
        </header>

        <div className={styles.pipelineWrapper}>
          <div className={styles.pipeline}>
            <div className={styles.line} />

            <motion.div
              className={styles.progressLine}
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />

            {steps.map((step, index) => (
              <motion.div
                key={step.label}
                className={styles.stepContainer}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.4 }}
              >
                <div
                  className={styles.iconCircle}
                  style={{
                    '--step-color': step.color,
                    borderColor: step.color,
                    boxShadow: `0 0 30px ${step.color}33`
                  } as React.CSSProperties}
                >
                  {step.icon}
                </div>
                <span className={styles.label}>{step.label}</span>

                {index < steps.length - 1 && (
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
              </motion.div>
            ))}
          </div>
        </div>

        <div className={styles.detailsGrid}>
          <div className={styles.detailCard}>
            <Zap size={24} className={styles.cardIcon} color="#7c3aed" />
            <h3>Server-Side Scale</h3>
            <p>Architecting high-scale backend logic with Node.js and AdonisJS for mission-critical apps.</p>
          </div>
          <div className={styles.detailCard}>
            <Box size={24} className={styles.cardIcon} color="#10b981" />
            <h3>Reliable infra</h3>
            <p>Dockerizing applications to ensure seamless portability and environment consistency.</p>
          </div>
          <div className={styles.detailCard}>
            <UploadCloud size={24} className={styles.cardIcon} color="#3b82f6" />
            <h3>Cloud Native</h3>
            <p>Provisioning resilient AWS clusters with automated Jenkins pipelines and Nginx routing.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Software_Engineer;
