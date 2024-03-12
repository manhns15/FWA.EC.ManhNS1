import React, { memo } from "react";
import TaskItem from "./TaskItem";

const TableItem = memo(
  ({
    todos,
    onToggle,
    onDelete,
    onEdit,
    editingId,
    updateForm,
    onChange,
    onSave,
  }) => {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Checked</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <TaskItem
              key={todo.id}
              todo={todo}
              onToggle={onToggle}
              onDelete={onDelete}
              onEdit={onEdit}
              editingId={editingId}
              updateForm={updateForm}
              onChange={onChange}
              onSave={onSave}
            />
          ))}
        </tbody>
      </table>
    );
  }
);

export default TableItem;
