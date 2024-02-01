import { PriorityColor } from "../constants";
import { taskType } from "../redux/slice/TaskSlice";
import { MdDelete, MdEdit } from "react-icons/md";

interface TaskItemPropsType {
  task: taskType;
  onEdit: (arg0: number) => void;
  onDelete: (arg0: number) => void;
  onComplete: (arg0: number) => void;
}

const TaskItem = ({
  task,
  onEdit,
  onDelete,
  onComplete,
}: TaskItemPropsType) => {
  
  return (
    <div
      style={{
        backgroundColor: `${
          PriorityColor[task.priority as keyof typeof PriorityColor]
        }`,
      }}
      className={`w-full flex justify-between items-center p-2 rounded mb-2 shadow `}
    >
      <div className="flex-1 flex justify-between items-center pr-4">
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            className="h-4 w-4"
            checked={task.completed}
            onChange={() => onComplete(task.id)}
          />
          <span
            style={{ textDecoration: task.completed ? "line-through" : "none" }}
            className={`text-md capitalize`}
          >
            {task.name}
          </span>
        </div>
        <span className={`text-md capitalize`}>{`(${task.priority})`}</span>
      </div>
      <div>
        <button
          onClick={() => onEdit(task.id)}
          className="p-1 mx-1 border border-black rounded text-lg text-black hover:text-gray-800"
        >
          <MdEdit />
        </button>
        <button
          onClick={() => onDelete(task.id)}
          className="p-1 mx-1 border text-lg border-black rounded text-black hover:text-gray-800"
        >
          <MdDelete />
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
