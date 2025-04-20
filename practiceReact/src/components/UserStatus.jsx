import React from 'react'

const UserStatus = ({loggedIn, isAdmin}) => {
  return (loggedIn && isAdmin)? <h1>Welcome Admin</h1> : <h2>Welcome User</h2>  
}

export default UserStatus
