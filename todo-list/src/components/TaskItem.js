import React, { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";

const TaskItem = ({ task }) => {
  console.log("test rendering item", task);
  const { updateTask, deleteTask } = useContext(TodoContext);
  const [editing, setEditing] = useState(false);
  const [updateForm, setUpdateForm] = useState({
    name: task.name,
    description: task.description,
  });

  const handleToggle = () => {
    updateTask(task.id, { ...task, checked: !task.checked });
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
    updateTask(task.id, {
      ...task,
      name: updateForm.name,
      description: updateForm.description,
    });
    setEditing(false);
  };

  const handleDelete = () => {
    deleteTask(task.id);
  };

  return (
    <tr key={task.id}>
      <th scope="row">{task.id}</th>
      <td>
        {editing ? (
          <input
            type="text"
            name="name"
            value={updateForm.name}
            onChange={handleChange}
          />
        ) : (
          <>{task.name}</>
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
          <>{task.description}</>
        )}
      </td>
      <td>
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id={`flexSwitchCheckChecked-${task.id}`}
            checked={task.checked}
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
