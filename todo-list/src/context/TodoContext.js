import React, { createContext, useState } from "react";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const addTask = (todo) => {
    setTasks([...tasks, { id: tasks.length + 1, ...todo }]);
  };

  const updateTask = (id, updatedTodo) => {
    setTasks(tasks.map((todo) => (todo.id === id ? updatedTodo : todo)));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((todo) => todo.id !== id));
  };

  return (
    <TodoContext.Provider value={{ tasks, addTask, updateTask, deleteTask }}>
      {children}
    </TodoContext.Provider>
  );
};
