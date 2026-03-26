'use client'

import styles from './Contact.module.css'
import { useState } from 'react'
import { Mail, ExternalLink, MapPin, Send, MessageSquare } from 'lucide-react'

const contactInfo = [
  {
    icon: <Mail size={20} />,
    label: 'Email',
    value: 'r.boshrie.568@westcliff.edu',
    href: 'mailto:r.boshrie.568@westcliff.edu',
  },
  {
    icon: <ExternalLink size={20} />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/rabeya-boshrie',
    href: 'https://linkedin.com',
  },
  {
    icon: <MapPin size={20} />,
    label: 'Location',
    value: 'Los Angeles, California',
    href: null,
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    await new Promise((r) => setTimeout(r, 1200))
    setStatus('sent')
  }

  return (
    <section id="contact" className={`section section-dark ${styles.contact}`}>
      <div className="container">
        <div className="section-header">
          <h2>Get In Touch</h2>
          <p>I&lsquo;d love to connect, collaborate, or answer any questions about my teaching practice and portfolio.</p>
        </div>

        <div className={styles.grid}>
          {/* Contact Info */}
          <div className={styles.infoCol}>
            <p className={styles.infoIntro}>
              Whether you are an educator, administrator, or prospective student,
              I am always happy to connect. Feel free to reach out via the form
              or through any of the channels below.
            </p>

            <div className={styles.contactItems}>
              {contactInfo.map((item, i) => (
                <div key={i} className={styles.contactItem}>
                  <div className={styles.contactIcon}>{item.icon}</div>
                  <div>
                    <div className={styles.contactLabel}>{item.label}</div>
                    {item.href ? (
                      <a href={item.href} className={styles.contactValue} target="_blank" rel="noopener noreferrer">
                        {item.value}
                      </a>
                    ) : (
                      <div className={styles.contactValue}>{item.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.availability}>
              <div className={styles.availDot} />
              <span>Available for part-time teaching positions &amp; collaborations</span>
            </div>
          </div>

          {/* Contact Form */}
          <div className={styles.formCol}>
            {status === 'sent' ? (
              <div className={styles.successMsg}>
                <div className={styles.successIcon}>
                  <MessageSquare size={28} />
                </div>
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. I will get back to you as soon as possible.</p>
                <button className="btn btn-accent" onClick={() => setStatus('idle')}>
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="contact-name" className={styles.label}>Full Name</label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      className={styles.input}
                      placeholder="Your name"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="contact-email" className={styles.label}>Email Address</label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      className={styles.input}
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="contact-subject" className={styles.label}>Subject</label>
                  <select
                    id="contact-subject"
                    name="subject"
                    className={styles.input}
                    value={form.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="collaboration">Teaching Collaboration</option>
                    <option value="tutoring">Private Tutoring</option>
                    <option value="Employment">Employment Opportunity</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="contact-message" className={styles.label}>Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    className={styles.textarea}
                    rows={5}
                    placeholder="Your message..."
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-accent" disabled={status === 'sending'}>
                  <Send size={16} />
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
