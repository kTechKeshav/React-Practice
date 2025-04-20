import React from 'react'

const Greeting = () => {
      const name = 'John'
  return (
    <div>
      <h1>Hi, {name}</h1>
      <p>Date is = {new Date().getDate()}</p>
    </div>
  )
}

export default Greeting
