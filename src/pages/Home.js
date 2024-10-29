//page components
import HeroSection from '../components/Sections/HeroSection'
import AboutSection from '../components/Sections/AboutSection'
import SkillsSection from '../components/Sections/SkillsSection'
import ProjectsSection from '../components/Sections/ProjectsSection'
import FooterSection from '../components/Sections/FooterSection'
// Animations
import { motion } from 'framer-motion'
import { pageAnimation } from '../animation'

const Home = () => {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <section id="home">
        <HeroSection />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      {/* <section id="skills">
        <SkillsSection />
      </section> */}
      <section id="projects">
        <ProjectsSection />
      </section>
      <section id="contact">
        <FooterSection />
      </section>
    </motion.div>
  )
}

export default Home
