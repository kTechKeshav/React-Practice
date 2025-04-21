import React, { useEffect, useState } from 'react'

const FetchDataEffect = () => {
      const [data, setData] = useState([]);
      const [loading, setLoading] = useState(true);

      useEffect(()=>{
            const getData = async ()=>{
                  try {
                        setLoading(true);
                        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
                        const finalRes = await res.json();
                        setData(finalRes);
                  } catch (error) {
                        console.error('Error fetching data:', error);
                  } finally {
                        setLoading(false);
                  }
            }
            getData();
      }, [])

      const containerStyle = {
            maxWidth: '800px',
            margin: '2rem auto',
            padding: '1.5rem',
            backgroundColor: '#ffffff',
            borderRadius: '12px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
      };

      const titleStyle = {
            color: '#2d3748',
            fontSize: '1.5rem',
            marginBottom: '1rem'
      };

      if (loading) {
            return <div style={containerStyle}>Loading...</div>;
      }

      if (!data.length) {
            return <div style={containerStyle}>No data available</div>;
      }

      return (
            <div style={containerStyle}>
                  <h2 style={titleStyle}>Title of First Post: {data[0].title}</h2>
            </div>
      )
}

export default FetchDataEffect
