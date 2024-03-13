import React, { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";

const TaskItem = ({ todo }) => {
  console.log("test rendering item", todo);
  const { updateTodo, deleteTodo } = useContext(TodoContext);
  const [editing, setEditing] = useState(false);
  const [updateForm, setUpdateForm] = useState({
    name: todo.name,
    description: todo.description,
  });

  const handleToggle = () => {
    updateTodo(todo.id, { ...todo, checked: !todo.checked });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdateForm({
      ...updateForm,
      [name]: value,
    });
  };

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    updateTodo(todo.id, {
      ...todo,
      name: updateForm.name,
      description: updateForm.description,
    });
    setEditing(false);
  };

  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  return (
    <tr key={todo.id}>
      <th scope="row">{todo.id}</th>
      <td>
        {editing ? (
          <input
            type="text"
            name="name"
            value={updateForm.name}
            onChange={handleChange}
          />
        ) : (
          <>{todo.name}</>
        )}
      </td>
      <td>
        {editing ? (
          <input
            type="text"
            name="description"
            value={updateForm.description}
            onChange={handleChange}
          />
        ) : (
          <>{todo.description}</>
        )}
      </td>
      <td>
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id={`flexSwitchCheckChecked-${todo.id}`}
            checked={todo.checked}
            onChange={handleToggle}
          />
        </div>
      </td>
      <td>
        {editing ? (
          <button className="btn btn-success me-2" onClick={handleSave}>
            Save
          </button>
        ) : (
          <button className="btn btn-success me-2" onClick={handleEdit}>
            Edit
          </button>
        )}

        <button className="btn btn-danger" onClick={handleDelete}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default TaskItem;
