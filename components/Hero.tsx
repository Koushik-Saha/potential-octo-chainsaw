'use client'

import { useEffect, useRef } from 'react'
import styles from './Hero.module.css'
import { BookOpen, Mail, ChevronDown, Award, Users, Globe } from 'lucide-react'

const stats = [
  { icon: <BookOpen size={18} />, value: '2+', label: 'Years Teaching' },
  { icon: <Users size={18} />, value: '100+', label: 'Students Taught' },
  { icon: <Globe size={18} />, value: '2', label: 'Countries Served' },
  { icon: <Award size={18} />, value: 'MA', label: 'TESOL Candidate' },
]

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null)

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className={styles.hero}>
      {/* Background layers */}
      <div className={styles.bgGradient} />
      <div className={styles.bgPattern} />
      <div className={styles.bgOrbs}>
        <div className={styles.orb1} />
        <div className={styles.orb2} />
        <div className={styles.orb3} />
      </div>

      <div className={`container ${styles.content}`}>
        <div className={styles.textBlock}>
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            ESL &amp; TESOL Educator
          </div>

          <h1 ref={titleRef} className={styles.name}>
            Rabeya <span className={styles.highlight}>Boshrie</span>
          </h1>

          <p className={styles.tagline}>
            Shaping Young Minds Through{' '}
            <span className={styles.taglineAccent}>Engagement</span>,{' '}
            <span className={styles.taglineAccent}>Innovation</span> &amp;{' '}
            <span className={styles.taglineAccent}>Early Literacy</span>
          </p>

          <p className={styles.subtitle}>
            MA TESOL Student at{' '}
            <strong>Westcliff University</strong> · Experienced English Teacher ·
            Dedicated to crafting student-centered curricula that ignite curiosity and foster a love for language.
          </p>

          <div className={styles.actions}>
            <a
              href="#contact"
              className="btn btn-primary"
              onClick={(e) => {
                e.preventDefault()
                document
                  .getElementById('contact')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              <Mail size={16} />
              Get In Touch
            </a>
            <a
              href="#about"
              className="btn btn-outline"
              onClick={(e) => {
                e.preventDefault()
                scrollToAbout()
              }}
            >
              <BookOpen size={16} />
              View Portfolio
            </a>
          </div>
        </div>

        {/* Profile Card */}
        <div className={styles.profileCard}>
          <div className={styles.avatarRing}>
            <div className={styles.avatar}>
              <span className={styles.avatarInitials}>RB</span>
            </div>
          </div>
          <div className={styles.cardInfo}>
            <h3>Rabeya Boshrie</h3>
            <p>English Teacher (ESL &amp; TESOL)</p>
            <div className={styles.cardTags}>
              <span className="tag">English Language</span>
              <span className="tag tag-accent">TESOL</span>
              <span className="tag">Pedagogy</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className={styles.statsBar}>
        <div className="container">
          <div className={styles.stats}>
            {stats.map((stat, i) => (
              <div key={i} className={styles.stat}>
                <div className={styles.statIcon}>{stat.icon}</div>
                <div>
                  <div className={styles.statValue}>{stat.value}</div>
                  <div className={styles.statLabel}>{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button className={styles.scrollBtn} onClick={scrollToAbout} aria-label="Scroll down">
        <ChevronDown size={22} />
      </button>
    </section>
  )
}
