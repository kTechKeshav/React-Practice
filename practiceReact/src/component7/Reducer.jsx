import React from 'react'
import { useReducer } from 'react'

const Reducer = () => {
      const initialState = { count: 0 }
      const reducer = (state, action) => {
            switch (action.type) {
                  case "increment":
                        return { ...state, count: state.count + 1 };
                  case "decrement":
                        return { ...state, count: state.count - 1 };
                  case "reset":
                        return { ...state, count: 0 };
                  default:
                        return state;
            }
      }

      const [state, dispatch] = useReducer(reducer, initialState)

      const containerStyle = {
            maxWidth: '400px',
            margin: '2rem auto',
            padding: '2rem',
            backgroundColor: '#ffffff',
            borderRadius: '12px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            textAlign: 'center'
      };

      const counterStyle = {
            fontSize: '3rem',
            fontWeight: 'bold',
            color: '#2d3748',
            margin: '1.5rem 0'
      };

      const buttonContainerStyle = {
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            marginBottom: '1.5rem'
      };

      const buttonStyle = {
            padding: '0.75rem 1.5rem',
            border: 'none',
            borderRadius: '6px',
            fontSize: '1.2rem',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            minWidth: '100px'
      };

      const incrementButtonStyle = {
            ...buttonStyle,
            backgroundColor: '#48bb78',
            color: 'white'
      };

      const decrementButtonStyle = {
            ...buttonStyle,
            backgroundColor: '#f56565',
            color: 'white'
      };

      const resetButtonStyle = {
            ...buttonStyle,
            backgroundColor: '#4299e1',
            color: 'white'
      };

      const buttonHoverStyle = {
            transform: 'translateY(-2px)',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
      };

      return (
            <div style={containerStyle}>
                  <h1 style={counterStyle}>{state.count}</h1>
                  <div style={buttonContainerStyle}>
                        <button
                              onClick={() => dispatch({ type: "increment" })}
                              style={incrementButtonStyle}
                        >
                              +
                        </button>
                        <button
                              onClick={() => dispatch({ type: "decrement" })}
                              style={decrementButtonStyle}
                        >
                              -
                        </button>
                        <button
                              onClick={() => dispatch({ type: "reset" })}
                              style={resetButtonStyle}
                        >
                              Reset
                        </button>
                  </div>
            </div>
      )
}

export default Reducer
