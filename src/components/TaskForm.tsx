import React, { FormEvent, useEffect, useState } from "react";
import { TaskPriorities } from "../constants";
import {
  addTask,
  setEditTaskId,
  taskType,
  updateTask,
} from "../redux/slice/TaskSlice";
import { priorityType } from "../types";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";

const TaskForm = () => {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState<keyof priorityType | string>("");
  const dispatch = useDispatch();
  const { editTaskId, tasks } = useSelector(
    (state: RootState) => state.taskState
  );

  // Action function on Form Submit
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (editTaskId) {
      // modify available task
      dispatch(updateTask({ name: task, priority: priority }));
      dispatch(setEditTaskId(null));
    } else {
      // add new task
      const taskPayload: taskType = {
        id: new Date().getTime(),
        name: task,
        priority,
        completed: false,
      };
      dispatch(addTask(taskPayload));
    }

    // Reset form
    setTask("");
    setPriority("");
  };

  useEffect(() => {
    if (editTaskId) {
      const data = tasks.filter((task) => task.id === editTaskId);
      setTask(data[0].name);
      setPriority(data[0].priority);
    }
  }, [editTaskId, tasks]);

  return (
    <div className="container mx-auto shadow-md bg-white rounded-lg p-5">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-start md:flex-row md:items-center justify-between gap-4"
      >
        <input
          type="text"
          id="taskName"
          value={task}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTask(e.target.value)
          }
          placeholder="Enter task name"
          required
          className="w-full md:flex-1 px-4 py-2 border rounded-md focus-view"
        />
        <select
          id="priority"
          value={priority}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setPriority(e.target.value)
          }
          required
          className="px-4 py-2 border rounded-md focus-view"
        >
          <option value="" disabled>
            Select priority
          </option>
          {Object.entries(TaskPriorities).map(([key, value]) => (
            <option key={key} value={value} className="capitalize">
              {key}
            </option>
          ))}
        </select>
        <button
          type="submit"
          className="btn-primary"
        >
          {editTaskId ? "Update Task" :"Add Task"}
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
