export const TaskReducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [...state, action.task];

    case "delete":
      return state.filter((task) => task.id !== action.task.id);

    case "update":
      return state.map((task) =>
        task.id === action.task.id ? action.task : task
      );

    case "check":
      return state.map((task) =>
        task.id === action.task.id ? { ...task, done: !task.done } : task
      );
      break;

    default:
      return state;
  }
};
