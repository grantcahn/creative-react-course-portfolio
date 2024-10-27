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
    rating: 5,
  },
  {
    imgSrc: tailwind,
    title: 'Tailwind CSS',
    description:
      'Tailwind CSS has been my go-to CSS framework for the past 2 and a half years.',
    rating: 5,
  },
  {
    imgSrc: materialUi,
    title: 'Material UI',
    description:
      'I have been using Material UI for the past 2 and a half years.',
    rating: 4,
  },
  {
    imgSrc: javascript,
    imgSrc2: typescript,
    title: 'JavaScript',
    description:
      'I have experience using JavaScript as well as Typescript for the past 4 years.',
    rating: 5,
  },
  {
    imgSrc: react,
    title: 'React',
    description:
      'I have been working on projects built with React for the past 3 years.',
    rating: 5,
  },
  {
    imgSrc: nextjs,
    title: 'Next.js',
    description: 'I have been working on Next.js for the past 2 years.',
    rating: 4,
  },
  {
    imgSrc: svelte,
    title: 'Svelte',
    description:
      'I have built a couple of projects using Svelte and SvelteKit.',
    rating: 4,
  },
  {
    imgSrc: flow,
    title: 'Flow',
    description:
      'I have written a couple of smart contracts using Cadence and worked on some big NFT projects.',
    rating: 3,
  },
  {
    imgSrc: wordpress,
    title: 'WordPress',
    description: 'I have built multiple websites using WordPress.',
    rating: 4,
  },
  {
    imgSrc: aws,
    title: 'AWS Hosting',
    description:
      'I have some familiarity with AWS hosting and have deployed a couple of static projects on AWS.',
    rating: 2,
  },
  {
    imgSrc: gsap,
    title: 'GSAP',
    description:
      'I have built multiple GSAP animations that were used in React projects.',
    rating: 3,
  },
  {
    imgSrc: github,
    imgSrc2: gitlab,
    title: 'Git & GitLab',
    description:
      'I have been using with GitHub and GitLab for the past 4 years.',
    rating: 4,
  },
  {
    imgSrc: express,
    title: 'Express',
    description: 'I have used and created Express endpoints and middleware.',
    rating: 3,
  },
  {
    imgSrc: nodejs,
    title: 'Node.js',
    description: 'I have been working with Node.js for the past 3 years.',
    rating: 3,
  },
  {
    imgSrc: mongodb,
    title: 'MongoDB',
    rating: 2,
    description:
      'I have been primarily using MongoDB as primary DB for the past year.',
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
    <div style={{ padding: '2rem 0rem' }}>
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
              rating={skill.rating}
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
