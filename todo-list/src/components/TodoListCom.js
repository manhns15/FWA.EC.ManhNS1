import React, { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";

const TodoListCom = () => {
  const { todos, updateTodo, deleteTodo } = useContext(TodoContext);
  const [editingId, setEditingId] = useState(null);
  const [updateForm, setUpdateForm] = useState({
    name: "",
    description: "",
  });
  const [tab, setTab] = useState("todo");

  const handleToggle = (id) => {
    const updatedTodo = todos.find((todo) => todo.id === id);
    updateTodo(id, { ...updatedTodo, checked: !updatedTodo.checked });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdateForm({
      ...updateForm,
      [name]: value,
    });
  };

  const handleEdit = (id, name, description) => {
    setEditingId(id);
    setUpdateForm({ name, description });
  };

  const handleSave = (id) => {
    updateTodo(id, {
      id,
      name: updateForm.name,
      description: updateForm.description,
    });
    setEditingId(null);
    setUpdateForm({ name: "", description: "" });
  };

  const handleDelete = (id) => {
    deleteTodo(id);
  };

  const TabTodos = todos.filter((todo) => {
    if (tab === "todo") {
      return !todo.checked;
    } else if (tab === "done") {
      return todo.checked;
    }
    return true;
  });

  return (
    <>
      <div>
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <span
              className={tab === "todo" ? "nav-link active" : "nav-link "}
              aria-current="page"
              onClick={() => setTab("todo")}
            >
              Active
            </span>
          </li>
          <li className="nav-item">
            <span
              onClick={() => setTab("done")}
              className={tab === "done" ? "nav-link  active" : "nav-link"}
            >
              Done
            </span>
          </li>
        </ul>
      </div>

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
          {TabTodos.map((todo) => (
            <tr key={todo.id}>
              <th scope="row">{todo.id}</th>
              <td>
                {editingId === todo.id ? (
                  <>
                    <input
                      type="text"
                      name="name"
                      value={updateForm.name}
                      onChange={handleChange}
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
                      name="name"
                      value={updateForm.description}
                      onChange={handleChange}
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
                    id="flexSwitchCheckChecked"
                    checked={todo.checked}
                    onChange={() => handleToggle(todo.id)}
                  />
                </div>
              </td>
              <td>
                {editingId === todo.id ? (
                  <button
                    className="btn btn-success me-2"
                    onClick={() => handleSave(todo.id)}
                  >
                    Save
                  </button>
                ) : (
                  <button
                    className="btn btn-success me-2"
                    onClick={() =>
                      handleEdit(todo.id, todo.name, todo.description)
                    }
                  >
                    Edit
                  </button>
                )}

                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(todo.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TodoListCom;
