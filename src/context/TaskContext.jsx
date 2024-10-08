import React, { createContext, useContext, useReducer } from "react";
import { TaskReducer } from "../reducer/TaskReducer";

const TaskContext = createContext();
const TaskDispatchContext = createContext();

export default function TaskProvider({ children }) {
  const initialItems = JSON.parse(localStorage.getItem("tasks")) || [];

  const [tasks, tasksDispatch] = useReducer(TaskReducer, initialItems);
  return (
    <TaskContext.Provider value={tasks}>
      <TaskDispatchContext.Provider value={tasksDispatch}>
        {children}
      </TaskDispatchContext.Provider>
    </TaskContext.Provider>
  );
}

export function useTask() {
  return useContext(TaskContext);
}

export function useTaskDispatch() {
  return useContext(TaskDispatchContext);
}
