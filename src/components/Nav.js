import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Nav = () => {
  const { pathname } = useLocation()
  const [currentSection, setCurrentSection] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [containerRight, setContainerRight] = useState('-100%')
  const [menuOpacity, setMenuOpacity] = useState('0')

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

  useEffect(() => {
    setContainerRight(isOpen ? '0%' : '-100%') // Toggles the menu position
    setMenuOpacity(isOpen ? '1' : '0') // Toggles the menu visibility
  }, [isOpen])

  function toggleMenu() {
    setIsOpen(!isOpen)
  }

  return (
    <StyledNav>
      <div className="title-nav">
        <h1 className="">
          <p id="logo" href="#home" onClick={(e) => handleScroll(e, 'home')}>
            Portfolio
          </p>
        </h1>
        <button className="menu" onClick={() => toggleMenu()}>
          <div className={`hamburger ${isOpen ? 'active' : ''}`}>
            <div class={`bar`}></div>
          </div>
        </button>
      </div>
      <div className="links-nav">
        <ul>
          <li>
            <p
              onClick={(e) => {
                handleScroll(e, 'home')
                setIsOpen(false)
              }}
            >
              Home
            </p>
            <Line
              transition={{ duration: 0.75 }}
              initial={{ width: '0%' }}
              animate={{ width: currentSection === 'home' ? '100%' : '0%' }}
            />
          </li>
          <li>
            <p
              onClick={(e) => {
                handleScroll(e, 'about')
                setIsOpen(false)
              }}
            >
              About
            </p>
            <Line
              transition={{ duration: 0.75 }}
              initial={{ width: '0%' }}
              animate={{ width: currentSection === 'about' ? '100%' : '0%' }}
            />
          </li>
          <li>
            <p
              onClick={(e) => {
                handleScroll(e, 'skills')
                setIsOpen(false)
              }}
            >
              Skills
            </p>
            <Line
              transition={{ duration: 0.75 }}
              initial={{ width: '0%' }}
              animate={{ width: currentSection === 'skills' ? '100%' : '0%' }}
            />
          </li>
          <li>
            <p
              onClick={(e) => {
                handleScroll(e, 'projects')
                setIsOpen(false)
              }}
            >
              Projects
            </p>
            <Line
              transition={{ duration: 0.75 }}
              initial={{ width: '0%' }}
              animate={{ width: currentSection === 'projects' ? '100%' : '0%' }}
            />
          </li>
          <li>
            <p
              onClick={(e) => {
                handleScroll(e, 'contact')
                setIsOpen(false)
              }}
            >
              Contact
            </p>
            <Line
              transition={{ duration: 0.75 }}
              initial={{ width: '0%' }}
              animate={{ width: currentSection === 'contact' ? '100%' : '0%' }}
            />
          </li>
        </ul>
      </div>
      <div className="wrapper" style={{ right: `${containerRight}` }}>
        <ul className="links-nav-mobile">
          <li>
            <p
              onClick={(e) => {
                handleScroll(e, 'home')
                setIsOpen(false)
              }}
            >
              Home
            </p>
            <Line
              transition={{ duration: 0.75 }}
              initial={{ width: '0%' }}
              animate={{ width: currentSection === 'home' ? '100%' : '0%' }}
            />
          </li>
          <li>
            <p
              onClick={(e) => {
                handleScroll(e, 'about')
                setIsOpen(false)
              }}
            >
              About
            </p>
            <Line
              transition={{ duration: 0.75 }}
              initial={{ width: '0%' }}
              animate={{ width: currentSection === 'about' ? '100%' : '0%' }}
            />
          </li>
          <li>
            <p
              onClick={(e) => {
                handleScroll(e, 'skills')
                setIsOpen(false)
              }}
            >
              Skills
            </p>
            <Line
              transition={{ duration: 0.75 }}
              initial={{ width: '0%' }}
              animate={{ width: currentSection === 'skills' ? '100%' : '0%' }}
            />
          </li>
          <li>
            <p
              onClick={(e) => {
                handleScroll(e, 'projects')
                setIsOpen(false)
              }}
            >
              Projects
            </p>
            <Line
              transition={{ duration: 0.75 }}
              initial={{ width: '0%' }}
              animate={{ width: currentSection === 'projects' ? '100%' : '0%' }}
            />
          </li>
          <li>
            <p
              onClick={(e) => {
                handleScroll(e, 'contact')
                setIsOpen(false)
              }}
            >
              Contact
            </p>
            <Line
              transition={{ duration: 0.75 }}
              initial={{ width: '0%' }}
              animate={{ width: currentSection === 'contact' ? '100%' : '0%' }}
            />
          </li>
        </ul>
      </div>
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
  .wrapper {
    position: fixed;
    top: 0;
    right: -100%;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: end;
    background: rgba(0, 0, 0, 0.9);
    backdrop-filter: blur(20px);
    text-align: center;
    transition: all 0.4s ease;
  }
  .menu {
    background: none;
    border: none;
    z-index: 10;
  }
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
    display: flex;
    @media (max-width: 900px) {
      display: none;
    }
  }
  .links-nav-mobile {
    display: flex;
    flex-direction: column;
    height: 100dvh;
    width: 100vw;
    justify-content: center;
    gap: 6rem;
    p {
      font-size: 2rem;
    }
    @media (min-width: 900px) {
      display: none;
    }
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
    .title-nav {
      padding: 0;
      justify-content: center;
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
  @media (max-width: 900px) {
    background-color: var(--color-tertiary);
    grid-template-columns: 1fr;
    .title-nav {
      padding: 0 4rem;
      justify-content: space-between;
    }
  }
  .hamburger {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: end;
    width: 26px;
    background: none;
    appearance: none;
    border: none;
    cursor: pointer;
    padding: 0;
  }
  .hamburger:before,
  .hamburger .bar,
  .hamburger:after {
    content: '';
    height: 3px;
    background-color: #ffffff;
    border-radius: 5px;
    display: block;
    margin: 3px 0;
    transition: all 0.4s ease;
  }
  .hamburger:before {
    width: 100%;
  }
  .hamburger.is-hovered .bar {
    opacity: 0;
  }
  .hamburger.is-hovered:before {
    width: 90%;
    transform: rotate(-40deg) translateY(3px);
  }
  .hamburger.is-hovered:after {
    width: 90%;
    transform: rotate(40deg) translateY(-3px);
  }
  .hamburger .bar {
    width: 75%;
  }
  .hamburger:after {
    width: 50%;
  }
  .hamburger.active:after {
    transform: translateY(-9px) rotate(45deg);
    background-color: #ffffff;

    width: 100%;
  }
  .hamburger.active .bar {
    opacity: 0;
  }
  .hamburger.active:before {
    transform: translateY(9px) rotate(-45deg);
    background-color: #ffffff;
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
