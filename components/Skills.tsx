'use client'

import styles from './Skills.module.css'

const skillGroups = [
  {
    category: 'ESL / EFL Methodologies',
    color: 'blue',
    skills: [
      { name: 'Communicative Language Teaching', level: 95 },
      { name: 'Task-Based Language Teaching', level: 90 },
      { name: 'Content-Based Instruction', level: 82 },
      { name: 'Genre-Based Approach', level: 78 },
      { name: 'Grammar Translation Method', level: 75 },
    ],
  },
  {
    category: 'Language Skills Development',
    color: 'gold',
    skills: [
      { name: 'Reading Instruction', level: 93 },
      { name: 'Writing Instruction', level: 90 },
      { name: 'Speaking & Oral Fluency', level: 88 },
      { name: 'Listening Comprehension', level: 85 },
      { name: 'Vocabulary Development', level: 92 },
    ],
  },
  {
    category: 'Assessment & Evaluation',
    color: 'navy',
    skills: [
      { name: 'Formative Assessment Design', level: 88 },
      { name: 'Summative Assessment', level: 85 },
      { name: 'IELTS / TOEFL Preparation', level: 90 },
      { name: 'Portfolio-Based Assessment', level: 80 },
      { name: 'Needs Analysis', level: 85 },
    ],
  },
  {
    category: 'Educational Technology',
    color: 'blue',
    skills: [
      { name: 'Google Classroom', level: 92 },
      { name: 'Nearpod / Padlet', level: 88 },
      { name: 'Zoom / Online Teaching', level: 90 },
      { name: 'Canva for Educators', level: 82 },
      { name: 'Corpus Tools & CALL', level: 75 },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className={`section ${styles.skills}`}>
      <div className="container">
        <div className="section-header">
          <h2>Skills &amp; Competencies</h2>
          <p>A comprehensive set of pedagogical, linguistic, and technological skills developed over years of practice.</p>
        </div>

        <div className={styles.grid}>
          {skillGroups.map((group, i) => (
            <div key={i} className={`card ${styles.skillCard}`}>
              <h3 className={`${styles.category} ${styles[`category-${group.color}`]}`}>
                {group.category}
              </h3>
              <div className={styles.bars}>
                {group.skills.map((skill, j) => (
                  <div key={j} className={styles.skillItem}>
                    <div className={styles.skillLabel}>
                      <span>{skill.name}</span>
                      <span className={styles.skillPercent}>{skill.level}%</span>
                    </div>
                    <div className={styles.barBg}>
                      <div
                        className={`${styles.barFill} ${styles[`fill-${group.color}`]}`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
