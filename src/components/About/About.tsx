"use client";

import React, { useState } from 'react';
import styles from './About.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, GraduationCap, Code2, Globe, X, MapPin, Phone, Mail, Award, Eye, Briefcase, Terminal } from 'lucide-react';
import Image from 'next/image';

const About = () => {
  const [selectedItem, setSelectedItem] = useState<any>(null);

  const experiences = [
    {
      degree: "DevOps & Backend Engineer",
      institution: "Krikal Soft",
      period: "March 2024 - Present",
      score: "Full-Time",
      icon: <Terminal size={20} />,
      images: ["/images/exp-swabha.jpg"],
      address: "Jaipur, Rajasthan",
      contact: [],
      goals: [
        "Architected scalable backend schemas and deployed fully microservices-driven architectures utilizing Node.js, TypeScript, and AWS.",
        "Built the robust core logic for sophisticated HRMS and CMS platforms, integrating complex scheduling features that increased company operational efficiency by over 200%.",
        "Engineered highly reliable automated CI/CD deployment pipelines, significantly minimizing downtime and saving dozens of hours in manual DevOps tracking.",
        "Maintained a fault-tolerant 99.9% uptime standard across production environments, leveraging database clustering and indexing to slash query latencies by 45% during peak traffic spikes."
      ]
    },
    {
      degree: "Backend Web Developer",
      institution: "Airsme Technology",
      period: "July 2024 - March 2024",
      score: "Full-Time",
      icon: <Briefcase size={20} />,
      images: ["/images/exp-airsme.png"],
      address: "Remote / Jaipur",
      contact: [],
      goals: [
        "Pioneered comprehensive backend ecosystems employing the robust MEAN/MERN stack, aggressively scaling REST API performance to handle enormous data loads.",
        "Engineered advanced application logic fortified with secure OAuth integrations, intricate JWT-based authentication layers, and precise role-based access control.",
        "Successfully integrated major secure payment gateways into flagship applications (like Vikir), drastically streamlining checkout procedures and minimizing transaction drop-offs.",
        "Collaborated closely with cross-functional technical teams to spearhead crucial MongoDB database designs, delivering high-availability software solutions that dramatically accelerated the company's product launch timeline."
      ]
    },
    {
      degree: "Web Developer Intern",
      institution: "Tech Internship",
      period: "march 2024 -May 2024",
      score: "Internship",
      icon: <Code2 size={20} />,
      images: ["/images/intern-dev-boy.png"],
      address: "Remote",
      contact: ["Building Foundation"],
      goals: [
        "Gained hands-on expertise in dynamic frontend frameworks and robust backend paradigms.",
        "Optimized web application logic resulting in 30% faster data-retrieval times.",
        "A passion-driven launchpad into professional high-scale engineering and cloud architectures.",
        "Assisted in deploying proof-of-concept features leveraging RESTful API integrations."
      ]
    }
  ];

  const education = [
    {
      degree: "B.Tech - Computer Science & IT",
      institution: "Arya College of Engineering, Jaipur",
      period: "05/2024",
      score: "8.9/10 CGPA",
      icon: <GraduationCap size={20} />,
      images: ["/images/arya-1.png", "/images/arya-2.jpg"],
      address: "Arya 1 Old Main Campus, Jaipur",
      contact: ["info@aryacollege.in"],
      goals: [
        "Secured 8.9 CGPA demonstrating consistent academic excellence",
        "Pioneered participation in cloud computing and backend technical workshops",
        "Developed foundational skills in high-scale systems and DevOps practices"
      ]
    },
    {
      degree: "Senior Secondary (Science)",
      institution: "Bhartiya Public School, Sikar",
      period: "04/2019",
      score: "90.80%",
      icon: <BookOpen size={20} />,
      images: ["/images/school-1.png"],
      address: "Sanwali Road, Sikar",
      contact: ["+91-9251677384", "+91-9983314521", "bpssikar.bps@gmail.com"],
      goals: [
        "Fostering excellence in science and mathematical education",
        "Building character and strong leadership qualities among students",
        "Cultivating a robust foundation for advanced engineering studies"
      ]
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
                <span className={styles.expText}>Years of<br />Expertise</span>
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
              <h3>Professional Experience</h3>
              <div className={styles.eduGrid}>
                {experiences.map((exp, i) => (
                  <div key={i} className={styles.eduCard} onClick={() => setSelectedItem(exp)}>
                    <div className={styles.eduIcon}>{exp.icon}</div>
                    <div className={styles.eduInfo}>
                      <h4>{exp.degree}</h4>
                      <p>{exp.institution}</p>
                      <div className={styles.eduMeta}>
                        <span>{exp.period}</span>
                        <span className={styles.dot}>•</span>
                        <span className={styles.score}>{exp.score}</span>
                      </div>
                    </div>
                    <div className={styles.viewAction}>
                      <Eye size={20} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.educationSection}>
              <h3>Education</h3>
              <div className={styles.eduGrid}>
                {education.map((edu, i) => (
                  <div key={i} className={styles.eduCard} onClick={() => setSelectedItem(edu)}>
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
                    <div className={styles.viewAction}>
                      <Eye size={20} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Floating Expertise Cards */}
        <div className={styles.expertiseMarquee}>
          <div className={styles.expertiseItem}><Code2 size={16} /> Scalable Node.js APIs</div>
          <div className={styles.expertiseItem}><Globe size={16} /> AWS Cloud Architecture</div>
          <div className={styles.expertiseItem}><BookOpen size={16} /> DevOps Automation</div>
          <div className={styles.expertiseItem}><Code2 size={16} /> MongoDB Optimization</div>
        </div>
      </div>

      {/* Universal Detail Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            className={styles.modalOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              className={styles.modalContent}
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className={styles.closeBtn} onClick={() => setSelectedItem(null)}>
                <X size={24} />
              </button>

              <div className={styles.modalHeader}>
                <h3>{selectedItem.institution}</h3>
                <p>{selectedItem.degree}</p>
              </div>

              {selectedItem.images && selectedItem.images.length > 0 && (
                <div className={styles.modalImages}>
                  {selectedItem.images.map((img: string, idx: number) => (
                    <div key={idx} className={`${styles.modalImageWrapper} ${selectedItem.images.length === 1 ? styles.modalSingleImage : ''}`}>
                      <Image
                        src={img}
                        alt={`${selectedItem.institution} - ${idx}`}
                        fill
                        className={styles.modalImg}
                      />
                    </div>
                  ))}
                </div>
              )}

              <div className={styles.modalDetails}>
                {selectedItem.address && (
                  <div className={styles.detailItem}>
                    <MapPin size={18} />
                    <span>{selectedItem.address}</span>
                  </div>
                )}
                {selectedItem.contact && selectedItem.contact.map((c: string, idx: number) => (
                  <div key={idx} className={styles.detailItem}>
                    {c.includes('@') ? <Mail size={18} /> : (c.includes('http') ? <Globe size={18} /> : <Phone size={18} />)}
                    {c.includes('http') ? <a href={c} target="_blank" rel="noreferrer" style={{ color: 'var(--accent-primary)', textDecoration: 'underline' }}>{c}</a> : <span>{c}</span>}
                  </div>
                ))}
              </div>

              {selectedItem.goals && (
                <div className={styles.modalGoals}>
                  <h4><Award size={20} /> Highlights & Goals</h4>
                  <ul>
                    {selectedItem.goals.map((goal: string, idx: number) => (
                      <li key={idx}>{goal}</li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default About;
