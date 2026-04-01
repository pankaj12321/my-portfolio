"use client";

import React from 'react';
import styles from './About.module.css';
import { motion } from 'framer-motion';
import { BookOpen, GraduationCap, Code2, Globe } from 'lucide-react';
import Image from 'next/image';

const About = () => {
  const education = [
    {
      degree: "B.Tech - Computer Science & IT",
      institution: "Arya College of Engineering, Jaipur",
      period: "05/2024",
      score: "8.9/10 CGPA",
      icon: <GraduationCap size={20} />
    },
    {
      degree: "Senior Secondary (Science)",
      institution: "Bhartiya Public School, Sikar",
      period: "04/2019",
      score: "90.80%",
      icon: <BookOpen size={20} />
    }
  ];

  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <div className={styles.mainGrid}>
          {/* Image Column */}
          <motion.div 
            className={styles.imageColumn}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className={styles.imageWrapper}>
              <Image 
                src="/images/about-coding.jpg" 
                alt="Working on code" 
                width={600} 
                height={400} 
                className={styles.aboutImg}
              />
              <div className={styles.experienceBadge}>
                <span className={styles.years}>2+</span>
                <span className={styles.expText}>Years of<br/>Expertise</span>
              </div>
            </div>
          </motion.div>

          {/* Text Column */}
          <motion.div 
            className={styles.textColumn}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className={styles.title}>
              Engineering <span className="accent-gradient">Performance</span>
            </h2>
            <div className={styles.bio}>
              <p>
                Motivated and detail-oriented **Backend & DevOps Engineer** with hands-on experience in 
                **Node.js, MongoDB, AWS, and CI/CD pipelines**. 
              </p>
              <p>
                I specialize in solving complex problems and growing systems under high-scale 
                requirements. My focus is on creating seamless value through robust code and 
                automated infrastructure.
              </p>
            </div>

            <div className={styles.educationSection}>
              <h3>Education</h3>
              <div className={styles.eduGrid}>
                {education.map((edu, i) => (
                  <div key={i} className={styles.eduCard}>
                    <div className={styles.eduIcon}>{edu.icon}</div>
                    <div className={styles.eduInfo}>
                      <h4>{edu.degree}</h4>
                      <p>{edu.institution}</p>
                      <div className={styles.eduMeta}>
                        <span>{edu.period}</span>
                        <span className={styles.dot}>•</span>
                        <span className={styles.score}>{edu.score}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Floating Expertise Cards */}
        <div className={styles.expertiseMarquee}>
          <div className={styles.expertiseItem}><Code2 size={16}/> Scalable Node.js APIs</div>
          <div className={styles.expertiseItem}><Globe size={16}/> AWS Cloud Architecture</div>
          <div className={styles.expertiseItem}><BookOpen size={16}/> DevOps Automation</div>
          <div className={styles.expertiseItem}><Code2 size={16}/> MongoDB Optimization</div>
        </div>
      </div>
    </section>
  );
};

export default About;
