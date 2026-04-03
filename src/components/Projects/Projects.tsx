"use client";

import React, { useState } from 'react';
import styles from './Projects.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Shield, Zap, Cpu, Globe, Eye, X, Award, Briefcase, PlayCircle } from 'lucide-react';
import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  link: string;
  github: string;
  image: string;
  category: string;
  highlights: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Swabha Solutions Platform',
    description: 'A robust HRMS and CMS platform featuring an integrated ecosystem for comprehensive laundry & cleaning services.',
    tech: ['Node.js', 'Typescript', 'AWS', 'Microservices', 'MongoDB'],
    link: 'https://swabha.solutions/',
    github: 'https://github.com/pankaj12321',
    image: '/images/exp-swabha.jpg',
    category: 'SaaS Platform / HRMS',
    highlights: ['Microservice Architecture', 'Complex Backend Schemas', '99.9% Uptime']
  },
  {
    id: 2,
    title: 'Vikir Application (Airsme)',
    description: 'An expansive HRMS/CMS and on-demand service ecosystem developed alongside Airsme using MEAN/MERN stack with TypeScript.',
    tech: ['Node.js', 'Express', 'React', 'TypeScript', 'MongoDB'],
    link: 'https://vikir.in/playstore',
    github: 'https://github.com/pankaj12321',
    image: '/images/exp-airsme.png',
    category: 'Service Booking Platform',
    highlights: ['RBAC Implementation', 'Secure Payment Gateway', 'REST API & OAuth']
  },
  {
    id: 3,
    title: 'Quran Learning App',
    description: 'An educational platform facilitating personalized learning through role-based teacher-student onboarding.',
    tech: ['Node.js', 'Socket.IO', 'JWT', 'Vercel', 'AWS'],
    link: 'https://ottloha-sha-web-admin.vercel.app',
    github: 'https://github.com/pankaj12321',
    image: '/images/quran-cover.png',
    category: 'Ed-Tech Admin Suite',
    highlights: ['Real-time Audio Sharing', 'Communication Module', 'Role-Based Auth']
  },
  {
    id: 4,
    title: 'Learnitfy',
    description: 'A robust tech study platform with domain-based course management and secure automated subscriptions.',
    tech: ['TypeScript', 'MongoDB', 'Nodemailer', 'Stripe', 'AWS'],
    link: 'https://learnitfy.com',
    github: 'https://github.com/pankaj12321',
    image: '/images/learnitfy-cover.png',
    category: 'Educational Marketplace',
    highlights: ['Video Content Streaming', 'Email Automation', 'Subscription Logic']
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className={styles.projects}>
      <div className="container">
        <header className={styles.header}>
          <h2 className={styles.title}>Selected <span className="accent-gradient">Architectures</span></h2>
          <p className={styles.subtitle}>Engineering high-performance solutions across Cloud, Backend, and AI.</p>
        </header>

        <div className={styles.grid}>
          {projects.map((p, i) => (
            <motion.div 
              key={p.id}
              className={styles.projectCard}
              onClick={() => setSelectedProject(p)}
              style={{ cursor: 'pointer' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
            >
              <div className={styles.imageWrapper}>
                <Image 
                  src={p.image} 
                  alt={p.title} 
                  fill 
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className={styles.projectImg}
                />
                <div className={styles.categoryBadge}>{p.category}</div>
                <div className={styles.overlay}>
                  <div className={styles.links}>
                    <div className={styles.viewAction}>
                      <Eye size={20} />
                      <span style={{ fontSize: '0.8rem', fontWeight: 600, marginTop: '5px' }}>View Detail</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.cardContent}>
                <h3 className={styles.projectTitle}>{p.title}</h3>
                <p className={styles.projectDesc}>{p.description}</p>
                
                <div className={styles.highlights}>
                  {p.highlights.map((h, i) => (
                    <span key={i} className={styles.highlightBadge}>
                      <Zap size={10} /> {h}
                    </span>
                  ))}
                </div>

                <div className={styles.techStack}>
                  {p.tech.map(t => (
                    <span key={t} className={styles.techTag}>{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            className={styles.modalOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              className={styles.modalContent}
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className={styles.closeBtn} onClick={() => setSelectedProject(null)}>
                <X size={24} />
              </button>
              
              <div className={styles.modalHeader}>
                <h3>{selectedProject.title}</h3>
                <p>{selectedProject.category}</p>
              </div>

              <div className={styles.modalImages}>
                <div className={`${styles.modalImageWrapper} ${styles.modalSingleImage}`}>
                  <Image 
                    src={selectedProject.image} 
                    alt={selectedProject.title} 
                    fill
                    className={styles.modalImg}
                  />
                </div>
              </div>

              <div className={styles.modalDetails}>
                 <p style={{ color: 'var(--accent-silver)', lineHeight: 1.6, marginBottom: '10px' }}>
                   {selectedProject.description}
                 </p>
                 <div className={styles.techStack} style={{flexWrap: 'wrap', marginBottom: '15px'}}>
                   {selectedProject.tech.map(t => (
                     <span key={t} className={styles.techTag} style={{background: 'rgba(255,255,255,0.05)'}}>{t}</span>
                   ))}
                 </div>
              </div>

              <div className={styles.modalGoals}>
                <h4><Award size={20} /> Technical Highlights</h4>
                <ul>
                  {selectedProject.highlights.map((h: string, idx: number) => (
                    <li key={idx}>{h}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.modalActions}>
                <a href={selectedProject.link} target="_blank" rel="noreferrer" className={styles.primaryLink}>
                  <PlayCircle size={18} /> Review Deployment
                </a>
                <a href={selectedProject.github} target="_blank" rel="noreferrer" className={styles.secondaryLink}>
                  <Github size={18} /> View Source
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
