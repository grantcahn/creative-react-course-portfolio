// import pages
import Home from './pages/Home'
//GlobalStyle
import GlobalStyle from './components/GlobalStyle'
import Nav from './components/Nav'
import ContactUs from './pages/ContactUs'
import OurWork from './pages/OurWork'
import MovieDetail from './pages/MovieDetail'
//Router
import { Routes, Route, useLocation } from 'react-router-dom'
// animation
import { AnimatePresence } from 'framer-motion'

function App() {
  const location = useLocation()
  //adjust scroll behaviour
  window.onload = () => {
    setTimeout(() => {
      window.scrollTo(0, 0)
    }, 1)
  }
  return (
    <div className="App">
      <GlobalStyle />
      {/* <Nav /> */}
      <AnimatePresence
        exitBeforeEnter
        onExitComplete={() => {
          window.scrollTo(0, 0)
        }}
      >
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<OurWork />} />
          <Route path="/work/:id" element={<MovieDetail />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </AnimatePresence>
    </div>
  )
}

export default App
