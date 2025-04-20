import React from 'react'

const Whether = ({temperature}) => {
  return (temperature < 15)? <Below15/> : (temperature > 25) ? <Above25/> : <Between15and25/>
}

const Below15 = ()=>{
  return <h1 style={{color: 'skyblue'}}>It's cold outside</h1>
}

const Between15and25 = ()=>{
  return <h1 style={{color: 'lightgreen'}}>It's nice outside</h1>
}

const Above25 = ()=>{
  return <h1 style={{color: 'orange'}}>It's hot outside</h1>
}

export default Whether
