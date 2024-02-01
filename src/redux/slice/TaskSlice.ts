import { createSlice } from "@reduxjs/toolkit";
import { priorityType } from "../../types";

export interface taskType {
  id: number;
  name: string;
  priority: keyof priorityType | string;
  completed: boolean;
}

interface initialStateType {
  tasks: taskType[];
  editTaskId: number | null;
}

const initialState: initialStateType = {
  tasks: [
    {
      id: 1,
      name: "edit functionality",
      priority: "high",
      completed: false,
    },
    {
      id: 2,
      name: "Completed functionality",
      priority: "medium",
      completed: true,
    },
  ],
  editTaskId: null,
};

export const TaskSlice = createSlice({
  name: "task slice",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(
        (task: taskType) => task.id !== action.payload
      );
    },
    updateTask: (state, action) => {
      state.tasks = state.tasks.map((task: taskType) =>
        task.id === state.editTaskId
          ? {
              ...task,
              name: action.payload.name,
              priority: action.payload.priority,
            }
          : task
      );
    },
    changeStatus: (state, action) => {
      state.tasks = [...state.tasks].map((task: taskType) =>
        task.id === action.payload
          ? { ...task, completed: !task.completed }
          : task
      );
    },
    setEditTaskId: (state, action) => {
      state.editTaskId = action.payload;
    },
  },
});

export const { addTask, deleteTask, updateTask, changeStatus, setEditTaskId } =
  TaskSlice.actions;
export default TaskSlice.reducer;
