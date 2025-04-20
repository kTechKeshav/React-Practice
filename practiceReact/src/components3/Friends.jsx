import React, { useState } from 'react'

const Friends = () => {
      const [friend, setFriend] = useState(['Mayank', 'Rajat', 'Shiv']);

      const addFriendHandler = ()=>{
            setFriend((prev)=>[...prev, "Rudransh"])
      }

      const removeFriendHandler = ()=>{
            setFriend((prev)=>prev.filter((f)=>f!="Mayank Kumar"))
      }

      const updateFriendHandler = ()=>{
            setFriend((prev)=>prev.map((f)=>f==="Mayank"?"Mayank Kumar":f))
      }
  return (
    <div>
      {friend.map((f)=> <h3>{f}</h3> )}
      <button onClick={addFriendHandler}>Add Friend</button>
      <button onClick={removeFriendHandler}>Remove Friend</button>
      <button onClick={updateFriendHandler}>Update Friend</button>
    </div>
  )
}

export default Friends
