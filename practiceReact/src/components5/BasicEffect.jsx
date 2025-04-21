import React, { useEffect } from 'react'

const BasicEffect = () => {
      useEffect(()=>{
            console.log("On First Mount");
      }, [])
  return (
    <div>
      This is BasicEffect.jsx component.
    </div>
  )
}

export default BasicEffect
