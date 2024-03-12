import React, { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";
import TaskTabs from "./TaskTab";
import TableItem from "./TableItem";
import { CONSTANT } from "../constant/Constant";

const TaskList = () => {
  const { todos, updateTodo, deleteTodo } = useContext(TodoContext);
  const [editingId, setEditingId] = useState(null);
  const [updateForm, setUpdateForm] = useState({
    name: "",
    description: "",
  });
  const [activeTab, setActiveTab] = useState(CONSTANT.TODO);

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

  const taskTabs = todos.filter((todo) => {
    if (activeTab === CONSTANT.TODO) {
      return !todo.checked;
    } else if (activeTab === CONSTANT.DONE) {
      return todo.checked;
    }
    return true;
  });

  return (
    <>
      <TaskTabs activeTab={activeTab} onChangeTab={setActiveTab} />
      <TableItem
        todos={taskTabs}
        onToggle={handleToggle}
        onDelete={handleDelete}
        onEdit={handleEdit}
        editingId={editingId}
        updateForm={updateForm}
        onChange={handleChange}
        onSave={handleSave}
      />
    </>
  );
};

export default TaskList;
