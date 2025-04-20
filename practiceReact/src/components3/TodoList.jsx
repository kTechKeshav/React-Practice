import React, { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (title.trim()) {
      setTodos((prev) => [...prev, { id: Date.now(), title, desc }]);
      setTitle("");
      setDesc("");
    }
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    if (name === "title") {
      setTitle(value);
    } else if (name === "desc") {
      setDesc(value);
    }
  };

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "2rem",
        minHeight: "100vh",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <style>
        {`
                  @media (max-width: 768px) {
                        .container {
                              padding: 1rem;
                        }
                        .todo-item {
                              padding: 1rem;
                        }
                  }
                  .form-input:focus {
                        border-color: #4a90e2;
                        box-shadow: 0 0 0 2px rgba(74, 144, 226, 0.2);
                        outline: none;
                  }
                  .todo-item {
                        transition: transform 0.2s ease, box-shadow 0.2s ease;
                  }
                  .todo-item:hover {
                        transform: translateY(-2px);
                        box-shadow: 0 4px 8px rgba(0,0,0,0.1);
                  }
            `}
      </style>
      <h2
        style={{
          textAlign: "center",
          color: "#2c3e50",
          fontSize: "2.5rem",
          marginBottom: "2rem",
          fontWeight: "600",
        }}
      >
        Todo List
      </h2>

      <form
        onSubmit={onSubmitHandler}
        style={{
          background: "white",
          padding: "2rem",
          borderRadius: "12px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          marginBottom: "2rem",
        }}
      >
        <input
          onChange={onChangeHandler}
          type="text"
          value={title}
          name="title"
          placeholder="Enter Title"
          className="form-input"
          style={{
            width: "100%",
            padding: "1rem",
            marginBottom: "1rem",
            border: "2px solid #e0e0e0",
            borderRadius: "8px",
            fontSize: "1rem",
            transition: "all 0.3s ease",
          }}
        />
        <textarea
          onChange={onChangeHandler}
          value={desc}
          name="desc"
          placeholder="Enter Description"
          className="form-input"
          style={{
            width: "100%",
            padding: "1rem",
            marginBottom: "1rem",
            minHeight: "120px",
            border: "2px solid #e0e0e0",
            borderRadius: "8px",
            fontSize: "1rem",
            transition: "all 0.3s ease",
            resize: "vertical",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "1rem 2rem",
            backgroundColor: "#4a90e2",
            color: "white",
            border: "none",
            borderRadius: "8px",
            fontSize: "1rem",
            cursor: "pointer",
            width: "100%",
            transition: "all 0.3s ease",
            fontWeight: "600",
          }}
        >
          Add Todo
        </button>
      </form>

      <div
        style={{
          display: "grid",
          gap: "1rem",
        }}
      >
        {todos.map((todo) => {
          return (
            <div
              key={todo.id}
              className="todo-item"
              style={{
                padding: "1.5rem",
                background: "white",
                borderRadius: "12px",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              }}
            >
              <h2
                style={{
                  margin: "0 0 0.5rem 0",
                  color: "#2c3e50",
                  fontSize: "1.5rem",
                  fontWeight: "600",
                }}
              >
                {todo.title}
              </h2>
              <p
                style={{
                  margin: "0",
                  whiteSpace: "pre-wrap",
                  color: "#666",
                  lineHeight: "1.6",
                }}
              >
                {todo.desc}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TodoList;
