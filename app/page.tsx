import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import TeachingPhilosophy from '@/components/TeachingPhilosophy'
import Education from '@/components/Education'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Certifications from '@/components/Certifications'
import LessonPlans from '@/components/LessonPlans'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <TeachingPhilosophy />
        <Education />
        <Experience />
        <Skills />
        <Certifications />
        <LessonPlans />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
