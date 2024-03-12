import React from "react";

const TaskItem = ({
  todo,
  onToggle,
  onDelete,
  onEdit,
  editingId,
  updateForm,
  onChange,
  onSave,
}) => {
  return (
    <tr key={todo.id}>
      <th scope="row">{todo.id}</th>
      <td>
        {editingId === todo.id ? (
          <>
            <input
              type="text"
              name="name"
              value={updateForm.name}
              onChange={onChange}
            />
          </>
        ) : (
          <>{todo.name}</>
        )}
      </td>
      <td>
        {editingId === todo.id ? (
          <>
            <input
              type="text"
              name="description"
              value={updateForm.description}
              onChange={onChange}
            />
          </>
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
            onChange={() => onToggle(todo.id)}
          />
        </div>
      </td>
      <td>
        {editingId === todo.id ? (
          <button
            className="btn btn-success me-2"
            onClick={() => onSave(todo.id)}
          >
            Save
          </button>
        ) : (
          <button
            className="btn btn-success me-2"
            onClick={() => onEdit(todo.id, todo.name, todo.description)}
          >
            Edit
          </button>
        )}

        <button className="btn btn-danger" onClick={() => onDelete(todo.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default TaskItem;
