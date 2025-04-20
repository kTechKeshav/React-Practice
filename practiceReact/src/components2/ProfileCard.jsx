import React from 'react'

const ProfileCard = ({children}) => {
      const styles = {backgroundColor: 'lightgray', padding: "15px", borderRadius: "8px", color: "black"}

  return (
    <div style={styles}>
      {children}
    </div>
  )
}

export default ProfileCard
