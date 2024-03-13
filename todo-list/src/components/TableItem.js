import React, { memo } from "react";
import TaskItem from "./TaskItem";

const TableItem = memo(({ tasks }) => {
  console.log("test redering table");
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
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </tbody>
    </table>
  );
});

export default TableItem;
