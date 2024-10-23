import React from 'react'
import styled from 'styled-components'

const SkillsCard = ({ imgSrc, imgSrc2, title, description }) => {
  return (
    <Card>
      <div className="img-div">
        <Image src={imgSrc} alt="" />
        {imgSrc2 && <Image src={imgSrc2} alt="" />}
      </div>
      <h4>{title}</h4>
      <p>{description}</p>
      <div
        style={{
          width: '5rem',
          height: '0.5rem',
          marginTop: '1rem',
          backgroundColor: 'var(--color-secondary)',
        }}
      ></div>
    </Card>
  )
}

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1rem;
  padding: 6rem 2rem;
  border-radius: 1rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  transition: 0.4s;
  &:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
  h4 {
    margin: 0;
  }
  .img-div {
    display: flex;
    gap: 1rem;
  }
`
const Image = styled.img`
  height: 3rem;
  max-width: 4.5rem;
`

export default SkillsCard
