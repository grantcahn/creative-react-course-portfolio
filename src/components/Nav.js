import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'

const Nav = () => {
  const { pathname } = useLocation()
  return (
    <StyledNav>
      <div className="title-nav">
        <h1 className="">
          <Link id="logo" to="/">
            FE Developer
          </Link>
        </h1>
      </div>
      <div className="links-nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
            <Line
              transition={{ duration: 0.75 }}
              initial={{ width: '0%' }}
              animate={{ width: pathname === '/' ? '100%' : '0%' }}
            />
          </li>
          <li>
            <Link to="/work">About</Link>
            <Line
              transition={{ duration: 0.75 }}
              initial={{ width: '0%' }}
              animate={{ width: pathname === '/work' ? '100%' : '0%' }}
            />
          </li>
          <li>
            <Link to="/work">Skills</Link>
            <Line
              transition={{ duration: 0.75 }}
              initial={{ width: '0%' }}
              animate={{ width: pathname === '/work' ? '100%' : '0%' }}
            />
          </li>
          <li>
            <Link to="/contact">Portfolio</Link>
            <Line
              transition={{ duration: 0.75 }}
              initial={{ width: '0%' }}
              animate={{ width: pathname === '/contact' ? '100%' : '0%' }}
            />
          </li>
          <li>
            <Link to="/contact">Testimonials</Link>
            <Line
              transition={{ duration: 0.75 }}
              initial={{ width: '0%' }}
              animate={{ width: pathname === '/contact' ? '100%' : '0%' }}
            />
          </li>
          <li>
            <Link to="/contact">Contact</Link>
            <Line
              transition={{ duration: 0.75 }}
              initial={{ width: '0%' }}
              animate={{ width: pathname === '/contact' ? '100%' : '0%' }}
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
  a {
    color: white;
    text-decoration: none;
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
  bottom: -50%;
  left: 0%;
  @media (max-width: 1300px) {
    left: 0%;
    width: 80%;
  }
`

export default Nav
