import home1 from '../../img/home1.jpg'
import circle from '../../img/circle texture.png'

import { About, Description, Image, Hide } from '../../styles'
// Framer Motion
import { motion } from 'framer-motion'
import { titleAnim, photoAnim } from '../../animation'
import styled from 'styled-components'

const HeroSection = () => {
  return (
    <About>
      <Description>
        <motion.div className="header-content">
          <TextureImage
            src={circle}
            alt="guy with a camera"
            style={{ maxWidth: '400px', paddingLeft: '2rem' }}
          />

          <Hide>
            <motion.h3 variants={titleAnim}>MY NAME IS</motion.h3>
            <motion.h2 variants={titleAnim}>GRANT CAHN</motion.h2>
            <motion.h4 variants={titleAnim}>
              I'M A FRONT END DEVELOPER
            </motion.h4>
          </Hide>
        </motion.div>
      </Description>
      <Image>
        <motion.img
          variants={photoAnim}
          src={home1}
          alt="Portrait of the developer of the portfolio site"
        />
      </Image>
    </About>
  )
}

const TextureImage = styled.img`
  max-width: '400px';
  padding-left: '2rem';
  @media (max-width: 1300px) {
    display: none;
  }
`

export default HeroSection
