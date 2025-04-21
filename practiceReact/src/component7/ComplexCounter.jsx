import React from "react";
import { useReducer, useState } from "react";

const initialState = { count: 0 };
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };

    case "decrement":
      return { ...state, count: state.count - 1 };

    case "incrementbyamount":
      return { ...state, count: state.count + Number(action.payload) };

    case "decrementbyamount":
      return { ...state, count: state.count - Number(action.payload) };

    case "reset":
            return { ...state, count: 0 };

    default:
      return state;
  }
};

const ComplexCounter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [inputValue, setInputValue] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleIncrementByAmount = () => {
    setIsAnimating(true);
    dispatch({ type: "incrementbyamount", payload: inputValue });
    setInputValue(0);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const handleDecrementByAmount = () => {
    setIsAnimating(true);
    dispatch({ type: "decrementbyamount", payload: inputValue });
    setInputValue(0);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const containerStyle = {
    maxWidth: '500px',
    margin: '2rem auto',
    padding: '2rem',
    backgroundColor: '#1a202c',
    borderRadius: '12px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
    color: '#e2e8f0',
    transition: 'transform 0.3s ease',
    ':hover': {
      transform: 'translateY(-5px)',
    }
  };

  const counterStyle = {
    fontSize: '3.5rem',
    fontWeight: 'bold',
    color: '#ffffff',
    margin: '1.5rem 0',
    textAlign: 'center',
    textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    transition: 'all 0.3s ease',
    transform: isAnimating ? 'scale(1.1)' : 'scale(1)',
  };

  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    marginBottom: '2rem',
    flexWrap: 'wrap'
  };

  const buttonStyle = {
    padding: '0.75rem 1.5rem',
    border: 'none',
    borderRadius: '6px',
    fontSize: '1.1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    minWidth: '100px',
    transform: 'translateY(0)',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    ':hover': {
      transform: 'translateY(-3px) scale(1.05)',
      boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
      letterSpacing: '0.5px',
    },
    ':active': {
      transform: 'translateY(1px) scale(0.98)',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    }
  };

  const primaryButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#4299e1',
    color: 'white',
    ':hover': {
      ...buttonStyle[':hover'],
      backgroundColor: '#3182ce',
      boxShadow: '0 6px 12px rgba(66, 153, 225, 0.3)',
    },
    ':active': {
      ...buttonStyle[':active'],
      backgroundColor: '#2b6cb0',
    }
  };

  const secondaryButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#4a5568',
    color: 'white',
    ':hover': {
      ...buttonStyle[':hover'],
      backgroundColor: '#2d3748',
      boxShadow: '0 6px 12px rgba(74, 85, 104, 0.3)',
    },
    ':active': {
      ...buttonStyle[':active'],
      backgroundColor: '#1a202c',
    }
  };

  const inputContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    marginBottom: '2rem',
    transition: 'all 0.3s ease',
  };

  const inputStyle = {
    padding: '0.75rem 1rem',
    backgroundColor: '#2d3748',
    border: '1px solid #4a5568',
    borderRadius: '6px',
    color: '#e2e8f0',
    fontSize: '1rem',
    transition: 'all 0.3s ease',
    outline: 'none',
    ':focus': {
      borderColor: '#4299e1',
      boxShadow: '0 0 0 3px rgba(66, 153, 225, 0.2)',
      transform: 'scale(1.02)',
    }
  };

  const labelStyle = {
    color: '#a0aec0',
    fontSize: '0.9rem',
    marginBottom: '0.5rem',
    transition: 'all 0.3s ease',
    ':hover': {
      color: '#ffffff',
    }
  };

  return (
    <div style={containerStyle}>
      <h2 style={counterStyle}>{state.count}</h2>

      <div style={buttonContainerStyle}>
        <button
          onClick={() => {
            setIsAnimating(true);
            dispatch({ type: "increment" });
            setTimeout(() => setIsAnimating(false), 300);
          }}
          style={primaryButtonStyle}
        >
          +
        </button>
        <button
          onClick={() => {
            setIsAnimating(true);
            dispatch({ type: "reset" });
            setTimeout(() => setIsAnimating(false), 300);
          }}
          style={primaryButtonStyle}
        >
          Reset
        </button>
        <button
          onClick={() => {
            setIsAnimating(true);
            dispatch({ type: "decrement" });
            setTimeout(() => setIsAnimating(false), 300);
          }}
          style={primaryButtonStyle}
        >
          -
        </button>
      </div>

      <div style={inputContainerStyle}>
        <label style={labelStyle}>Enter Amount:</label>
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          style={inputStyle}
          placeholder="0"
        />
      </div>

      <div style={buttonContainerStyle}>
        <button
          onClick={handleIncrementByAmount}
          style={secondaryButtonStyle}
        >
          Add Amount
        </button>
        <button
          onClick={handleDecrementByAmount}
          style={secondaryButtonStyle}
        >
          Subtract Amount
        </button>
      </div>
    </div>
  );
};

export default ComplexCounter;
