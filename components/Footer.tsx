'use client'

import styles from './Footer.module.css'
import { Mail, ExternalLink, Heart } from 'lucide-react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Philosophy', href: '#philosophy' },
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

const socials = [
  { icon: <Mail size={18} />, href: 'mailto:r.boshrie.568@westcliff.edu', label: 'Email' },
  { icon: <ExternalLink size={18} />, href: 'https://linkedin.com', label: 'LinkedIn' },
]

export default function Footer() {
  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const id = href.replace('#', '')
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              <span className={styles.logoInitial}>RB</span>
              <div>
                <div className={styles.logoName}>Rabeya Boshrie</div>
                <div className={styles.logoTagline}>English Teacher (ESL &amp; TESOL)</div>
              </div>
            </div>
            <p className={styles.brandDesc}>
              Dedicated to empowering young learners through engaging,
              student-centered curricula at Westcliff University.
            </p>
            <div className={styles.socials}>
              {socials.map((s) => (
                <a key={s.label} href={s.href} className={styles.social} aria-label={s.label} target="_blank" rel="noopener noreferrer">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div className={styles.linksBlock}>
            <div className={styles.linksTitle}>Quick Links</div>
            <nav className={styles.links}>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={styles.link}
                  onClick={(e) => handleNav(e, link.href)}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className={styles.linksBlock}>
            <div className={styles.linksTitle}>Contact</div>
            <div className={styles.contactList}>
              <a href="mailto:r.boshrie.568@westcliff.edu" className={styles.link}>
                r.boshrie.568@westcliff.edu
              </a>
              <div className={styles.link} style={{ cursor: 'default' }}>Westcliff University</div>
              <div className={styles.link} style={{ cursor: 'default' }}>Los Angeles, California</div>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Md Moniruzzaman. All rights reserved.
          </p>
          <p className={styles.madeWith}>
            Made with <Heart size={13} className={styles.heart} /> for language learning
          </p>
        </div>
      </div>
    </footer>
  )
}
