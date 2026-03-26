'use client'

import styles from './Education.module.css'
import { GraduationCap, Calendar, MapPin } from 'lucide-react'

const education = [
  {
    degree: 'MA (Teaching English to Speakers of Other Languages) (TESOL)',
    institution: 'Westcliff University',
    location: 'Irvine, California, USA',
    period: 'Current',
    status: 'In Progress',
    statusType: 'progress',
    description:
      'Graduate studies focused on advanced TESOL methodologies, second language acquisition, and pedagogical innovation. Actively developing a professional teaching portfolio.',
    courses: [
      'Second Language Acquisition',
      'Language Curriculum Design',
      'Teaching Grammar & Vocabulary',
      'Language Assessment & Testing',
      'Intercultural Communication',
      'Practicum in TESOL',
    ],
  },
  {
    degree: 'Bachelor of Arts (English Language and Literature)',
    institution: 'Southeast University',
    location: 'Dhaka, Bangladesh',
    period: 'Completed 2022',
    status: 'Completed',
    statusType: 'completed',
    description:
      'Foundational studies in English linguistics and literature, providing a strong academic base for English language teaching.',
    courses: [
      'English Linguistics',
      'English Literature',
      'Teaching Methodologies',
      'Phonetics & Phonology',
      'Discourse Analysis',
    ],
  },
]

export default function Education() {
  return (
    <section id="education" className={`section ${styles.education}`}>
      <div className="container">
        <div className="section-header">
          <h2>Education &amp; Credentials</h2>
          <p>Academic foundations that shape my evidence-based approach to English language teaching.</p>
        </div>

        <div className={styles.timeline}>
          {education.map((edu, i) => (
            <div key={i} className={styles.timelineItem}>
              <div className={styles.timelineDot}>
                <GraduationCap size={18} />
              </div>
              <div className={`card ${styles.eduCard}`}>
                <div className={styles.cardHeader}>
                  <div>
                    <div className={styles.degree}>{edu.degree}</div>
                    <div className={styles.institution}>{edu.institution}</div>
                    <div className={styles.meta}>
                      <span>
                        <Calendar size={13} /> {edu.period}
                      </span>
                      <span>
                        <MapPin size={13} /> {edu.location}
                      </span>
                    </div>
                  </div>
                  <span className={`tag ${edu.statusType === 'progress' ? 'tag-accent' : 'tag-success'}`}>
                    {edu.status}
                  </span>
                </div>
                <p className={styles.description}>{edu.description}</p>
                <div className={styles.courses}>
                  <div className={styles.coursesLabel}>Key Courses</div>
                  <div className={styles.coursesList}>
                    {edu.courses.map((c, j) => (
                      <span key={j} className="tag tag-navy">{c}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
