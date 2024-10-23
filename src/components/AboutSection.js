import styled from 'styled-components'

import { About, Description, GenericSection, Image, Section } from '../styles'
import { useScroll } from './useScroll'
import { fade } from '../animation'
import SectionTitle from './SectionTitle'

const AboutSection = () => {
  const [element, controls] = useScroll()
  return (
    <AboutMe variants={fade} animate={controls} initial="hidden" ref={element}>
      <SectionTitle title={'About Me'} />
      <Section>
        <SubSection>
          <h2>I’ve been developing websites since 2018</h2>
          <p>
            What started as a hobby turned into a passion. I have been creating
            websites for the past 6 years. I have worked with various clients
            and have helped them to improve their online presence. I can help
            you to create a professional website for your business.
          </p>
        </SubSection>
        <SubSection>
          <div className="counter-section">
            <Counter>
              <h1>6</h1>
              <h3>Years of experience</h3>
            </Counter>
            <Counter>
              <h1>10</h1>
              <h3>Successful Projects</h3>
            </Counter>
          </div>
          <p>
            I started with good old HTML and CSS, WordPress and then moved on to
            using React, Next.js and Svelte. Styling disciplines such as I have
            mainly been responsible for the front-end development of websites. I
            have also worked with back-end technologies like Nodejs and MongoDB.
          </p>
        </SubSection>
      </Section>
    </AboutMe>
  )
}

//Styled Components
const AboutMe = styled(GenericSection)`
  background-color: var(--color-bg2);
  h2 {
    padding-bottom: 1rem;
    font-weight: 600;
  }
`

const SubSection = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 1300px) {
    justify-content: center;
  }
  .counter-section {
    display: flex;
    gap: 2rem;
    padding-bottom: 1rem;
  }
`

const Counter = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  h1 {
    font-size: 5rem;
    font-weight: 600;
  }
  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    max-width: 10rem;
  }
`

export default AboutSection
