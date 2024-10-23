//page components
import HeroSection from '../components/Sections/HeroSection'
import AboutSection from '../components/AboutSection'
import FaqSection from '../components/ProjectsSection'
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
      <HeroSection />
      <AboutSection />
      <FaqSection />
    </motion.div>
  )
}

export default Home
