'use client'

import styles from './Skills.module.css'

const skillGroups = [
  {
    category: 'Pedagogy & Curriculum',
    color: 'blue',
    skills: [
      { name: 'Curriculum Development', level: 95 },
      { name: 'Lesson Planning', level: 95 },
      { name: 'Early Childhood Literacy', level: 92 },
      { name: 'Student Assessment', level: 90 },
      { name: 'Classroom Management', level: 94 },
    ],
  },
  {
    category: 'Educational Technology',
    color: 'gold',
    skills: [
      { name: 'Technology Integration', level: 90 },
      { name: 'Google Classroom', level: 95 },
      { name: 'Zoom Management', level: 92 },
      { name: 'Microsoft Office Suite', level: 88 },
      { name: 'Data Visualization', level: 85 },
    ],
  },
  {
    category: 'Communication & Management',
    color: 'navy',
    skills: [
      { name: 'Parent Communication', level: 96 },
      { name: 'Event Planning', level: 90 },
      { name: 'Social Media Management', level: 85 },
      { name: 'KPI Monitoring', level: 88 },
      { name: 'Progress Reporting', level: 92 },
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
