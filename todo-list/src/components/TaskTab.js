import React, { memo } from "react";
import { CONSTANT } from "../constant/Constant";

const TaskTabs = memo(({ activeTab, onChangeTab }) => {
  return (
    <div>
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <span
            className={
              activeTab === CONSTANT.TODO ? "nav-link active" : "nav-link"
            }
            aria-current="page"
            onClick={() => onChangeTab(CONSTANT.TODO)}
          >
            Active
          </span>
        </li>
        <li className="nav-item">
          <span
            className={
              activeTab === CONSTANT.DONE ? "nav-link active" : "nav-link"
            }
            onClick={() => onChangeTab(CONSTANT.DONE)}
          >
            Done
          </span>
        </li>
      </ul>
    </div>
  );
});

export default TaskTabs;
