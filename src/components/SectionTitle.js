import React from 'react'

const SectionTitle = ({ title }) => {
  return (
    <div
      style={{
        textTransform: 'uppercase',
        position: 'relative',
        fontWeight: 'bold',
        fontSize: '1.5rem',
        paddingBottom: '3rem',
        width: 'max-content',
      }}
    >
      <p style={{ zIndex: 1, position: 'relative' }}>{title}</p>
      <div
        style={{
          width: '100%',
          height: '0.8rem',
          position: 'absolute',
          top: '1rem',
          zIndex: '0',
          left: '0.5rem',
          backgroundColor: 'var(--color-secondary)',
        }}
      ></div>
    </div>
  )
}

export default SectionTitle
