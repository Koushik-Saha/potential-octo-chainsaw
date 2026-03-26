'use client'

import styles from './LessonPlans.module.css'
import { FileText, Clock, Target, Users, ChevronRight } from 'lucide-react'

const lessonPlans = [
  {
    title: 'Phonics Fun: Exploring Letter Sounds',
    level: 'Beginner (A1)',
    duration: '45 min',
    objectives: 'Students will be able to identify and produce the initial sounds of specified letters through song, games, and tactile activities.',
    skills: ['Phonics', 'Listening', 'Speaking'],
    context: 'Kindergarten ESL',
  },
  {
    title: 'My Community: Vocabulary and Role Play',
    level: 'High Beginner (A2)',
    duration: '60 min',
    objectives: 'Students will learn vocabulary for community helpers and practice asking "Who are you?" and "What do you do?" in a role-play setting.',
    skills: ['Vocabulary', 'Speaking', 'Social Skills'],
    context: 'Primary Grade 1-2',
  },
  {
    title: 'Interactive Storytelling: The Hungry Caterpillar',
    level: 'Beginner (A1-A2)',
    duration: '50 min',
    objectives: 'Students will practice sequencing events, identifying colors and food items, and using "He ate..." in past simple context.',
    skills: ['Reading', 'Listening', 'Grammar'],
    context: 'Primary Grade 2-3',
  },
  {
    title: 'Digital Literacy: Intro to Google Classroom',
    level: 'Mixed Level',
    duration: '40 min',
    objectives: 'Students will learn to navigate the digital classroom environment, submit digital assignments, and engage with interactive literacy apps.',
    skills: ['Digital Literacy', 'Organization', 'Writing'],
    context: 'Blended Primary Learning',
  },
]

export default function LessonPlans() {
  return (
    <section id="lessonplans" className={`section ${styles.lessonPlans}`}>
      <div className="container">
        <div className="section-header">
          <h2>Sample Lesson Plans</h2>
          <p>A selection of communicative, task-based lesson plans designed for diverse ESL learner populations.</p>
        </div>

        <div className={styles.grid}>
          {lessonPlans.map((plan, i) => (
            <div key={i} className={`card ${styles.planCard}`}>
              <div className={styles.planIcon}>
                <FileText size={20} />
              </div>
              <h3 className={styles.planTitle}>{plan.title}</h3>
              <div className={styles.planMeta}>
                <span className="tag">{plan.level}</span>
                <span className={styles.metaItem}><Clock size={13} /> {plan.duration}</span>
                <span className={styles.metaItem}><Users size={13} /> {plan.context}</span>
              </div>
              <div className={styles.section}>
                <div className={styles.sectionLabel}>
                  <Target size={13} /> Learning Objectives
                </div>
                <p className={styles.objectives}>{plan.objectives}</p>
              </div>
              <div className={styles.skills}>
                {plan.skills.map((s, j) => (
                  <span key={j} className="tag tag-navy">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
