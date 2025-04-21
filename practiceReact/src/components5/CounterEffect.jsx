import React, { useEffect, useState } from 'react'

const CounterEffect = () => {
      const [counter, setCounter] = useState(0);

      useEffect(()=>{
            if(counter)
                  document.title=`Counter ${counter}`
      }, [counter])
  return (
    <div>
      <button onClick={()=>{setCounter(prev=>prev+1)}}>Counter : {counter}</button>
    </div>
  )
}

export default CounterEffect
