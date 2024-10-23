import React from 'react'
import facebook from '../img/icons/facebook-f.svg'
import linkedin from '../img/icons/linkedin.svg'
import github from '../img/icons/github.svg'
import gitlab from '../img/icons/gitlab.svg'

const socialLinks = [
  {
    imgSrc: facebook,
    title: 'Facebook',
    link: 'https://www.facebook.com/grant.cahn/',
  },
  {
    imgSrc: linkedin,
    title: 'LinkedIn',
    link: 'https://www.linkedin.com/in/grant-cahn-975974133/',
  },
  {
    imgSrc: github,
    title: 'GitHub',
    link: 'https://github.com/grantcahn',
  },
  {
    imgSrc: gitlab,
    title: 'GitLab',
    link: 'https://gitlab.outblaze.net/grant_animocalabs',
  },
]

const SocialIcon = ({ imgSrc, title, link }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <div>
        <img
          src={imgSrc}
          alt={title}
          style={{
            width: '2rem',
            height: '2rem',
          }}
        />
      </div>
    </a>
  )
}

const Socials = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '2rem',
      }}
    >
      {socialLinks.map((social, index) => (
        <SocialIcon key={index} {...social} />
      ))}
    </div>
  )
}

export default Socials
