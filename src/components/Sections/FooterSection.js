import styled from 'styled-components'

import { About, GenericSection } from '../../styles'
import { useScroll } from '../useScroll'
import Socials from '../Socials'
import email from '../../img/icons/email.svg'
import phone from '../../img/icons/phone.svg'
import location from '../../img/icons/location.svg'

const contactDetails = [
  {
    icon: email,
    title: 'grantcahn@gmail.com',
    link: 'mailto:grantcahn@gmail.com'
  },
  {
    icon: phone,
    title: '+27 76 629 2955',
    link: 'tel:+27766292955'
  },
  {
    icon: location,
    title: 'Cape Town, South Africa',
    link: 'https://maps.app.goo.gl/kaQzwca7STfc639u8'
  }
]


const ContactDetail = ({icon, title, link}) => {
  return (
    <a href={link} target='_blank' rel='noreferrer' style={{
      display: 'flex',
      alignItems : 'center',
      justifyContent: 'center',
      gap: '1rem',
    }}>
      <img src={icon} style={{
        width: '30px',
        height: '30px',
        
      }}></img>
      <h5>{title}</h5>
    </a>
  )
}

const FooterSection = () => {
  const [element, controls] = useScroll()
  return (
      <Footer>  
          <div>
            <h6>Get in touch..</h6>
            <h3>Contact</h3>
          </div>
    <div className="contact-details">
      {contactDetails.map((detail, index) => (
        <ContactDetail key={index} {...detail} />
      ))}
    </div>
        <div className="socials-section">
          <Socials />
          <p>&copy; 2024 GCode. All rights reserved. </p>
        </div>
      </Footer>
  )
}

const Footer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 4rem;
padding: 5rem 2rem;
background: var(--color-tertiary);
color: var(--color-bg);
p {
  font-size: 0.9rem;
  color: var(--color-bg2);
  text-align: center;
  padding-top: 0.6rem;
}
h6 {
  color : var(--color-tertiary);
  background: var(--color-secondary);
  width: fit-content;
  font-size: 1.6rem;
  font-weight: 600;  
}
h3 {
  font-size: 3.5rem;
  line-height: 1.1;
  }
h4 {
  margin: 0;
  }
h5 {
  font-size: 1.4rem;
  color: #9f9f9f;
  transition: color 0.3s ease;
  :hover {
    color: var(--color-bg);
   }
  }
.socials-section {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-top: 1rem;
  }
.contact-details {
    width: 100%;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      }
`

export default FooterSection
