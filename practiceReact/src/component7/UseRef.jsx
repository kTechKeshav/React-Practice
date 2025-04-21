import React, { useRef, useState } from 'react'

const UseRef = () => {
      const [name, setName] = useState("")

      const inputName = useRef(null);
      const screen = useRef(null);

      const handleSubmit = (e)=>{
            e.preventDefault();
            screen.current.textContent = inputName.current.value;
      }
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '20px',
      padding: '20px',
      maxWidth: '500px',
      margin: '0 auto',
      fontFamily: 'Arial, sans-serif'
    }}>
      <form onSubmit={handleSubmit} style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '15px'
      }}>
            <input 
              type="text" 
              onChange={(e)=>setName(e.target.value)} 
              ref={inputName}
              style={{
                padding: '10px',
                fontSize: '16px',
                borderRadius: '5px',
                border: '2px solid #ccc',
                outline: 'none',
                transition: 'border-color 0.3s ease',
                ':focus': {
                  borderColor: '#4CAF50'
                }
              }}
              placeholder="Enter your text here"
            />

            <button 
              type='submit'
              style={{
                padding: '10px 20px',
                backgroundColor: '#4CAF50',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: 'bold',
                transition: 'background-color 0.3s ease',
                ':hover': {
                  backgroundColor: '#45a049'
                }
              }}
            >
              Submit
            </button>
      </form>

      <div 
        style={{
          width: '100%',
          minHeight: '100px',
          padding: '15px',
          border: '2px solid #4CAF50',
          borderRadius: '5px',
          backgroundColor: '#f9f9f9',
          fontSize: '16px',
          color: '#333',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          wordBreak: 'break-word'
        }}
        ref={screen}
      >
        Display Screen
      </div>
    </div>
  )
}

export default UseRef
