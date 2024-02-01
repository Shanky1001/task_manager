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
}

const initialState: initialStateType = {
  tasks: [
    {
      id: new Date().getTime(),
      name: "edit functionality",
      priority: "high",
      completed: false,
    },
    {
      id: new Date().getTime(),
      name: "Completed functionality",
      priority: "medium",
      completed: true,
    },
  ],
};

export const TaskSlice = createSlice({
  name: "task slice",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task: taskType) => task.id !== action.payload);
    },
    updateTask: (state, action) => {
      const index = state.tasks.findIndex(
        (task: taskType) => task.id === action.payload.id
      );
      state.tasks.splice(index, 1, action.payload);
    },
    changeStatus: (state, action) => {
      state.tasks = state.tasks.map((task: taskType) =>
        task.id === action.payload
          ? { ...task, completed: !task.completed }
          : task
      );
    },
  },
});

export const { addTask, deleteTask, updateTask,changeStatus } = TaskSlice.actions;
export default TaskSlice.reducer;
