import React from 'react'

const ProductList = () => {
      const products = [{
            id: 1,
            name: "Phone",
            price: "$699"
      }, {
            id: 2,
            name: "Laptop",
            price: "$1200"
      }, {
            id: 3,
            name: "Headphones",
            price: "$199"
      }]
  return (
    <div>
      {products.map(({id, name, price})=>(
            <div key={id}>
                  <h2>Name <b>{name}</b></h2>
                  <p>Price <b>{price}</b></p>
            </div>
      ))}
    </div>
  )
}

export default ProductList
