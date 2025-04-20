import React from 'react'

const PopUp = ({copied}) => {
      const popupStyle = {
            position: 'fixed',
            bottom: '2rem',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: '#48bb78',
            color: 'white',
            padding: '0.75rem 1.5rem',
            borderRadius: '6px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            opacity: copied ? 1 : 0,
            transition: 'all 0.3s ease',
            pointerEvents: 'none',
            zIndex: 1000
      };

  return (
    <div style={popupStyle}>
      Copied to Clipboard
    </div>
  )
}

export default PopUp
