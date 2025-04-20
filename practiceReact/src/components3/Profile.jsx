import React, { useState } from 'react'
import './Profile.css'

const Profile = () => {
  const [details, setDetails] = useState({
    name: "Keshav Awasthi",
    age: 22
  })

  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  const onSubmitHandler = (e)=>{
      e.preventDefault();

      setDetails((prev)=>{
        return {
          name,
          age
        }
      })
  }

  const onChangeHandler = (e)=>{
      const {name, value} = e.target;

      if(name === "name"){
        setName(value);
      }else if(name === 'age'){
        setAge(value);
      }
  }

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h2>Name : {details.name}</h2>
        <h3>Age : {details.age}</h3>
      </div>

      <form className="profile-form" onSubmit={onSubmitHandler}>
        <div className="form-group">
          <input 
            type="text" 
            onChange={onChangeHandler} 
            name="name" 
            placeholder='Enter Name'
          />
        </div>

        <div className="form-group">
          <input 
            type="text" 
            onChange={onChangeHandler} 
            name="age" 
            placeholder='Enter Age'
          />
        </div>

        <button className="submit-button" type='submit'>Update Details</button>
      </form>
    </div>
  )
}

export default Profile
