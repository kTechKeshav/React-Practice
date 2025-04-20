import React from 'react'
import { FaBeer } from 'react-icons/fa'

const IconComponent = ({children}) => {
  return (
    <div>
      {children}<FaBeer style={{fontSize: "30px", color: "gold"}}/>
    </div>
  )
}

export default IconComponent
