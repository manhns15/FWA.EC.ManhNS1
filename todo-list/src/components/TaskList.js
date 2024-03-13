import React, { useContext, useMemo, useState } from "react";
import { TodoContext } from "../context/TodoContext";
import TaskTabs from "./TaskTab";
import TableItem from "./TableItem";
import { CONSTANT } from "../constant/Constant";

const TaskList = () => {
  const { tasks } = useContext(TodoContext);
  const [activeTab, setActiveTab] = useState(CONSTANT.TODO);

  const taskTabs = useMemo(() => {
    return tasks.filter((todo) => {
      if (activeTab === CONSTANT.TODO) {
        return !todo.checked;
      } else if (activeTab === CONSTANT.DONE) {
        return todo.checked;
      }
      return true;
    });
  }, [tasks, activeTab]);

  return (
    <>
      <TaskTabs activeTab={activeTab} onChangeTab={setActiveTab} />
      <TableItem tasks={taskTabs} />
    </>
  );
};

export default TaskList;
