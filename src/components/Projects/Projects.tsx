"use client";

import React from 'react';
import styles from './Projects.module.css';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Shield, Zap, Cpu, Globe } from 'lucide-react';
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
    title: 'Vikir Application',
    description: 'A comprehensive on-demand service booking ecosystem connecting homeowners with certified professionals.',
    tech: ['Node.js', 'Express', 'MongoDB', 'AWS EC2/S3', 'Redis'],
    link: 'https://vikir.in',
    github: 'https://github.com/pankaj12321',
    image: '/images/vikir-cover.png',
    category: 'Service Booking Platform',
    highlights: ['RBAC Implementation', 'Redis Caching', 'Razorpay Integration']
  },
  {
    id: 2,
    title: 'Quran Learning App',
    description: 'An educational platform facilitating personalized learning through role-based teacher-student onboarding.',
    tech: ['Node.js', 'Socket.IO', 'JWT', 'Vercel', 'AWS'],
    link: 'https://ottloha-sha-web-admin.vercel.app',
    github: 'https://github.com/pankaj12321',
    image: '/images/quran-cover.png',
    category: 'Ed-Tech Admin Suite',
    highlights: ['Real-time Audio Sharing', 'Communication Module', 'RBAC']
  },
  {
    id: 3,
    title: 'Learnitfy',
    description: 'A robust tech study platform with domain-based course management and secure automated subscriptions.',
    tech: ['TypeScript', 'MongoDB', 'Nodemailer', 'Stripe', 'AWS'],
    link: 'https://learnitfy.com',
    github: 'https://github.com/pankaj12321',
    image: '/images/learnitfy-cover.png',
    category: 'Educational Marketplace',
    highlights: ['Video Content Streaming', 'Email Automation', 'Subscription Logic']
  },
  {
    id: 4,
    title: 'IntelliServeApp',
    description: 'Advanced AI-powered backend system leveraging Large Language Models for context-aware responses.',
    tech: ['Python', 'FastAPI', 'LLM APIs', 'Redis', 'Docker'],
    link: '#',
    github: 'https://github.com/pankaj12321',
    image: '/images/intelliserve-cover.png',
    category: 'AI / LLM Integration',
    highlights: ['Prompt Engineering', 'API Optimization', 'Dynamic Context']
  }
];

const Projects = () => {
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
                    <a href={p.github} target="_blank" rel="noreferrer" className={styles.linkIcon}><Github size={20} /></a>
                    <a href={p.link} target="_blank" rel="noreferrer" className={styles.linkIcon}><ExternalLink size={20} /></a>
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
    </section>
  );
};

export default Projects;
