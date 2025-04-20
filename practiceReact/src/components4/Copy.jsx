import React, { useState } from 'react'
import { createPortal } from 'react-dom';
import PopUp from './PopUp';

const Copy = () => {
      const [inputValue, setInputValue] = useState("");
      const [copied, setCopied] = useState(false);

      const copyHandler = ()=>{
            navigator.clipboard.writeText(inputValue).then(()=>{
                  setCopied(true);
                  setTimeout(()=>{
                        setCopied(false)
                  }, 5000)
            })
      }

      const containerStyle = {
            maxWidth: '600px',
            margin: '2rem auto',
            padding: '2rem',
            backgroundColor: '#ffffff',
            borderRadius: '12px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
      };

      const inputStyle = {
            padding: '0.75rem 1rem',
            border: '1px solid #e2e8f0',
            borderRadius: '6px',
            fontSize: '1rem',
            width: '100%',
            boxSizing: 'border-box',
            transition: 'all 0.2s ease'
      };

      const buttonStyle = {
            backgroundColor: copied ? '#48bb78' : '#4299e1',
            color: 'white',
            padding: '0.75rem 1.5rem',
            border: 'none',
            borderRadius: '6px',
            fontSize: '1rem',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            alignSelf: 'flex-start'
      };

  return createPortal(
    <div style={containerStyle}>
      <input 
            type="text" 
            value={inputValue} 
            onChange={e=>setInputValue(e.target.value)}
            style={inputStyle}
            placeholder="Enter text to copy"
      />
      <button 
            onClick={copyHandler}
            style={buttonStyle}
      >
            {copied ? 'Copied!' : 'Copy'}
      </button>
      <PopUp copied={copied}/>
    </div>, document.querySelector("#pop-up")
  )
}

export default Copy;
