import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Nav = () => {
  const { pathname } = useLocation()
  const [currentSection, setCurrentSection] = useState('')

  const handleScroll = (e, targetId) => {
    e.preventDefault()
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      const offset = 80
      const elementPosition =
        targetElement.getBoundingClientRect().top + window.scrollY
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }
  useEffect(() => {
    const sections = document.querySelectorAll('section')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id)
          }
        })
      },
      { threshold: 0.1 }
    )

    sections.forEach((section) => {
      observer.observe(section)
    })

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section)
      })
    }
  }, [])

  return (
    <StyledNav>
      <div className="title-nav">
        <h1 className="">
          <p id="logo" href="#home" onClick={(e) => handleScroll(e, 'home')}>
            Portfolio
          </p>
        </h1>
      </div>
      <div className="links-nav">
        <ul>
          <li>
            <p onClick={(e) => handleScroll(e, 'home')}>Home</p>
            <Line
              transition={{ duration: 0.75 }}
              initial={{ width: '0%' }}
              animate={{ width: currentSection === 'home' ? '100%' : '0%' }}
            />
          </li>
          <li>
            <p onClick={(e) => handleScroll(e, 'about')}>About</p>
            <Line
              transition={{ duration: 0.75 }}
              initial={{ width: '0%' }}
              animate={{ width: currentSection === 'about' ? '100%' : '0%' }}
            />
          </li>
          <li>
            <p onClick={(e) => handleScroll(e, 'skills')}>Skills</p>
            <Line
              transition={{ duration: 0.75 }}
              initial={{ width: '0%' }}
              animate={{ width: currentSection === 'skills' ? '100%' : '0%' }}
            />
          </li>
          <li>
            <p onClick={(e) => handleScroll(e, 'projects')}>Projects</p>
            <Line
              transition={{ duration: 0.75 }}
              initial={{ width: '0%' }}
              animate={{ width: currentSection === 'projects' ? '100%' : '0%' }}
            />
          </li>
          <li>
            <p onClick={(e) => handleScroll(e, 'contact')}>Contact</p>
            <Line
              transition={{ duration: 0.75 }}
              initial={{ width: '0%' }}
              animate={{ width: currentSection === 'contact' ? '100%' : '0%' }}
            />
          </li>
        </ul>
      </div>
      <ul className="links-nav-mobile">
        <li>
          <p onClick={(e) => handleScroll(e, 'home')}>Home</p>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: '0%' }}
            animate={{ width: currentSection === 'home' ? '100%' : '0%' }}
          />
        </li>
        <li>
          <p onClick={(e) => handleScroll(e, 'about')}>About</p>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: '0%' }}
            animate={{ width: currentSection === 'about' ? '100%' : '0%' }}
          />
        </li>
        <li>
          <p onClick={(e) => handleScroll(e, 'skills')}>Skills</p>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: '0%' }}
            animate={{ width: currentSection === 'skills' ? '100%' : '0%' }}
          />
        </li>
        <li>
          <p onClick={(e) => handleScroll(e, 'projects')}>Projects</p>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: '0%' }}
            animate={{ width: currentSection === 'projects' ? '100%' : '0%' }}
          />
        </li>
        <li>
          <p onClick={(e) => handleScroll(e, 'contact')}>Contact</p>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: '0%' }}
            animate={{ width: currentSection === 'contact' ? '100%' : '0%' }}
          />
        </li>
      </ul>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  min-height: 10vh;
  display: grid;
  grid-template-columns: 1fr 2fr;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  background-color: #5d5d5d;
  position: sticky;
  top: 0;
  z-index: 10;
  p {
    color: #d1d1d1;
    text-decoration: none;
    cursor: pointer;
    transition: color 0.3s ease;
    :hover {
      color: var(--color-bg);
    }
  }
  .title-nav {
    background-color: var(--color-tertiary);
    height: 100%;
    display: flex;
    padding-left: 10rem;
    align-items: center;
  }
  .links-nav {
    display: none;
    @media (min-width: 900px) {
      display: flex;
    }
  }
  .links-nav-mobile {
    display: flex;
    flex-direction: column;
    height: 100dvh;
    width: 100vw;
  }
  ul {
    display: flex;
    list-style: none;
    padding: 0rem 10rem;
    justify-content: space-around;
    align-items: center;
    width: 100%;
  }
  #logo {
    font-size: 2rem;
    font-weight: 900;
  }
  li {
    position: relative;
  }
  @media (max-width: 1300px) {
    flex-direction: column;
    padding: 2rem 1rem;
    #logo {
      display: inline-block;
      margin: 1rem;
      font-size: 2rem;
    }
    ul {
      padding: 2rem;
      justify-content: space-around;
      width: 100%;
    }
    li {
      padding: 0;
    }
  }
`

const Line = styled(motion.div)`
  height: 0.3rem;
  background-color: var(--color-secondary);
  width: 0;
  position: absolute;
  bottom: -30%;
  left: 0%;
  @media (max-width: 1300px) {
    left: 0%;
    width: 80%;
  }
`

export default Nav
