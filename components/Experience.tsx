'use client'

import styles from './Experience.module.css'
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react'

const experiences = [
  {
    role: 'ESL Instructor',
    organization: 'Language Institute / Community College',
    location: 'United States',
    period: '2020 – Present',
    type: 'Full-time',
    responsibilities: [
      'Design and deliver communicative ESL lessons for adult learners at varying proficiency levels (Beginner to Advanced)',
      'Develop differentiated instructional materials aligned with CCRS and ELPA21 standards',
      'Conduct ongoing formative and summative assessments to monitor student progress',
      'Collaborate with academic support staff to provide holistic student support',
      'Integrate technology tools (Padlet, Nearpod, Google Classroom) to enhance engagement',
    ],
  },
  {
    role: 'ESL / EFL Teacher',
    organization: 'Private Language School',
    location: 'Middle East / Asia',
    period: '2015 – 2020',
    type: 'Full-time',
    responsibilities: [
      'Taught English as a Foreign Language to learners aged 10–45 across skill areas',
      'Designed thematic units integrating reading, writing, speaking, and listening skills',
      'Prepared students for international proficiency exams (IELTS, TOEFL, Cambridge PET)',
      'Mentored junior teachers and led professional development workshops',
      'Built positive classroom community through culturally responsive teaching strategies',
    ],
  },
  {
    role: 'English Language Tutor',
    organization: 'Freelance / Community Organization',
    location: 'Bangladesh',
    period: '2012 – 2015',
    type: 'Part-time',
    responsibilities: [
      'Provided one-on-one and small group tutoring in grammar, vocabulary, and communication skills',
      'Supported students preparing for national and university-level English examinations',
      'Created custom learning plans based on individual student needs and goals',
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
