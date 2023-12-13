// TodoItem.js
import React from "react";

const TodoItem = ({ todo, onToggle }) => {
  return (
    <div>
      <input type="checkbox" checked={todo.completed} onChange={onToggle} />
      <span
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
      >
        {todo.text}
      </span>
    </div>
  );
};

export default TodoItem;
