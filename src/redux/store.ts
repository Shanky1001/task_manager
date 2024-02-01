import { configureStore } from "@reduxjs/toolkit";
import { TaskSlice } from "./slice/TaskSlice";

export const Store = configureStore({
  reducer: {
    taskState: TaskSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof Store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof Store.dispatch;
