import React from 'react'

const StyledCard = ({children}) => {

      const handler = ()=>{
            console.log("Hello");
      }
  return (
    <div onMouseOver={handler} style={{backgroundColor: "lightblue", padding: "20px", borderRadius: "10px", color: "darkblue", textAlign: "center", fontFamily: "cursive", fontWeight: "800"}}>
      {children}
    </div>
  )
}

export default StyledCard
