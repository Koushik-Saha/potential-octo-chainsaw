'use client'

import styles from './LessonPlans.module.css'
import { FileText, Clock, Target, Users, ChevronRight } from 'lucide-react'

const lessonPlans = [
  {
    title: 'Navigating a New City: Transportation Vocabulary',
    level: 'Intermediate (B1)',
    duration: '60 min',
    objectives: 'Students will be able to ask for and give directions, use transportation vocabulary in context, and engage in a real-world role-play activity.',
    skills: ['Speaking', 'Listening', 'Vocabulary'],
    context: 'Adult ESL / Community College',
  },
  {
    title: 'Reading News Articles: Critical Literacy Skills',
    level: 'Upper-Intermediate (B2)',
    duration: '75 min',
    objectives: 'Students will practice skimming and scanning news articles, identify main ideas vs. supporting details, and evaluate author perspective.',
    skills: ['Reading', 'Critical Thinking', 'Discussion'],
    context: 'Academic EAP',
  },
  {
    title: 'Writing a Formal Email: Workplace Communication',
    level: 'Intermediate (B1–B2)',
    duration: '90 min',
    objectives: 'Students will learn the conventions of formal email writing, practice appropriate register and tone, and draft a formal request email.',
    skills: ['Writing', 'Grammar', 'Pragmatics'],
    context: 'Workplace ESL',
  },
  {
    title: 'Let\'s Talk About Food: Culture and Conversation',
    level: 'Beginner (A2)',
    duration: '50 min',
    objectives: 'Students will expand food-related vocabulary, practice simple present tense, and share about food culture from their home countries.',
    skills: ['Speaking', 'Vocabulary', 'Listening'],
    context: 'Adult Beginner ESL',
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
