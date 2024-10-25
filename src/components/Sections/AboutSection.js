import styled from 'styled-components'

import { GenericSection, Section } from '../../styles'
import { useScroll } from '../useScroll'
import { fade } from '../../animation'
import SectionTitle from '../SectionTitle'
import animoca from '../../img/animocabrands.svg'
import euroleague from '../../img/EL-logo.svg'
import qpr from '../../img/icons/qpr-icon.png'
import afl from '../../img/icons/AFL.png'
import gresini from '../../img/gresini-logo.png'

const brands = [
  {
    name: 'Animoca Brands',
    image: animoca,
  },
  {
    name: 'Euroleague',
    image: euroleague,
  },
  {
    name: 'QPR',
    image: qpr,
  },
  {
    name: 'AFL',
    image: afl,
  },
  {
    name: 'Gresini MotoGP',
    image: gresini,
  },
]

const AboutSection = () => {
  const [element, controls] = useScroll()
  return (
    <AboutMe variants={fade} animate={controls} initial="hidden" ref={element}>
      <div className="aboutme">
        <SectionTitle title={'About Me'} />
        <div className="section-grid">
          <SubSection>
            <h2>I’ve been developing websites since 2018</h2>
            <p>
              What started as a hobby turned into a passion. I have been
              creating websites for the past 6 years. I have worked with various
              clients and have helped them to improve their online presence. I
              can help you to create a professional website for your business.
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
              I started with good old HTML and CSS, WordPress and then moved on
              to using React, Next.js and Svelte. Styling disciplines such as I
              have mainly been responsible for the front-end development of
              websites. I have also worked with back-end technologies like
              Nodejs and MongoDB.
            </p>
          </SubSection>
        </div>
      </div>
      <div className="brand-section">
        <p>Brands I've worked with:</p>
        <div className="brands">
          {brands.map((brand, index) => (
            <img
              src={brand.image}
              alt={brand.name}
              key={index}
              className="brand-logo"
            />
          ))}
        </div>
      </div>
    </AboutMe>
  )
}

//Styled Components
const AboutMe = styled(GenericSection)`
  background-color: var(--color-bg2);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .section-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
  }
  .brand-section {
    border-top: 1px solid #777777;
    margin-top: 6rem;
    padding-top: 4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 6rem;
    p {
      font-weight: 600;
    }
  }
  .brand-logo {
    height: 3.5rem;
    filter: grayscale(100%);
  }
  .brands {
    display: flex;
    gap: 5rem;
    justify-content: center;
    align-items: center;
  }
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
