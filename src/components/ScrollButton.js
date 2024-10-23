import React from 'react'

const ScrollButton = ({ direction, isActive }) => {
  const orientation = direction === 'left' ? '' : 'rotate(180deg)'
  const color = 'var(--color-quaternary)'

  return (
    <button
      style={{
        borderRadius: '50%',
        border: 'none',
        padding: '1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        aspectRatio: '1:1',
        backgroundColor:
          isActive !== true ? 'var(--color-text)' : 'var(--color-tertiary)',
      }}
    >
      <svg
        width="12"
        height="12"
        viewBox="0 0 24 24"
        style={{ transform: orientation, width: '1.5rem', height: '1.5rem' }}
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14 2.10046L16.8284 4.92889L9.75736 12L16.8284 19.071L14 21.8995L4.10051 12L14 2.10046Z"
          fill={color}
        />
      </svg>
    </button>
  )
}

export default ScrollButton
