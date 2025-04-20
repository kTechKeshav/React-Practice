import React from 'react'

const Person = ({name, age}) => {
  return (
    <div>
      Person Details:
      <h2>Name = {name}</h2>
      <p>Age = {age}</p>
    </div>
  )
}

export default Person
