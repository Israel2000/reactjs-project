/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const TodoApp = () => {
  const [todo, setTodo] = useState(''); // State for the current todo input
  const [todos, setTodos] = useState([]); // State to store the list of todos

  // Function to handle the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.trim()) {
      // Add the new todo to the list
      setTodos([...todos, todo]);
      setTodo(''); // Clear the input field
    }
  };

  return (
    <div className="todo-container">
      <h1>Todo List</h1>

      {/* Form to add a new todo */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a new task..."
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>

      {/* Display the list of todos */}
      <ul>
        {todos.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
