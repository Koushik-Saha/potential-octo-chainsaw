'use client'

import styles from './TeachingPhilosophy.module.css'
import { Quote } from 'lucide-react'

const principles = [
  {
    number: '01',
    title: 'Student-Centered Learning',
    desc: 'I design lessons that place learners at the center, honoring their prior knowledge, cultural backgrounds, and individual learning styles. Every student has a unique linguistic story that enriches our classroom community.',
  },
  {
    number: '02',
    title: 'Communicative Competence',
    desc: 'Language is for communication. My instruction prioritizes authentic, meaningful language use over rote memorization, helping students develop fluency and confidence in real-world contexts.',
  },
  {
    number: '03',
    title: 'Culturally Responsive Teaching',
    desc: 'I integrate students\' cultural identities and funds of knowledge into the curriculum, creating relevance and fostering a safe, inclusive space where all voices are valued.',
  },
  {
    number: '04',
    title: 'Evidence-Based Practice',
    desc: 'My pedagogical decisions are informed by current SLA research, ongoing reflective practice, and a commitment to data-driven instruction that continuously improves student outcomes.',
  },
]

export default function TeachingPhilosophy() {
  return (
    <section id="philosophy" className={`section section-alt ${styles.philosophy}`}>
      <div className="container">
        <div className="section-header">
          <h2>Teaching Philosophy</h2>
          <p>The beliefs, values, and principles that guide my practice as an ESL educator.</p>
        </div>

        {/* Featured Quote */}
        <div className={styles.quoteCard}>
          <div className={styles.quoteIcon}>
            <Quote size={32} />
          </div>
          <blockquote className={styles.quote}>
            "My mission as an educator is to ignite curiosity and foster a genuine love for language in every student, building a strong foundation for lifelong learning through engagement and innovation."
          </blockquote>
          <cite className={styles.quoteCite}>— Rabeya Boshrie</cite>
        </div>

        {/* Core Principles */}
        <div className={styles.principlesGrid}>
          {principles.map((p) => (
            <div key={p.number} className={`card ${styles.principleCard}`}>
              <div className={styles.principleNumber}>{p.number}</div>
              <h3 className={styles.principleTitle}>{p.title}</h3>
              <p className={styles.principleDesc}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
