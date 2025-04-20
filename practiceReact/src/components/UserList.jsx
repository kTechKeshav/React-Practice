import React from 'react'

const UserList = () => {
      const users = [{
            id: 1,
            name: "Alice",
            age: 25
      }, {
            id: 2,
            name: "Bob",
            age: 49
      }, {
            id: 3,
            name: "Charlie",
            age: 23
      }]
  return (
    <div>
      {
            users.map(({id, name, age}) =>(
                  <div key={id}>
                        <h3>Name <b>{name}</b></h3>
                        <p>Age <b>{age}</b></p>
                  </div>
            ))
      }
    </div>
  )
}

export default UserList
