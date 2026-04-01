"use client";

import React from 'react';
import styles from './Experience.module.css';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Calendar, MapPin, Briefcase, Zap } from 'lucide-react';

const experiences = [
  {
    company: 'Krikal Soft',
    role: 'Backend & DevOps Engineer',
    period: '03/2025 - Present',
    location: 'Jaipur, India',
    description: 'Developing high-scale backend services and automating cloud infrastructure for enterprise applications.',
    highlights: [
      'Orchestrated containers using AWS EKS & ECS for high availability',
      'Reduced API latency with Redis caching and optimized Nginx configs',
      'Configured CloudFront CDN and S3 for global static asset delivery'
    ]
  },
  {
    company: 'Airsme',
    role: 'Backend Web Developer',
    period: '06/2024 - 02/2025',
    location: 'Bangalore, India',
    description: 'Focused on building secure, role-based API architectures and optimized database schemas.',
    highlights: [
      'Implemented complex RBAC systems for multi-user platforms',
      'Designed normalized MongoDB schemas for Vikir Application',
      'Led integration of third-party payment gateways'
    ]
  },
  {
    company: 'Skill Vertex',
    role: 'Software Developer Intern',
    period: '04/2023 - 06/2023',
    location: 'Jaipur, India',
    description: 'Assisted in frontend-backend integration and participated in core Agile workflows.',
    highlights: [
      'Mastered version control and collaborative code review processes',
      'Developed modular backend components using Node.js'
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className={styles.experience}>
      <div className="container">
        <header className={styles.header}>
          <h2 className={styles.title}>Professional <span className="accent-gradient">Timeline</span></h2>
          <p className={styles.subtitle}>A record of technical leadership and architectural growth.</p>
        </header>

        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={styles.timelineItem}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div className={styles.card}>
                <div className={styles.glow} />
                <div className={styles.cardHeader}>
                  <div className={styles.mainInfo}>
                    <div className={styles.companyBadge}>
                      <Briefcase size={16} /> <span>{exp.company}</span>
                    </div>
                    <h3 className={styles.role}>{exp.role}</h3>
                  </div>
                  <div className={styles.metaInfo}>
                    <span className={styles.period}><Calendar size={14} /> {exp.period}</span>
                    <span className={styles.location}><MapPin size={14} /> {exp.location}</span>
                  </div>
                </div>

                <p className={styles.description}>{exp.description}</p>

                <div className={styles.highlights}>
                  {exp.highlights.map((h, i) => (
                    <div key={i} className={styles.highlightItem}>
                      <Zap size={14} className={styles.zapIcon} />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
