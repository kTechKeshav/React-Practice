import React from 'react'

const Product = (props) => {
  return (
    <div>
      Product Details:
      <h2>Name : {props.name}</h2>
      <p>Price : {props.price}</p>
    </div>
  )
}

export default Product
