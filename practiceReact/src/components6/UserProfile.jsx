import React from 'react'
import { UserContext } from './UserContext'
import { useContext } from 'react'

const UserProfile = () => {
      const { user } = useContext(UserContext)

      const containerStyle = {
            maxWidth: '600px',
            margin: '2rem auto',
            padding: '2rem',
            backgroundColor: '#ffffff',
            borderRadius: '12px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            textAlign: 'center'
      };

      const titleStyle = {
            color: '#2d3748',
            fontSize: '1.8rem',
            marginBottom: '1rem',
            fontWeight: '600'
      };

      return (
            <div style={containerStyle}>
                  <h1 style={titleStyle}>Name is: {user.name}</h1>
            </div>
      )
}

export default UserProfile
