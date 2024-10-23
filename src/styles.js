import styled from 'styled-components'
import { motion } from 'framer-motion'

export const GenericSection = styled(motion.div)`
  min-height: 90vh;
  padding: 5rem 2rem;
  color: var(--color-primary);
  @media (max-width: 1300px) {
    padding: 2rem 2rem;
  }
`

export const Section = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 8rem;
  @media (max-width: 1300px) {
    justify-content: center;
  }
`

export const About = styled(motion.div)`
  min-height: 90vh;
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
  color: var(--color-quaternary);
  @media (max-width: 1300px) {
    display: block;
    padding: 2rem 2rem;
    text-align: center;
  }
`

export const Description = styled.div`
  display: flex;
  flex: 1;
  background-color: #171717;
  align-items: center;
  padding: 2rem 0rem;
  height: 100%;
  z-index: 2;
  h2 {
    font-weight: bold;
  }
  h3 {
    font-size: 2.5rem;
    font-weight: 500;
    margin-bottom: -0.8rem;
  }
  h4 {
    margin-top: 1rem;
    padding: 1rem 3rem;
    font-size: 1.5rem;
    color: #171717;
    background-color: #fef200;
  }
  .header-content {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5rem;
  }
  @media (max-width: 1300px) {
    padding: 0;
    button {
      margin: 2rem 0rem 5rem 0rem;
    }
  }
`

export const Image = styled.div`
  flex: 1;
  z-index: 1;
  img {
    width: 100%;
    height: 90vh;
    object-fit: cover;
  }
`

export const Hide = styled.div`
  padding-left: 10rem;
  z-index: 2;
`
