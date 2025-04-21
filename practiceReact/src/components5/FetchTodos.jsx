import React, { useEffect, useState } from 'react'

const FetchTodos = () => {
      const [data, setData] = useState([])

      useEffect(()=>{
            const getData = async () => {
                  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
                  
                  const finalres = await res.json();
                  
                  if(finalres && finalres.length ){
                        setData(finalres)
                  }
            }
            getData()
      }, [])

      const containerStyle = {
            maxWidth: '1200px',
            margin: '2rem auto',
            padding: '1rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '1.5rem'
      };

      const todoCardStyle = {
            backgroundColor: '#ffffff',
            padding: '1.5rem',
            borderRadius: '12px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            cursor: 'pointer',
            borderLeft: '4px solid #4299e1'
      };

      const todoCardHoverStyle = {
            transform: 'translateY(-2px)',
            boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)'
      };

      const titleStyle = {
            color: '#2d3748',
            fontSize: '1.2rem',
            marginBottom: '1rem',
            fontWeight: '600'
      };

      const statusStyle = {
            color: '#4a5568',
            fontSize: '0.9rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
      };

      const statusIndicatorStyle = (completed) => ({
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            backgroundColor: completed ? '#48bb78' : '#f56565'
      });

  return (
    <div style={containerStyle}>
      {data.map((todo) => (
            <div 
                  key={todo.id} 
                  style={{
                        ...todoCardStyle,
                        ...(todo.completed ? todoCardHoverStyle : {})
                  }}
            >
                  <h2 style={titleStyle}>{todo.title}</h2>
                  <p style={statusStyle}>
                        <span style={statusIndicatorStyle(todo.completed)} />
                        Status: {todo.completed ? 'Completed' : 'Pending'}
                  </p>
            </div>
      ))}
    </div>
  )
}

export default FetchTodos
