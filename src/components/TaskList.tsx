import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import TaskItem from "./TaskItem";
import { changeStatus, deleteTask } from "../redux/slice/TaskSlice";
import { PriorityColor } from "../constants";

const TaskList = () => {
  const TaskState = useSelector((state: RootState) => state.taskState.tasks);
  const dispatch = useDispatch();
  // Function to handle edit - placeholder
  const handleEdit = (id: number) => {
    console.log("Editing", id);
  };

  // Function to handle delete - placeholder
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
                  className="inline-block w-4 h-4"
                ></span>
                <span className="capitalize">{key}</span>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
      <div className="flex flex-col justify-between">
        {/* Incomplete Tasks */}
        <div className="w-full py-4">
          <h2 className="font-bold text-lg mb-4">Incomplete Tasks</h2>
          {TaskState.filter((task) => !task.completed).map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onEdit={handleEdit}
              onDelete={handleDelete}
              onComplete={handleComplete}
            />
          ))}
        </div>

        {/* Completed Tasks */}
        <div className="w-full py-4">
          <h2 className="font-bold text-lg mb-4">Completed Tasks</h2>
          {TaskState.filter((task) => task.completed).map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onEdit={handleEdit}
              onDelete={handleDelete}
              onComplete={handleComplete}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskList;
