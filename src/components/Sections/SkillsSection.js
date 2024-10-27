import React, { useState } from 'react'
import styled from 'styled-components'

import { GenericSection } from '../../styles'
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
import aws from '../../img/aws.svg'

const skills = [
  {
    imgSrc: html,
    imgSrc2: css,
    title: 'HTML & CSS',
    description: 'I have been working with HTML and CSS for the past 6 years.',
  },
  {
    imgSrc: tailwind,
    title: 'Tailwind CSS',
    description: 'I have been working with Tailwind CSS for the past 2 years.',
  },
  {
    imgSrc: materialUi,
    title: 'Material UI',
    description: 'I have been working with Material UI for the past 2 years.',
  },
  {
    imgSrc: javascript,
    imgSrc2: typescript,
    title: 'JavaScript',
    description: 'I have been working with JavaScript for the past 6 years.',
  },
  {
    imgSrc: react,
    title: 'React',
    description: 'I have been working with React for the past 4 years.',
  },
  {
    imgSrc: nextjs,
    title: 'Next.js',
    description: 'I have been working with Next.js for the past 2 years.',
  },
  {
    imgSrc: svelte,
    title: 'Svelte',
    description: 'I have been working with Svelte for the past 1 year.',
  },
  {
    imgSrc: flow,
    title: 'Flow',
    description: 'I have been working with Flow for the past 2 years.',
  },
  {
    imgSrc: wordpress,
    title: 'WordPress',
    description: 'I have been working with WordPress for the past 6 years.',
  },
  {
    imgSrc: aws,
    title: 'AWS Hosting',
    description: 'I have been working with AWS for the past 2 years.',
  },
  {
    imgSrc: gsap,
    title: 'GSAP',
    description: 'I have been working with GSAP for the past 2 years.',
  },
  {
    imgSrc: github,
    imgSrc2: gitlab,
    title: 'Git & GitLab',
    description:
      'I have been working with GitHub and GitLab for the past 6 years.',
  },
  {
    imgSrc: express,
    title: 'Express',
    description: 'I have been working with Express for the past 4 years.',
  },
  {
    imgSrc: nodejs,
    title: 'Node.js',
    description: 'I have been working with Node.js for the past 4 years.',
  },
  {
    imgSrc: mongodb,
    title: 'MongoDB',
    description: 'I have been working with MongoDB for the past 4 years.',
  },
]

const SkillsSection = () => {
  const [element, controls] = useScroll()
  const [translate, setTranslate] = useState(0)

  const handleScrollButtonClick = (direction) => {
    if (translate === -220 && direction === 'right') {
      setTranslate(-224)
      return
    }
    if (translate === -224 && direction === 'right') {
      setTranslate(0)
      return
    }
    if (translate === -4 && direction === 'left') {
      setTranslate(0)
      return
    }
    if (translate === 0 && direction === 'left') {
      setTranslate(-224)
      return
    }
    const newTranslate = direction === 'left' ? translate + 22 : translate - 22
    console.log(`Old translate: ${translate}, New translate: ${newTranslate}`)
    setTranslate(newTranslate)
  }

  console.log(`Current translate: ${translate}`)

  console.log(translate)

  return (
    <div style={{ padding: '5rem 0rem' }}>
      <Skills
      // variants={scrollReveal}
      // ref={element}
      // animate={controls}
      // initial="hidden"
      >
        <SectionTitle title={'My skills'} />
        <div className="carousel-buttons">
          <h2>My extensive list of skills</h2>
          <div className="chevron-buttons">
            <ScrollButton
              direction="left"
              isActive={false}
              onClick={() => handleScrollButtonClick('left')}
            />
            <ScrollButton
              direction="right"
              isActive={true}
              onClick={() => handleScrollButtonClick('right')}
            />
          </div>
        </div>
        <div className="skills-section">
          {skills.map((skill, index) => (
            <SkillsCard
              key={index}
              imgSrc={skill.imgSrc}
              imgSrc2={skill.imgSrc2}
              title={skill.title}
              description={skill.description}
              shift={translate}
            />
          ))}
        </div>
      </Skills>
    </div>
  )
}

const Skills = styled(GenericSection)`
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
    display: flex;
    gap: 2rem;
    padding-top: 2rem;
  }
  h2 {
    padding-bottom: 1rem;
    font-weight: 600;
  }
`

export default SkillsSection
