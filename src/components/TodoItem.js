import React from "react";

const TodoItem = ({ todo, toggleComplete, deleteTodo }) => {
    return (
        <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
          <span className="todo-text" onClick={() => toggleComplete(todo.id)}>
            {todo.todo}
          </span>
          <button className="delete-button" onClick={() => deleteTodo(todo.id)}>
            Delete
          </button>
        </li>
      );
//   return (
//     <li style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
//       <span onClick={() => toggleComplete(todo.id)}>{todo.todo}</span>
//       <button onClick={() => deleteTodo(todo.id)}>Delete</button>
//     </li>
//   );
};

export default TodoItem;