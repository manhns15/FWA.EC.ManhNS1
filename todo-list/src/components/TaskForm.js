import React, { useState, useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const TaskForm = () => {
  const { addTask } = useContext(TodoContext);
  const [task, setTask] = useState({
    name: "",
    description: "",
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};

    if (task.name.trim() === "") {
      newErrors.name = "Name is required";
    } else if (task.description.trim() === "") {
      newErrors.description = "Description is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({
      ...task,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      addTask({
        name: task.name,
        description: task.description,
        checked: false,
      });
      setTask({ name: "", description: "" });
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
            value={task.name}
            onChange={handleChange}
          />
          {errors.name && <p className="invalid">{errors.name}</p>}
          <input
            type="text"
            name="description"
            className="form-control mb-2"
            placeholder="Description"
            value={task.description}
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
