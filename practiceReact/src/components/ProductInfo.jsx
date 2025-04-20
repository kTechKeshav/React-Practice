import React from 'react'

const ProductInfo = () => {
      const product = {
            name: "Laptop",
            price: "$1200",
            availability: "In Stock"
      }
  return (
    <div>
      <h2>Product name is, <b>{product.name}</b></h2>
      <p>Product price <b>{product.price}</b></p>
      <p>Product availability <b>{product.availability}</b></p>
    </div>
  )
}

export default ProductInfo
