import React from 'react'
import styled from 'styled-components'

const ProjectCard = ({ link, imgSrc, icon, title, skills, brandName }) => {
  const [isHovered, setIsHovered] = React.useState(false)
  return (
    <Card
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        style={{
          textDecoration: 'none',
          height: '100%',
          color: 'inherit',
          display: 'block',
        }}
      >
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'end',
          }}
        >
          <div className="skills-div">
            {skills.map((skill, index) => (
              <div
                key={index}
                style={{
                  padding: '1rem 1.5rem',
                  backgroundColor: 'var(--color-bg2)',
                  fontWeight: 'bold',
                  borderRadius: '0.75rem',
                }}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
        <div className="content-div">
          <div className="brand-div">
            <Image src={icon} alt="" />
            <p>{brandName}</p>
          </div>
          <h4>{title}</h4>
        </div>
        <div className="img-wrapper">
          <img
            src={imgSrc}
            alt=""
            className="main-img"
            style={{
              scale: isHovered ? '1.1' : '1',
              transition: '0.4s',
              filter: 'drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.7)',
              display: 'block',
            }}
          />
        </div>
      </a>
    </Card>
  )
}

const Card = styled.div`
  display: flex;
  background-color: var(--color-bg);
  flex-direction: column;
  align-items: start;
  gap: 1rem;
  padding: 2.5rem 0rem 0rem;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.4);
  transition: 0.4s;
  cursor: pointer;
  &:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.7);
    transform: scale(1.03);
  }
  p {
    font-weight: 600;
    font-size: 1.6rem;
  }
  h4 {
    margin: 0;
    max-width: 70%;
    line-height: 1.5;
  }
  .skills-div {
    display: flex;
    flex-wrap: wrap;
    max-width: 80%;
    align-self: flex-end;
    justify-content: end;
    padding: 0rem 2.5rem;
    gap: 1rem;
  }
  .content-div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 0rem 2rem;
  }
  .brand-div {
    display: flex;
    gap: 1rem;
    align-items: center;
  }
  .img-wrapper {
    width: 100%;
    height: 40rem;
    overflow: visible;
    border-radius: 1rem;
  }
  .main-img {
    width: 100%;
    height: 100%;
    object-position: top center;
    object-fit: cover;
    border-radius: 1rem;
    display: block;
  }
`
const Image = styled.img`
  height: 3rem;
  max-width: 4.5rem;
`

export default ProjectCard
