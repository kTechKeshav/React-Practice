import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const styles = {backgroundColor: "black", padding: "5px", color: "white", borderRadius: "7px", fontSize: "1.2rem", fontFamily: "cursive"}
  return (
    <div
      style={{
        backgroundColor: "lightgreen",
        margin: "0px",
        padding: "0px",
        boxSizing: "border-box",
        width: "100%",
        padding: "10px",
        border: "2px solid black",
        borderRadius: "5px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <button
            style={styles}
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        Increment
      </button>


      <div style={{ fontSize: "3rem" }}>{count}</div>


      <button
            style={styles}
        onClick={() => {
          setCount((prev) => prev - 1);
        }}
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;
