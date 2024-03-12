import React, { useState, useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const TaskForm = () => {
  const { addTodo } = useContext(TodoContext);
  const [todo, setTodo] = useState({
    name: "",
    description: "",
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};

    if (todo.name.trim() === "") {
      newErrors.name = "Name is required";
    } else if (todo.description.trim() === "") {
      newErrors.description = "Description is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTodo({
      ...todo,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      addTodo({
        name: todo.name,
        description: todo.description,
        checked: false,
      });
      setTodo({ name: "", description: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="mb-3 col-10">
          <input
            type="text"
            name="name"
            className="form-control mb-2"
            placeholder="Name"
            value={todo.name}
            onChange={handleChange}
          />
          {errors.name && <p className="invalid">{errors.name}</p>}
          <input
            type="text"
            name="description"
            className="form-control mb-2"
            placeholder="Description"
            value={todo.description}
            onChange={handleChange}
          />
          {errors.description && (
            <p className="invalid">{errors.description}</p>
          )}
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-primary">
            Add New Item
          </button>
        </div>
      </div>
    </form>
  );
};

export default TaskForm;
