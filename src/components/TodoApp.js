import React, { useState, useEffect } from "react";
import axios from "axios";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
import Filter from "./Filter";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");


  
  // Fetch Todos from DummyJSON API
  useEffect(() => {
    const loadTodos = async () => {
      // Load from localStorage
      const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];

      try {
        console.log(savedTodos);
        // Fetch from DummyJSON API
        let fetchedTodos=[];
        if(savedTodos.length===0)
      {
        const response = await axios.get("https://dummyjson.com/todos");
        fetchedTodos = response.data.todos;
      }
    
        // Merge fetched todos with saved todos, giving priority to saved (local) todos
        const mergedTodos = [...savedTodos, ...fetchedTodos.filter(todo => !savedTodos.some(savedTodo => savedTodo.id === todo.id))];
        
        // Update the state and localStorage
        setTodos(mergedTodos);
        localStorage.setItem("todos", JSON.stringify(mergedTodos));
      } catch (error) {
        console.error("Error fetching todos:", error);
        // If API fails, load only from localStorage
        setTodos(savedTodos);
      }
    };

    loadTodos();
  }, []);

  // Add Todo
  const addTodo = (title) => {
    const newTodo = { id: todos.length + 1, todo: title, completed: false };
    localStorage.setItem("todos", JSON.stringify([newTodo, ...todos]));
    setTodos([newTodo, ...todos]);
  };

  // Toggle Complete
  const toggleComplete = (id) => {
    let modifiedTodos= todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    setTodos(modifiedTodos);
    localStorage.setItem("todos", JSON.stringify(modifiedTodos));
  };

  // Delete Todo
  const deleteTodo = (id) => {
    let modifiedTodos=todos.filter(todo => todo.id !== id)
    setTodos(modifiedTodos);
    localStorage.setItem("todos", JSON.stringify(modifiedTodos));
  };

  // Filter Todos
  const filteredTodos = todos.filter(todo => {
    if (filter === "completed") return todo.completed;
    if (filter === "pending") return !todo.completed;
    return true;
  });

  return (
    <div className="todo-app">
    
      <h1>Todo App</h1>
     
      <AddTodo addTodo={addTodo} />
      <Filter setFilter={setFilter} />
      <TodoList todos={filteredTodos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
    </div>
  );
};

export default TodoApp;