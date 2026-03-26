'use client'

import styles from './Experience.module.css'
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react'

const experiences = [
  {
    role: 'English Teacher',
    organization: 'Novelty School & College',
    location: 'Bangladesh',
    period: 'Feb 2020 – Dec 2022',
    type: 'Full-time',
    responsibilities: [
      'Delivered English instruction to over 100 kindergarten and primary students, focusing on early literacy, phonics, reading comprehension, and communication skills',
      'Developed and implemented differentiated lesson plans, resulting in a 30% improvement in average reading assessment scores within one academic year',
      'Adapted teaching methods to meet diverse learning styles, supporting a 95% student pass rate in annual evaluations',
      'Built strong relationships with parents and caregivers, achieving a 90%+ satisfaction rate through consistent communication and detailed progress updates',
      'Fostered a nurturing and inclusive classroom environment, leading to a 98% student attendance rate',
      'Coordinated and participated in 5+ school-wide events, workshops, and literacy programs to support student engagement and school community development',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className={`section section-alt ${styles.experience}`}>
      <div className="container">
        <div className="section-header">
          <h2>Teaching Experience</h2>
          <p>Over eight years of dedicated service in ESL and EFL education across diverse contexts.</p>
        </div>

        <div className={styles.experienceList}>
          {experiences.map((exp, i) => (
            <div key={i} className={`card ${styles.expCard}`}>
              <div className={styles.expHeader}>
                <div className={styles.expIcon}>
                  <Briefcase size={20} />
                </div>
                <div className={styles.expMain}>
                  <h3 className={styles.role}>{exp.role}</h3>
                  <div className={styles.org}>{exp.organization}</div>
                  <div className={styles.expMeta}>
                    <span><Calendar size={13} />{exp.period}</span>
                    <span><MapPin size={13} />{exp.location}</span>
                    <span className="tag tag-navy">{exp.type}</span>
                  </div>
                </div>
              </div>
              <ul className={styles.responsibilities}>
                {exp.responsibilities.map((r, j) => (
                  <li key={j} className={styles.responsibility}>
                    <ChevronRight size={14} className={styles.bullet} />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
