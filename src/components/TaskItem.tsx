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
      className={`w-full flex justify-between items-center p-2 rounded mb-2 border border-gray-300 shadow-md`}
    >
      <div className="flex-1 flex justify-between items-center pr-4 gap-5">
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            className="h-4 w-4"
            checked={task.completed}
            onChange={() => onComplete(task.id)}
          />
          <span
            style={{ textDecoration: task.completed ? "line-through" : "none" }}
            className={`text-md capitalize break-all text-wrap`}
          >
            {task.name}
          </span>
        </div>
        <span
          style={{
            backgroundColor: `${
              PriorityColor[task.priority as keyof typeof PriorityColor]
            }`,
          }}
          className={`text-sm px-4 py-2 rounded-full`}
        >
          {task.priority}
        </span>
      </div>
      <div>
        <button onClick={() => onEdit(task.id)} className="btn-icon">
          <MdEdit />
        </button>
        <button onClick={() => onDelete(task.id)} className="btn-icon">
          <MdDelete />
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
