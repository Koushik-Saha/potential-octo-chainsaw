'use client'

import styles from './Education.module.css'
import { GraduationCap, Calendar, MapPin } from 'lucide-react'

const education = [
  {
    degree: 'Master of Arts in TESOL',
    institution: 'Westcliff University',
    location: 'Irvine, California, USA',
    period: '2022 – Present',
    status: 'In Progress',
    statusType: 'progress',
    description:
      'Graduate studies focused on second language acquisition, curriculum design, language assessment, intercultural communication, and advanced pedagogy for English language learners. Completing a showcase portfolio as part of the capstone requirements.',
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
    degree: 'Bachelor of Arts in English',
    institution: 'University (Bangladesh)',
    location: 'Bangladesh',
    period: '2012 – 2016',
    status: 'Completed',
    statusType: 'completed',
    description:
      'Undergraduate studies in English language and literature with a focus on linguistics, discourse analysis, and applied English skills.',
    courses: [
      'Applied English Linguistics',
      'English Literature',
      'Discourse Analysis',
      'Phonetics & Phonology',
      'Sociolinguistics',
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
