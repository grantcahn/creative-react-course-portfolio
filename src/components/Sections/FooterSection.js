import styled from 'styled-components'

import { About, GenericSection } from '../../styles'
import { useScroll } from '../useScroll'
import { scrollReveal } from '../../animation'
import SectionTitle from '../SectionTitle'
import ScrollButton from '../ScrollButton'
import SkillsCard from '../SkillsCard'

import html from '../../img/html5.svg'
import css from '../../img/css.svg'
import tailwind from '../../img/tailwind.svg'
import materialUi from '../../img/material-ui.svg'
import javascript from '../../img/javascript.svg'
import typescript from '../../img/typescript.svg'
import react from '../../img/react.svg'
import nextjs from '../../img/nextjs.svg'
import nodejs from '../../img/nodejs.svg'
import mongodb from '../../img/mongodb.svg'
import svelte from '../../img/svelte.svg'
import express from '../../img/express.svg'
import flow from '../../img/flow.svg'
import github from '../../img/github.svg'
import gitlab from '../../img/gitlab.svg'
import gsap from '../../img/gsap.svg'
import wordpress from '../../img/wordpress.svg'
import Socials from '../Socials'

const FooterSection = () => {
  const [element, controls] = useScroll()
  return (
    <div style={{ padding: '5rem 0rem' }}>
      <Footer>        
        <div className="skills-section">
          <Socials />
        </div>
      </Footer>
    </div>
  )
}

const Footer = styled(GenericSection)`
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
  .skills-section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    padding-top: 2rem;
  }
  h2 {
    padding-bottom: 1rem;
    font-weight: 600;
  }
`

export default FooterSection
