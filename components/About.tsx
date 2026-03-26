'use client'

import styles from './About.module.css'
import { MapPin, GraduationCap, Heart, Target } from 'lucide-react'

const highlights = [
  {
    icon: <GraduationCap size={22} />,
    title: 'Academic Background',
    desc: 'Pursuing MA in TESOL at Westcliff University. Strong foundation in applied linguistics and second language acquisition theory.',
  },
  {
    icon: <Heart size={22} />,
    title: 'Teaching Passion',
    desc: 'Deeply committed to creating inclusive, student-centered classrooms that celebrate linguistic diversity and foster genuine communication.',
  },
  {
    icon: <Target size={22} />,
    title: 'Professional Goals',
    desc: 'To bridge research and practice in ESL education, advocating for equitable access to quality English language instruction globally.',
  },
  {
    icon: <MapPin size={22} />,
    title: 'Global Perspective',
    desc: 'Experience working with ELLs from diverse cultural and linguistic backgrounds in various academic and community settings.',
  },
]

export default function About() {
  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className="container">
        <div className={styles.grid}>
          {/* Text Content */}
          <div className={styles.textCol}>
            <div className={styles.eyebrow}>About Me</div>
            <h2 className={styles.heading}>
              Passionate Educator &amp;{' '}
              <span className={styles.headingAccent}>Early Literacy Specialist</span>
            </h2>
            <div className="divider divider-left" />

            <p className={styles.bio}>
              I am <strong>Rabeya Boshrie</strong>, a passionate and innovative
              English educator with experience shaping young minds in kindergarten
              and primary school settings. Currently, I am pursuing my MA in TESOL
              at <strong>Westcliff University</strong>.
            </p>
            <p className={styles.bio}>
              My teaching philosophy centers on crafting engaging, student-centered
              curricula that ignite curiosity and foster a genuine love for language.
              I am adept at blending traditional teaching methods with modern
              technology to create interactive, hands-on learning experiences
              that resonate with early learners.
            </p>
            <p className={styles.bio}>
              Utilizing a proactive approach to student development, I leverage
              data to personalize instruction and elevate student outcomes.
              As a collaborative and empathetic communicator, I am committed to
              building lasting relationships with students, parents, and
              colleagues to create thriving, inclusive environments.
            </p>

            <div className={styles.infoRow}>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Location</span>
                <span className={styles.infoValue}>Los Angeles, CA</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>University</span>
                <span className={styles.infoValue}>Westcliff University</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Program</span>
                <span className={styles.infoValue}>MA in TESOL</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Focus</span>
                <span className={styles.infoValue}>ESL / EAP / EFL</span>
              </div>
            </div>
          </div>

          {/* Highlight Cards */}
          <div className={styles.cardsCol}>
            {highlights.map((item, i) => (
              <div key={i} className={`card ${styles.highlightCard}`}>
                <div className={styles.cardIcon}>{item.icon}</div>
                <div>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardDesc}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
