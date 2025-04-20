import React from 'react'

const Card = ({id, children}) => {
      // console.log(children[0].props.children)
      // console.log(children[1].props.children)
      
  return (
    <div id={id}>
      {children}
    </div>
  )
}

export default Card
