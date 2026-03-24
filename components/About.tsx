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
              <span className={styles.headingAccent}>Language Advocate</span>
            </h2>
            <div className="divider divider-left" />

            <p className={styles.bio}>
              I am <strong>Md Moniruzzaman</strong>, an experienced ESL teacher
              and a dedicated TESOL graduate student at{' '}
              <strong>Westcliff University</strong>. My journey in English
              language education spans over eight years, during which I have
              had the privilege of working with learners of all ages and
              proficiency levels across multiple countries.
            </p>
            <p className={styles.bio}>
              My teaching practice is grounded in communicative language
              teaching (CLT), task-based instruction, and a deep respect for
              the multilingual identities my students bring to the classroom.
              I believe that language learning is not just about acquiring
              grammar rules — it is about empowering individuals to connect,
              express, and thrive in an increasingly interconnected world.
            </p>
            <p className={styles.bio}>
              Through my graduate studies in TESOL, I am deepening my
              understanding of second language acquisition theory, curriculum
              design, language assessment, and the intersection of language,
              culture, and identity. This academic journey fuels my
              evidence-based approach to teaching and informs my ongoing
              professional development.
            </p>

            <div className={styles.infoRow}>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Location</span>
                <span className={styles.infoValue}>United States</span>
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
