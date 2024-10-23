import styled from 'styled-components'
import Toggle from './Toggle'

import { About, GenericSection } from '../styles'
import { AnimateSharedLayout } from 'framer-motion'
import { useScroll } from './useScroll'
import { scrollReveal } from '../animation'
import SectionTitle from './SectionTitle'
import ScrollButton from './ScrollButton'

const ProjectsSection = () => {
  const [element, controls] = useScroll()
  return (
    <div>
      <Projects
        variants={scrollReveal}
        ref={element}
        animate={controls}
        initial="hidden"
      >
        <SectionTitle title={'My skills'} />
        <div className="carousel-buttons">
          <h2>My extensive list of skills</h2>
          <div className="chevron-buttons">
            <ScrollButton direction="left" isActive={false} />
            <ScrollButton direction="right" isActive={true} />
          </div>
        </div>
      </Projects>
    </div>
  )
}

const Projects = styled(GenericSection)`
.chevron-buttons {
    display: flex;
    justify-content: center;
    gap: 1rem;
  }
  .carousel-buttons {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
}
  h2 {
    padding-bottom: 1rem;
    font-weight: 600;
  }
`

export default ProjectsSection
