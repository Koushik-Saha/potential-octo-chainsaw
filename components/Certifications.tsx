'use client'

import styles from './Certifications.module.css'
import { Award, CheckCircle } from 'lucide-react'

const certifications = [
  {
    name: 'TESOL Certificate',
    issuer: 'TESOL International Association',
    year: '2021',
    description: 'Certificate demonstrating competencies in teaching English to speakers of other languages in academic and community settings.',
    featured: true,
  },
  {
    name: 'CELTA (Certificate in English Language Teaching to Adults)',
    issuer: 'Cambridge University Press & Assessment',
    year: '2018',
    description: 'Internationally recognized qualification for teaching English as a foreign or second language to adult learners.',
    featured: true,
  },
  {
    name: 'Teaching English Online',
    issuer: 'Coursera / Arizona State University',
    year: '2020',
    description: 'Specialized training in online ESL instruction methods, synchronous and asynchronous learning, and digital classroom management.',
    featured: false,
  },
  {
    name: 'Language Assessment for TESOL',
    issuer: 'edX / Online',
    year: '2022',
    description: 'Focused on designing valid and reliable assessment instruments for measuring English language proficiency.',
    featured: false,
  },
  {
    name: 'Teaching Grammar Communicatively',
    issuer: 'Westcliff University (Graduate Coursework)',
    year: '2023',
    description: 'Advanced study of grammatical structures, error analysis, and techniques for communicative grammar instruction.',
    featured: false,
  },
  {
    name: 'Intercultural Communication',
    issuer: 'Westcliff University (Graduate Coursework)',
    year: '2023',
    description: 'Exploration of cultural competence, cross-cultural communication theory, and implications for multilingual classrooms.',
    featured: false,
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className={`section section-alt ${styles.certifications}`}>
      <div className="container">
        <div className="section-header">
          <h2>Professional Development</h2>
          <p>Commitment to continuous growth and excellence in pedagogical practice as a TESOL candidate.</p>
        </div>

        <div className={styles.grid}>
          {certifications.map((cert, i) => (
            <div key={i} className={`card ${styles.certCard} ${cert.featured ? styles.featured : ''}`}>
              {cert.featured && (
                <div className={styles.featuredBadge}>
                  <Award size={13} /> Featured
                </div>
              )}
              <div className={styles.certIcon}>
                <CheckCircle size={22} />
              </div>
              <div className={styles.certName}>{cert.name}</div>
              <div className={styles.certIssuer}>{cert.issuer}</div>
              <div className={styles.certYear}>{cert.year}</div>
              <p className={styles.certDesc}>{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
