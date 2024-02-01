import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import TaskItem from "./TaskItem";
import { changeStatus, deleteTask, setEditTaskId } from "../redux/slice/TaskSlice";
import { PriorityColor, TaskPriorities } from "../constants";
import { useMemo, useState } from "react";

const TaskList = () => {
  const TaskState = useSelector((state: RootState) => state.taskState.tasks);
  const dispatch = useDispatch();
  const [filter, setFilter] = useState("");

  // Function to filter and Provide tasks
  const Tasks = useMemo(() => {
    return filter ? TaskState.filter((task) => task.priority === filter) : TaskState;
  }, [filter, TaskState]);

  // Function to handle edit
  const handleEdit = (id: number) => {
    dispatch(setEditTaskId(id))
  };

  // Function to handle delete
  const handleDelete = (id: number) => {
    dispatch(deleteTask(id));
  };

  //  Function to handle Complete toggle
  const handleComplete = (id: number) => {
    dispatch(changeStatus(id));
  };

  return (
    <div className="container mx-auto my-4">
      <div className="flex justify-between">
        <div className="flex flex-col gap-2">
          <h6 className="font-semibold">Priority Legends</h6>
          <div className="flex gap-4">
            {Object.entries(PriorityColor).map(([key, value]) => (
              <div key={key}>
                <div className="flex items-center justify-center gap-1">
                  <span
                    style={{ backgroundColor: `${value}` }}
                    className="inline-block w-4 h-4 rounded"
                  ></span>
                  <span className="capitalize">{key}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-start gap-2">
          <label htmlFor="filter" className="font-semibold">
            Filter Tasks
          </label>
          <select
            name="filter"
            value={filter}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setFilter(e.target.value)
            }
            className="p-2 border capitalize rounded-md focus:outline-none"
          >
            <option value={""}>All</option>
            {Object.entries(TaskPriorities).map(([key, value]) => (
              <option key={value} value={value} className="capitalize">
                {key}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-col justify-between">
        {/* Incomplete Tasks */}
        <div className="w-full py-4">
          <h2 className="font-bold text-lg mb-4">Incomplete Tasks -</h2>
          {Tasks.filter((task) => !task.completed).map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onEdit={handleEdit}
              onDelete={handleDelete}
              onComplete={handleComplete}
            />
          ))}
          {Tasks.filter((task) => !task.completed).length === 0 && <h2 className="font-semibold text-center text-md"> No Incomplete Tasks</h2>}
        </div>

        {/* Completed Tasks */}
        <div className="w-full py-4">
          <h2 className="font-bold text-lg mb-4">Completed Tasks -</h2>
          {Tasks.filter((task) => task.completed).map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onEdit={handleEdit}
              onDelete={handleDelete}
              onComplete={handleComplete}
            />
          ))}
          {Tasks.filter((task) => task.completed).length === 0 && <h2 className="font-semibold text-center text-md"> No Completed Tasks</h2>}
        </div>
      </div>
    </div>
  );
};

export default TaskList;
