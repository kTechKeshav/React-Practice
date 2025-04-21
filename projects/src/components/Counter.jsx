import React from "react";
import { useReducer } from "react";
import "./Counter.css";

const Counter = () => {
  const initialState = { count: 0 };
  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return { ...state, count: state.count + 1 };
      case "decrement":
        return { ...state, count: state.count - 1 };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="counter-container">
      <h2 className="counter-value">{state.count}</h2>
      <div className="counter-buttons">
        <button
          className="counter-button"
          onClick={() => dispatch({ type: "increment" })}
        >
          +
        </button>
        <button
          className="counter-button"
          onClick={() => dispatch({ type: "decrement" })}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Counter;
