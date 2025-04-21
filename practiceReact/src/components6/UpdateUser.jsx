import React from 'react'
import { useContext, useState } from 'react';
import { UserContext } from './UserContext';

const UpdateUser = () => {
      const { updateUser } = useContext(UserContext);
      const [newName, setNewName] = useState('');

      const handleSubmit = (e) => {
            e.preventDefault()
            if (newName.trim()) {
                  updateUser(newName)
                  setNewName("")
            }
      }

      const containerStyle = {
            maxWidth: '600px',
            margin: '2rem auto',
            padding: '2rem',
            backgroundColor: '#ffffff',
            borderRadius: '12px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
      };

      const titleStyle = {
            color: '#2d3748',
            fontSize: '1.5rem',
            marginBottom: '1.5rem',
            textAlign: 'center'
      };

      const formStyle = {
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
      };

      const inputStyle = {
            padding: '0.75rem 1rem',
            border: '1px solid #e2e8f0',
            borderRadius: '6px',
            fontSize: '1rem',
            transition: 'all 0.2s ease'
      };

      const inputFocusStyle = {
            outline: 'none',
            borderColor: '#4299e1',
            boxShadow: '0 0 0 3px rgba(66, 153, 225, 0.2)'
      };

      const buttonStyle = {
            backgroundColor: '#4299e1',
            color: 'white',
            padding: '0.75rem 1.5rem',
            border: 'none',
            borderRadius: '6px',
            fontSize: '1rem',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
      };

      const buttonHoverStyle = {
            backgroundColor: '#3182ce',
            transform: 'translateY(-1px)'
      };

      return (
            <div style={containerStyle}>
                  <h2 style={titleStyle}>Update User Name</h2>
                  <form onSubmit={handleSubmit} style={formStyle}>
                        <input
                              type="text"
                              value={newName}
                              onChange={e => setNewName(e.target.value)}
                              placeholder='Enter new name'
                              style={inputStyle}
                        />
                        <button
                              type='submit'
                              style={buttonStyle}
                        >
                              Update Name
                        </button>
                  </form>
            </div>
      )
}

export default UpdateUser
