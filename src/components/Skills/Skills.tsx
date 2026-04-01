"use client";

import React from 'react';
import styles from './Skills.module.css';
import { motion } from 'framer-motion';
import { Server, Database, Cloud, Code, Shield, Cpu } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Backend Architecture',
      icon: <Server size={22} />,
      skills: ['Node.js', 'Express.js', 'RESTful APIs', 'JavaScript', 'AdonisJS', 'Microservices'],
      accent: 'var(--accent-primary)'
    },
    {
      title: 'DevOps & Cloud',
      icon: <Cloud size={22} />,
      skills: ['AWS (EC2, S3, ECS, EKS)', 'CloudFront CDN', 'Jenkins', 'CI/CD Pipelines', 'Docker', 'Nginx'],
      accent: 'var(--accent-green)'
    },
    {
      title: 'Data Systems',
      icon: <Database size={22} />,
      skills: ['MongoDB', 'Mongoose', 'SQL', 'Redis Caching', 'Database Design', 'Optimization'],
      accent: 'var(--accent-secondary)'
    },
    {
      title: 'Languages & Tools',
      icon: <Cpu size={22} />,
      skills: ['JavaScript (ES6+)', 'Python', 'OOP Concepts', 'DSA', 'Git / GitHub', 'Agile & Scrum'],
      accent: '#94a3b8'
    }
  ];

  return (
    <section id="skills" className={styles.skills}>
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.title}>Technical <span className="accent-gradient">Sovereignty</span></h2>
          <p className={styles.subtitle}>A battle-tested toolkit for building robust, scalable, and automated digital ecosystems.</p>
        </motion.div>

        <div className={styles.grid}>
          {skillCategories.map((cat, idx) => (
            <motion.div 
              key={cat.title}
              className={styles.skillCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              whileHover={{ y: -5 }}
              style={{ '--cat-accent': cat.accent } as React.CSSProperties}
            >
              <div className={styles.cardHeader}>
                <div className={styles.iconWrapper}>{cat.icon}</div>
                <h3>{cat.title}</h3>
              </div>
              <div className={styles.skillList}>
                {cat.skills.map((skill) => (
                  <span key={skill} className={styles.skillBadge}>
                    <Shield size={10} className={styles.shield} />
                    {skill}
                  </span>
                ))}
              </div>
              <div className={styles.cardGlow} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
