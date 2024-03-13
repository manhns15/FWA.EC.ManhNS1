import React, { useContext, useMemo, useState } from "react";
import { TodoContext } from "../context/TodoContext";
import TaskTabs from "./TaskTab";
import TableItem from "./TableItem";
import { CONSTANT } from "../constant/Constant";

const TaskList = () => {
  const { todos } = useContext(TodoContext);
  const [activeTab, setActiveTab] = useState(CONSTANT.TODO);

  const taskTabs = useMemo(() => {
    return todos.filter((todo) => {
      if (activeTab === CONSTANT.TODO) {
        return !todo.checked;
      } else if (activeTab === CONSTANT.DONE) {
        return todo.checked;
      }
      return true;
    });
  }, [todos, activeTab]);

  return (
    <>
      <TaskTabs activeTab={activeTab} onChangeTab={setActiveTab} />
      <TableItem todos={taskTabs} />
    </>
  );
};

export default TaskList;
